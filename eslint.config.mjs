import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
   baseDirectory: __dirname,
   recommendedConfig: js.configs.recommended,
   allConfig: js.configs.all,
});

export default defineConfig([
   globalIgnores([
      '**/dist',
      '**/docs',
      '**/envision.js',
      '**/public',
      '**/.cache',
   ]),
   {
      extends: compat.extends('eslint:recommended'),

      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.jquery,
         },

         ecmaVersion: 13,
         sourceType: 'module',
      },
      rules: {
         curly: 'error',
      },
   },
   {
      files: ['packages/css-vars-to-json/**/*.js'],
      plugins: {
         js,
      },
      languageOptions: {
         ecmaVersion: 13,
         sourceType: 'commonjs',
      },
   },
]);
