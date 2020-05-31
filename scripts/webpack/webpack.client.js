const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathResolver = require('../utils/pathResolver');

// https://webpack.js.org/configuration/mode/#mode-development

module.exports = {
  target: 'node',
  externals: nodeExternals(),
  entry: pathResolver.clientEntryPoint,
  module: {
    rules: [
      { // IMAGE LOADER
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: 'file-loader',
        include: pathResolver.clientRootDir
      },
      { // FONT LOADER
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
        include: pathResolver.clientRootDir
      },
      { // HTML LOADER
        test: /\.(html)$/,
        use: 'html-loader',
        include: pathResolver.clientRootDir
      },
      { // CSS LOADER
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /\.module\.css/,
        include: pathResolver.clientRootDir
      },
      { // CSS MODULES LOADER
        test: /\.module\.css/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ],
        exclude: /\.css/,
        include: pathResolver.clientRootDir
      },
      { // TS LOADER
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: pathResolver.clientRootDir
      },
      { // JS LOADER
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: pathResolver.clientRootDir
      },
    ]
  },
  //
  devServer: {
    port: 3000,
    host: 'localhost',
    hot: true,
  },
  plugins: [
    // Cleans the bundles files before the next bundle
    new CleanWebpackPlugin({ // https://www.npmjs.com/package/clean-webpack-plugin
      verbose: true,
    }),
  ],
  output: {
    filename: 'client.js',
    path: pathResolver.clientOutputDir,
  },
};
