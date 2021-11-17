/* global require:false */
const fs = require('fs-extra');
const path = require('path');

fs.copySync(
   path.resolve('packages', 'envision', 'dist'),
   path.resolve('docs', 'dist')
);

fs.copySync(
   path.resolve('packages', 'envision-docs', 'public'),
   path.resolve('docs')
);
