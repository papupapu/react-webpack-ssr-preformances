const webpack = require('webpack');
const { merge } = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin');

const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');

const baseConfig = require('../webpack.base.js');

const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: {
    client: [
      'webpack-hot-middleware/client?reload=true&noInfo=true',
      './src/client/index.js',
    ],
  },
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  output: {
    path: resolvePath(BUILD_DIR, 'client'),
    publicPath: '/client/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    // point sourcemap entries to original disk location (format url as windows)
    devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
    minimize: false,
    minimizer: [],
  },
};

module.exports = merge(baseConfig, clientConfig);
