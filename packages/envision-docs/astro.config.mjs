// @ts-check
import { defineConfig } from 'astro/config';
import { redirects } from './redirects.mjs';
import { svRemarkLayoutPlugin } from './sv-remark-layout-plugin.mjs';
import { svRemarkClassNames } from './sv-remark-class-names.mjs';
import { svRemarkCopyExamples } from './sv-remark-copy-examples.mjs';

import path from 'path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
   compressHTML: true,
   build: {
      inlineStylesheets: `never`,
   },
   server: {
      port: 8000,
   },
   devToolbar: {
      enabled: false,
   },
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
               assetFileNames: (asset) =>
                  asset?.names[0]?.endsWith('.css')
                     ? `_astro/docs.[hash][extname]`
                     : `_astro/docs.[name].[hash][extname]`,
            },
         },
      },
   },
});
