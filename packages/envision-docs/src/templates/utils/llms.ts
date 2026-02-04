import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MARKDOWN_EXTENSIONS = new Set(['.md', '.mdx']);
const EXCLUDED_DIRS = new Set(['deprecated', 'examples']);

interface PageFile {
   filePath: string;
   route: string;
   category: string | null;
   baseName: string;
}

export interface LlmsItem {
   title: string;
   description: string;
   link: string;
}

export interface LlmsFullItem extends LlmsItem {
   body: string;
}

interface LlmsTxtConfig {
   name: string;
   description: string;
   site: string;
   items: LlmsItem[];
   optional?: LlmsItem[];
}

interface LlmsFullTxtConfig {
   name: string;
   description: string;
   site: string;
   items: LlmsFullItem[];
}

const MDX_PATTERNS = [
   /^import\s+.+from\s+['"].+['"];?\s*$/gm,
   /<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g,
   /<[A-Z][a-zA-Z]*[^>]*\/>/g,
] as const;

function stripMdx(content: string): string {
   return MDX_PATTERNS.reduce(
      (text, pattern) => text.replace(pattern, ''),
      content
   )
      .replace(/\n{3,}/g, '\n\n')
      .trim();
}

function doc(...sections: (string | string[])[]): Response {
   const content = sections
      .flat()
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

   return new Response(`${content}\n`, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
   });
}

function header(name: string, description: string): string[] {
   return [`# ${name}`, '', `> ${description}`];
}

function linkList(title: string, items: LlmsItem[], site: string): string[] {
   return [
      '',
      `## ${title}`,
      ...items.map((item) => {
         const description = item.description ? `: ${item.description}` : '';
         return `- [${item.title}](${site}${item.link})${description}`;
      }),
   ];
}

function fullItemBlock(item: LlmsFullItem, site: string): string[] {
   const lines = [`## ${item.title}`, `URL: ${site}${item.link}`];
   if (item.description) {
      lines.push(`Description: ${item.description}`);
   }
   lines.push('', item.body);
   return lines;
}

function toTitleCase(value: string): string {
   return value
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .trim();
}

function parseFrontmatter(content: string): {
   data: Record<string, string>;
   body: string;
} {
   const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
   if (!match) {
      return { data: {}, body: content };
   }

   const data: Record<string, string> = {};
   const frontmatter = match[1];
   for (const line of frontmatter.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) {
         continue;
      }
      const separatorIndex = trimmed.indexOf(':');
      if (separatorIndex === -1) {
         continue;
      }
      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();
      if (
         (value.startsWith('"') && value.endsWith('"')) ||
         (value.startsWith("'") && value.endsWith("'"))
      ) {
         value = value.slice(1, -1).trim();
      }
      if (key) {
         data[key] = value;
      }
   }

   return { data, body: content.slice(match[0].length) };
}

function toRoute(relativePath: string): string {
   const extension = path.extname(relativePath);
   const withoutExtension = relativePath.slice(0, -extension.length);
   const segments = withoutExtension.split(path.sep);
   return `/${segments.join('/')}/`;
}

async function walkPages(dir: string, relativeRoot = ''): Promise<PageFile[]> {
   const entries = await fs.readdir(dir, { withFileTypes: true });
   const files: PageFile[] = [];

   for (const entry of entries) {
      if (entry.name.startsWith('.')) {
         continue;
      }
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(relativeRoot, entry.name);
      if (entry.isDirectory()) {
         if (EXCLUDED_DIRS.has(entry.name)) {
            continue;
         }
         files.push(...(await walkPages(fullPath, relativePath)));
         continue;
      }
      const extension = path.extname(entry.name);
      if (!MARKDOWN_EXTENSIONS.has(extension)) {
         continue;
      }
      if (relativePath === 'warnings.md') {
         continue;
      }
      const basename = path.basename(entry.name, extension);
      if (basename === 'index') {
         continue;
      }
      const category = relativeRoot ? relativeRoot.split(path.sep)[0] : null;
      files.push({
         filePath: fullPath,
         route: toRoute(relativePath),
         category,
         baseName: basename,
      });
   }

   return files;
}

async function resolvePagesDir(): Promise<string> {
   const candidates = [
      fileURLToPath(new URL('../../pages', import.meta.url)),
      fileURLToPath(new URL('../../../src/pages', import.meta.url)),
      path.join(process.cwd(), 'src/pages'),
   ];

   for (const candidate of candidates) {
      try {
         const stat = await fs.stat(candidate);
         if (stat.isDirectory()) {
            return candidate;
         }
      } catch {
         // try next candidate
      }
   }

   throw new Error('Unable to resolve pages directory for llms generation.');
}

export async function getDocsItems(): Promise<LlmsItem[]> {
   const pagesDir = await resolvePagesDir();
   const pages = await walkPages(pagesDir);
   const items: LlmsItem[] = [];

   for (const page of pages) {
      const raw = await fs.readFile(page.filePath, 'utf8');
      const { data } = parseFrontmatter(raw);
      const baseTitle = data.title ? data.title : toTitleCase(page.baseName);
      const categoryTitle = page.category ? toTitleCase(page.category) : '';
      const title = categoryTitle
         ? `${categoryTitle} – ${baseTitle}`
         : baseTitle;
      const description = data.description ? data.description : '';
      items.push({
         title,
         description,
         link: page.route,
      });
   }

   return items.sort((a, b) => a.link.localeCompare(b.link));
}

export async function getDocsFullItems(): Promise<LlmsFullItem[]> {
   const pagesDir = await resolvePagesDir();
   const pages = await walkPages(pagesDir);
   const items: LlmsFullItem[] = [];

   for (const page of pages) {
      const raw = await fs.readFile(page.filePath, 'utf8');
      const { data, body } = parseFrontmatter(raw);
      const baseTitle = data.title ? data.title : toTitleCase(page.baseName);
      const categoryTitle = page.category ? toTitleCase(page.category) : '';
      const title = categoryTitle
         ? `${categoryTitle} – ${baseTitle}`
         : baseTitle;
      const description = data.description ? data.description : '';
      const strippedBody = stripMdx(body);
      items.push({
         title,
         description,
         link: page.route,
         body: strippedBody,
      });
   }

   return items.sort((a, b) => a.link.localeCompare(b.link));
}

export function llmsTxt(config: LlmsTxtConfig): Response {
   const optional =
      config.optional && config.optional.length > 0
         ? linkList('Optional', config.optional, config.site)
         : [];

   return doc(
      header(config.name, config.description),
      linkList('Pages', config.items, config.site),
      optional
   );
}

export function llmsFullTxt(config: LlmsFullTxtConfig): Response {
   const items = config.items.flatMap((item, index) => {
      const separator = index === 0 ? [] : ['', '---', ''];
      return ['', ...separator, ...fullItemBlock(item, config.site)];
   });
   return doc(header(config.name, config.description), items);
}
