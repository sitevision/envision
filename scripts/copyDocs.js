/* global require:false */
const fs = require('fs-extra');
const path = require('path');

fs.copySync(
   path.resolve('packages', 'envision-docs', 'public'),
   path.resolve('docs')
);
