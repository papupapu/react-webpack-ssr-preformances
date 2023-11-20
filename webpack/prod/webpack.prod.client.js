const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin'); // minify js/ts files
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');

const baseConfig = require('../webpack.base.js');

const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');

const clientConfig = {
  target: 'web',
  mode: 'production',
  entry: {
    client: './src/client/index.js',
  },
  devtool: false,
  resolve: {
    ...baseConfig.resolve,
  },
  module: {
    ...baseConfig.module,
    rules: [
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    path: resolvePath(BUILD_DIR, 'client'),
    publicPath: '/client/',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      ignoreOrder: true,
    }),
    // loadable plugin will create all the chunks
    new LoadablePlugin({
      outputAsset: false,
      writeToDisk: true,
      filename: `${BUILD_DIR}/loadable-stats.json`,
    }),
    // additional plugins (es. BundleAnalyzerPlugin, Copy Plugin etc.)
  ],
  optimization: {
    runtimeChunk: 'single', // creates a runtime file to be shared for all generated chunks
    splitChunks: {
      chunks: 'all', // indicates which chunks will be selected for optimization
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          // convert long vendor generated large name into vendor.js
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({}), // minify css
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // remove all console.log statements
          },
          compress: {
            drop_console: true // stop showing any console.log statement in dev tools
          },
        },
        extractComments: false,
        exclude: [], // files not to be minified
      }),
    ],
  },
};

module.exports = merge(baseConfig, clientConfig);
