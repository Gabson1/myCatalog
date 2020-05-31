const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathResolver = require('../utils/pathResolver');

module.exports = {
  target: 'node',
  externals: nodeExternals(),
  entry: pathResolver.serverEntryPoint,
  devtool: 'inline-source-map',
  module: {
    rules: [
      { // TS LOADER
        test: /\.ts/,
        use: 'ts-loader',
        include: pathResolver.clientRootDir
      },
      { // JS LOADER
        test: /\.js/,
        use: 'babel-loader',
        include: pathResolver.clientRootDir
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ // https://www.npmjs.com/package/clean-webpack-plugin
      verbose: true,
    }),
    new webpack.HotModuleReplacementPlugin() // https://webpack.js.org/concepts/hot-module-replacement/
  ],
  output: {
    filename: 'server.js',
    path: pathResolver.serverOutputDir,
  },
};