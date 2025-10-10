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

const optimization = {
   minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()],
};

const commonPlugins = [
   new ESLintPlugin(),
   //compress using gzip
   new CompressionPlugin({
      test: /\.(js|css|json|html|svg)$/,
   }),
   //compress using brotli
   new CompressionPlugin({
      algorithm: 'brotliCompress',
      test: /\.(js|css|json|html|svg)$/,
      compressionOptions: {
         params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
         },
      },
   }),
];

module.exports = [
   {
      mode: dev ? 'development' : 'production',
      devtool: 'source-map',
      entry: './src/scss/dashboard/envision-dashboard.scss',
      output: {
         filename: 'envision-dashboard.js',
         path: path.resolve(__dirname, '..', 'envision-docs', 'static', 'dist'),
      },
      optimization,
      plugins: [
         new MiniCssExtractPlugin({
            filename: 'envision-dashboard.css',
         }),
         ...commonPlugins,
      ],
      module: {
         rules: [
            {
               test: /\.scss$/,
               use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  {
                     loader: 'sass-loader',
                     options: {
                        api: 'modern-compiler',
                        sassOptions: {},
                     },
                  },
               ],
            },
         ],
      },
   },
   {
      mode: dev ? 'development' : 'production',
      devtool: 'source-map',
      entry: './src/js/envision.js',
      output: {
         filename: 'envision.js',
         path: path.resolve(__dirname, '..', 'envision-docs', 'static', 'dist'),
         library: {
            name: 'envision',
            type: 'umd',
         },
         globalObject: 'this',
         publicPath: 'auto',
         chunkFilename: '[name]-[contenthash].js',
      },
      optimization,
      plugins: [
         new MiniCssExtractPlugin({
            filename: 'envision.css',
         }),
         ...commonPlugins,
      ],
      externals: {
         jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: 'jQuery',
         },
      },
      // Uncomment to enable debugging of the sass-loader
      // stats: {
      //    loggingDebug: ['sass-loader'],
      // },
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
                  {
                     loader: 'sass-loader',
                     options: {
                        api: 'modern-compiler',
                        sassOptions: {
                           style: 'compressed',
                        },
                     },
                  },
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
   },
];
