/* globals require:false, module:false, __dirname:false */
const path = require('path');
const process = require('process');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

const dev = process.env.NODE_ENV === 'development';

console.log('Running dev mode', dev);

module.exports = {
   mode: dev ? 'development' : 'production',
   devtool: 'source-map',
   entry: './src/js/envision.js',
   output: {
      filename: 'envision.js',
      path: dev
         ? path.resolve(__dirname, '..', 'envision-docs', 'public', 'dist')
         : path.resolve(__dirname, 'dist'),
      library: {
         name: 'envision',
         type: 'umd',
      },
      globalObject: 'this',
      publicPath: 'auto',
      chunkFilename: '[name]-[contenthash].js',
   },
   optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'envision.css',
      }),
      new ESLintPlugin(),
      new CompressionPlugin({ filename: '[path].gz' }),
      new CompressionPlugin({
         filename: '[path].br',
         algorithm: 'brotliCompress',
         test: /\.(js|css|json|html|svg)$/,
         compressionOptions: {
            params: {
               [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
            },
         },
      }),
   ],
   externals: {
      jquery: {
         commonjs: 'jquery',
         commonjs2: 'jquery',
         amd: 'jquery',
         root: 'jQuery',
      },
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
                     presets: [
                        [
                           '@babel/preset-env',
                           {
                              corejs: { version: '3' },
                              useBuiltIns: 'usage',
                           },
                        ],
                     ],
                  },
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
