const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
   filename: "envision.css"
});

module.exports = {
   entry: [
      './src/js/collapse.js',
      './src/js/dropdown.js',
      './src/js/image-slider.js',
      './src/js/modal-dialog.js',
      './src/js/popover.js',
      './src/js/range-slider.js',
      './src/js/tabs.js',
      './src/scss/base.scss'
   ],
   devtool: 'source-map',
   plugins: [
      new UglifyJSPlugin({
         sourceMap: true
      }),
      extractSass
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
               {
                  loader: 'babel-loader',
                  options: {
                     presets: ['env']
                  }
               },
               {
                  loader: 'eslint-loader'
               }
            ]
         },
         {
            test: /\.scss$/,
            use: extractSass.extract({
               use: [{
                  loader: "css-loader",
                  options: {
                     minimize: true
                  }
               }, {
                  loader: "postcss-loader"
               }, {
                  loader: "sass-loader"
               }]
            })
         },
         {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [{
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]'
               }
            }]
         }
      ]
   }
};
