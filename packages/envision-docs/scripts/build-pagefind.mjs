import path from 'node:path';
import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { close, createIndex } from 'pagefind';

import config from '../pagefind.config.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, '..');

const resolveFromPackageRoot = (targetPath) =>
   path.resolve(packageRoot, targetPath);

const siteDir = resolveFromPackageRoot(config.site);
const outputDir = resolveFromPackageRoot(config.outputPath);
const mirrorOutputDir = config.mirrorOutputPath
   ? resolveFromPackageRoot(config.mirrorOutputPath)
   : undefined;

const log = (message) => console.log(`[pagefind] ${message}`);

await rm(outputDir, { recursive: true, force: true });
await mkdir(path.dirname(outputDir), { recursive: true });

const { index, errors: createErrors } = await createIndex(config.indexConfig);

if (!index) {
   createErrors.forEach((error) => console.error(error));
   throw new Error('Pagefind failed to create index');
}

const { page_count: pageCount, errors: addErrors } = await index.addDirectory({
   path: siteDir,
});

if (addErrors.length) {
   addErrors.forEach((error) => console.error(error));
   throw new Error('Pagefind failed to index files');
}

const { outputPath, errors: writeErrors } = await index.writeFiles({
   outputPath: outputDir,
});

if (writeErrors.length) {
   writeErrors.forEach((error) => console.error(error));
   throw new Error('Pagefind failed to write index');
}

if (mirrorOutputDir) {
   await rm(mirrorOutputDir, { recursive: true, force: true });
   await mkdir(path.dirname(mirrorOutputDir), { recursive: true });
   await cp(outputDir, mirrorOutputDir, { recursive: true });
}

await close();

log(`indexed ${pageCount} pages`);
log(`wrote index to ${outputPath}`);

if (mirrorOutputDir) {
   log(`mirrored index to ${mirrorOutputDir}`);
}
