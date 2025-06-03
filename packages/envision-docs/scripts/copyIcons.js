/* globals require:false __dirname:false */
const fs = require('fs');
const path = require('path');

const rootFolder = path.resolve(__dirname, '..', '..', '..');
const sourcesFolder = path.resolve(
   rootFolder,
   'packages',
   'envision',
   'src',
   'icons'
);
const buildFolder = path.resolve(
   rootFolder,
   'node_modules',
   'envision',
   'dist'
);
const docsFolder = path.resolve(
   rootFolder,
   'packages',
   'envision-docs',
   'static',
   'sitevision'
);

fs.readdirSync(path.resolve(sourcesFolder)).forEach((fileName) => {
   if (!fileName.includes('readme.md')) {
      // Copy from build folder to docs static sitevision folder
      fs.copyFileSync(
         path.resolve(buildFolder, fileName),
         path.resolve(docsFolder, fileName)
      );
   }
});
