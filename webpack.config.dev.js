const path = require('path');
const base = require('./webpack.config.base');

module.exports = Object.assign({}, base, {
   output: {
      filename: 'envision.js',
      path: path.resolve(__dirname, '_docs/assets/envision')
   }
});
