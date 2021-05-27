/* globals require:false, module:false, __dirname:false */
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production',
   devtool: 'source-map',
   entry: './src/js/envision.js',
   output: {
      filename: 'envision.js',
      path: path.resolve(__dirname, 'dist'),
      library: {
         name: 'envision',
         type: 'umd',
      },
   },
   optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()],
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
               {
                  loader: 'css-vars-to-json',
                  options: {
                     filename: 'envision-css-vars.json',
                  },
               },
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
