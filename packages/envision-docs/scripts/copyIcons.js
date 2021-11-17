/* globals require:false __dirname:false */
const fs = require('fs');
const path = require('path');

fs.copyFileSync(
   path.resolve(
      __dirname,
      '..',
      '..',
      'envision',
      'dist',
      'envision-icons.svg'
   ),
   path.resolve(__dirname, '..', 'static', 'sitevision', 'envision-icons.svg')
);
