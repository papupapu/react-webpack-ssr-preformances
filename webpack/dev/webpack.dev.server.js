const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');

const baseConfig = require('../webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: './src/server/index.js',
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
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: 'chunks/[name].js',
    devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  externals: [
    webpackNodeExternals(),
  ],
};

module.exports = merge(baseConfig, serverConfig);
