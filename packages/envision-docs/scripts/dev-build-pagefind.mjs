import { access } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import config from '../pagefind.config.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, '..');

const resolveFromPackageRoot = (targetPath) =>
   path.resolve(packageRoot, targetPath);

const outputDir = resolveFromPackageRoot(config.outputPath);
const siteDir = resolveFromPackageRoot(config.site);

const requiredFiles = [
   'pagefind.js',
   'pagefind-entry.json',
   'pagefind-worker.js',
];

const exists = async (targetPath) => {
   try {
      await access(targetPath);
      return true;
   } catch {
      return false;
   }
};

const run = (command, args) =>
   new Promise((resolve, reject) => {
      const child = spawn(command, args, {
         cwd: packageRoot,
         stdio: 'inherit',
      });

      child.on('error', reject);
      child.on('exit', (code) => {
         if (code === 0) {
            resolve();
            return;
         }

         reject(new Error(`${command} ${args.join(' ')} exited with ${code}`));
      });
   });

const hasPagefindBundle = (
   await Promise.all(
      requiredFiles.map((fileName) => exists(path.join(outputDir, fileName)))
   )
).every(Boolean);

if (hasPagefindBundle) {
   console.log('[pagefind] existing bundle found');
   process.exit(0);
}

const hasBuiltHtml = await exists(path.join(siteDir, 'index.html'));

if (hasBuiltHtml) {
   console.log('[pagefind] bundle missing, creating index from existing docs');
   await run(process.execPath, ['./scripts/build-pagefind.mjs']);
} else {
   console.log(
      '[pagefind] bundle and built docs missing, running initial build'
   );
   await run('yarn', ['build']);
}
