import { promises } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MARKDOWN_EXTENSIONS = /* @__PURE__ */ new Set([".md", ".mdx"]);
const EXCLUDED_DIRS = /* @__PURE__ */ new Set(["deprecated", "examples"]);
const MDX_PATTERNS = [
  /^import\s+.+from\s+['"].+['"];?\s*$/gm,
  /<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g,
  /<[A-Z][a-zA-Z]*[^>]*\/>/g
];
function stripMdx(content) {
  return MDX_PATTERNS.reduce(
    (text, pattern) => text.replace(pattern, ""),
    content
  ).replace(/\n{3,}/g, "\n\n").trim();
}
function doc(...sections) {
  const content = sections.flat().join("\n").replace(/\n{3,}/g, "\n\n").trim();
  return new Response(`${content}
`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
function header(name, description) {
  return [`# ${name}`, "", `> ${description}`];
}
function linkList(title, items, site) {
  return [
    "",
    `## ${title}`,
    ...items.map((item) => {
      const description = item.description ? `: ${item.description}` : "";
      return `- [${item.title}](${site}${item.link})${description}`;
    })
  ];
}
function fullItemBlock(item, site) {
  const lines = [`## ${item.title}`, `URL: ${site}${item.link}`];
  if (item.description) {
    lines.push(`Description: ${item.description}`);
  }
  lines.push("", item.body);
  return lines;
}
function toTitleCase(value) {
  return value.replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()).trim();
}
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return { data: {}, body: content };
  }
  const data = {};
  const frontmatter = match[1];
  for (const line of frontmatter.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1).trim();
    }
    if (key) {
      data[key] = value;
    }
  }
  return { data, body: content.slice(match[0].length) };
}
function toRoute(relativePath) {
  const extension = path.extname(relativePath);
  const withoutExtension = relativePath.slice(0, -extension.length);
  const segments = withoutExtension.split(path.sep);
  return `/${segments.join("/")}/`;
}
async function walkPages(dir, relativeRoot = "") {
  const entries = await promises.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(relativeRoot, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) {
        continue;
      }
      files.push(...await walkPages(fullPath, relativePath));
      continue;
    }
    const extension = path.extname(entry.name);
    if (!MARKDOWN_EXTENSIONS.has(extension)) {
      continue;
    }
    if (relativePath === "warnings.md") {
      continue;
    }
    const basename = path.basename(entry.name, extension);
    if (basename === "index") {
      continue;
    }
    const category = relativeRoot ? relativeRoot.split(path.sep)[0] : null;
    files.push({
      filePath: fullPath,
      route: toRoute(relativePath),
      category,
      baseName: basename
    });
  }
  return files;
}
async function resolvePagesDir() {
  const candidates = [
    fileURLToPath(new URL("../../pages", import.meta.url)),
    fileURLToPath(new URL("../../../src/pages", import.meta.url)),
    path.join(process.cwd(), "src/pages")
  ];
  for (const candidate of candidates) {
    try {
      const stat = await promises.stat(candidate);
      if (stat.isDirectory()) {
        return candidate;
      }
    } catch {
    }
  }
  throw new Error("Unable to resolve pages directory for llms generation.");
}
async function getDocsItems() {
  const pagesDir = await resolvePagesDir();
  const pages = await walkPages(pagesDir);
  const items = [];
  for (const page of pages) {
    const raw = await promises.readFile(page.filePath, "utf8");
    const { data } = parseFrontmatter(raw);
    const baseTitle = data.title ? data.title : toTitleCase(page.baseName);
    const categoryTitle = page.category ? toTitleCase(page.category) : "";
    const title = categoryTitle ? `${categoryTitle} – ${baseTitle}` : baseTitle;
    const description = data.description ? data.description : "";
    items.push({
      title,
      description,
      link: page.route
    });
  }
  return items.sort((a, b) => a.link.localeCompare(b.link));
}
async function getDocsFullItems() {
  const pagesDir = await resolvePagesDir();
  const pages = await walkPages(pagesDir);
  const items = [];
  for (const page of pages) {
    const raw = await promises.readFile(page.filePath, "utf8");
    const { data, body } = parseFrontmatter(raw);
    const baseTitle = data.title ? data.title : toTitleCase(page.baseName);
    const categoryTitle = page.category ? toTitleCase(page.category) : "";
    const title = categoryTitle ? `${categoryTitle} – ${baseTitle}` : baseTitle;
    const description = data.description ? data.description : "";
    const strippedBody = stripMdx(body);
    items.push({
      title,
      description,
      link: page.route,
      body: strippedBody
    });
  }
  return items.sort((a, b) => a.link.localeCompare(b.link));
}
function llmsTxt(config) {
  const optional = config.optional && config.optional.length > 0 ? linkList("Optional", config.optional, config.site) : [];
  return doc(
    header(config.name, config.description),
    linkList("Pages", config.items, config.site),
    optional
  );
}
function llmsFullTxt(config) {
  const items = config.items.flatMap((item, index) => {
    const separator = index === 0 ? [] : ["", "---", ""];
    return ["", ...separator, ...fullItemBlock(item, config.site)];
  });
  return doc(header(config.name, config.description), items);
}

export { getDocsItems as a, llmsTxt as b, getDocsFullItems as g, llmsFullTxt as l };
