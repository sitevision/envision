/* globals require:false __dirname:false */
const fs = require('fs');
const path = require('path');

fs.copyFileSync(
   path.resolve(
      '..',
      '..',
      'node_modules',
      'envision',
      'dist',
      'envision-icons.svg'
   ),
   path.resolve(__dirname, '..', 'static', 'images', 'envision-icons.svg')
);
