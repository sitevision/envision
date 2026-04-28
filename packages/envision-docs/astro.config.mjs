// @ts-check
import { defineConfig } from 'astro/config';
import { redirects } from './redirects.mjs';
import { svRemarkLayoutPlugin } from './sv-remark-layout-plugin.mjs';
import { svRemarkClassNames } from './sv-remark-class-names.mjs';
import { svRemarkCopyExamples } from './sv-remark-copy-examples.mjs';
import mdx from '@astrojs/mdx';
import { normalizePath } from 'vite';

import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ASSETS_FOLDER = 'assets';

const watchEnvisionBuild = () => ({
   name: 'watch-envision-build',
   /**
    * @param {import('vite').ViteDevServer} server
    */
   configureServer(server) {
      console.log('[watch-envision-build] Plugin loaded');
      const watchFiles = [
         path.resolve(__dirname, './static/dist/envision.js'),
      ].map(normalizePath);

      /**
       * @param {string} file
       */
      const reload = (file) => {
         const normalizedFile = normalizePath(file);

         if (!watchFiles.includes(normalizedFile)) {
            return;
         }

         console.log(`[watch-envision-build] Reload triggered due to: ${file}`);
         server.ws.send({ type: 'full-reload' });
      };

      server.watcher.add(watchFiles);
      console.log('[watch-envision-build] Watching files:', watchFiles);
      server.watcher.on('change', reload);

      server.httpServer?.once('close', () => {
         server.watcher.off('change', reload);
      });
   },
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
      mdx(),
      (await import('astro-compress')).default({
         CSS: false,
         HTML: {
            'html-minifier-terser': {
               removeAttributeQuotes: false,
               collapseWhitespace: true,
               conservativeCollapse: true,
               preserveLineBreaks: true,
               collapseInlineTagWhitespace: false,
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
      plugins: [watchEnvisionBuild()],
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
