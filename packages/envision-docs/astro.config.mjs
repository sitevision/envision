// @ts-check
import { defineConfig } from 'astro/config';
import { redirects } from './redirects.mjs';
import { svRemarkLayoutPlugin } from './sv-remark-layout-plugin.mjs';
import { svRemarkClassNames } from './sv-remark-class-names.mjs';
import { svRemarkCopyExamples } from './sv-remark-copy-examples.mjs';

import path from 'path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ASSETS_FOLDER = 'assets';

const watchEnvisionJS = () => ({
   /**
    * @param {import('vite').ViteDevServer} server
    */
   configureServer(server) {
      console.log('[watch-extra-files] Plugin loaded');
      /**
       * @param {string} file
       */
      const reload = (file) => {
         console.log(`[watch-extra-files] Reload triggered due to: ${file}`);
         server.ws.send({ type: 'full-reload' });
      };
      const watchPaths = [path.resolve(__dirname, '../envision/src/js/')];
      server.watcher.add(watchPaths);
      console.log('[watch-extra-files] Watching paths:', watchPaths);
      server.watcher.on('change', reload);
   },
   name: 'watch-extra-files',
});

export default defineConfig({
   site: 'https://envisionui.io',
   base: '/',
   root: '.',
   outDir: '../../docs',
   publicDir: './static',
   trailingSlash: 'always',
   redirects: redirects,
   output: 'static',
   compressHTML: false,
   build: {
      inlineStylesheets: 'never',
      assets: ASSETS_FOLDER,
   },
   integrations: [
      (await import('astro-compress')).default({
         CSS: false,
         HTML: {
            'html-minifier-terser': {
               removeAttributeQuotes: false,
            },
         },
         Image: false,
         JavaScript: false,
         SVG: false,
      }),
   ],
   markdown: {
      syntaxHighlight: 'prism',
      remarkPlugins: [
         svRemarkLayoutPlugin,
         svRemarkCopyExamples,
         svRemarkClassNames,
      ],
   },
   vite: {
      plugins: [watchEnvisionJS()],
      build: {
         rollupOptions: {
            output: {
               entryFileNames: `${ASSETS_FOLDER}/docs.[hash].js`,
               chunkFileNames: `${ASSETS_FOLDER}/docs.chunk.[hash].js`,
               assetFileNames: `${ASSETS_FOLDER}/docs.[hash][extname]`,
            },
         },
      },
   },
   server: {
      port: 8000,
   },
   devToolbar: {
      enabled: false,
   },
});
