/* globals require:false, module:false, __dirname:false */
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production',
   devtool: 'source-map',
   entry: [
      './src/js/accordion.js',
      './src/js/collapse.js',
      './src/js/dropdown.js',
      './src/js/image-slider.js',
      './src/js/image-viewer.js',
      './src/js/modal-dialog.js',
      './src/js/popover.js',
      './src/js/range-slider.js',
      './src/js/shims.js',
      './src/js/tabs.js',

      './src/scss/base.scss',
      './src/icons/envision-icons.svg',
   ],
   output: {
      filename: 'envision.js',
      path: path.resolve(__dirname, 'dist'),
   },
   optimization: {
      minimizer: [
         new OptimizeCSSAssetsPlugin(),
         new TerserWebpackPlugin({
            cache: true,
            sourceMap: true,
            parallel: true,
         }),
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'envision.css',
      }),
   ],
   externals: {
      jquery: 'jQuery',
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            include: path.resolve(__dirname, './src/js'),
            use: [
               {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env'],
                  },
               },
               {
                  loader: 'eslint-loader',
               },
            ],
         },
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'postcss-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                  },
               },
            ],
         },
      ],
   },
};
