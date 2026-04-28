/* globals require:false, module:false, __dirname:false, process:false */
const fs = require('fs');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const zlib = require('zlib');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');

const OUTPUT_DIRS = [
   path.resolve(REPO_ROOT, 'packages', 'envision-docs', 'static', 'sitevision'),
   path.resolve(REPO_ROOT, 'packages', 'envision-docs', 'static', 'dist'),
];

const ICON_SETS = [
   {
      name: 'envision-icons',
      dir: path.resolve(
         REPO_ROOT,
         'packages',
         'envision',
         'src',
         'icons',
         'envision-icons'
      ),
   },
   {
      name: 'file-icons',
      dir: path.resolve(
         REPO_ROOT,
         'packages',
         'envision',
         'src',
         'icons',
         'file-icons'
      ),
   },
   {
      name: 'link-icons',
      dir: path.resolve(
         REPO_ROOT,
         'packages',
         'envision',
         'src',
         'icons',
         'link-icons'
      ),
   },
];

const readSvgFiles = (dir) =>
   fs
      .readdirSync(dir)
      .filter((file) => file.endsWith('.svg'))
      .map((file) => ({
         name: file,
         path: path.join(dir, file),
         contents: fs.readFileSync(path.join(dir, file), 'utf-8'),
      }));

const buildSprite = ({ name, dir }, outDir) => {
   const spriter = new SVGSpriter({
      shape: {
         id: {
            generator: (filePath) => path.basename(filePath, '.svg'),
         },
         transform: ['svgo'],
      },
      svg: {
         xmlDeclaration: true,
         doctypeDeclaration: false,
      },
      mode: {
         symbol: {
            sprite: `${name}.svg`,
         },
      },
   });

   const files = readSvgFiles(dir);
   for (const file of files) {
      spriter.add(file.path, null, file.contents);
   }

   return new Promise((resolve, reject) => {
      spriter.compile((error, result) => {
         if (error) {
            reject(error);
            return;
         }
         const sprite = result.symbol.sprite;
         let contents = sprite.contents.toString();

         // Remove xmlns from symbol tags
         contents = contents.replace(/<symbol\b[^>]*>/gi, (match) =>
            match.replace(/\s+xmlns="[^"]*"/gi, '')
         );

         fs.mkdirSync(outDir, { recursive: true });
         const outPath = path.join(outDir, `${name}.svg`);
         fs.writeFileSync(outPath, contents);
         writeCompressed(outPath, contents);
         resolve();
      });
   });
};

const writeCompressed = (filePath, contents) => {
   fs.writeFileSync(`${filePath}.gz`, zlib.gzipSync(contents));
   fs.writeFileSync(
      `${filePath}.br`,
      zlib.brotliCompressSync(contents, {
         params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
         },
      })
   );
};

const buildSprites = async () => {
   for (const outDir of OUTPUT_DIRS) {
      for (const set of ICON_SETS) {
         await buildSprite(set, outDir);
      }
   }
};

if (require.main === module) {
   buildSprites().catch((error) => {
      console.error(error);
      process.exitCode = 1;
   });
}

module.exports = buildSprites;
