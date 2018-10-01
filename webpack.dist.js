const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
   output: {
      filename: 'envision.js',
      path: path.resolve(__dirname, 'dist')
   }
});
