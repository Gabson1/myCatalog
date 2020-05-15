import * as webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const path = require('path');

const clientDir = path.join(__dirname, '../', '../', 'src', 'client');

const outputDir = path.join(__dirname, '../', '../', 'build', 'client')

// https://webpack.js.org/configuration/mode/#mode-development

module.exports = {
  entry: path.join(clientDir, 'client.tsx'),
  module: {
    rules: [{
      oneOf: [
        {
          test: [/\.jpe?g$/, /\.png$/],
          use: 'file-loader',
          include: path.join(clientDir, '/**/*'),
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: 'ts-loader',
          include: path.join(clientDir, '/**/*'),
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
          exclude: /\.module\.css$/
        },
        {
          test: /\.html$/i,
          use: 'html-loader',
          include: path.join(clientDir, '/**/*'),
          exclude: /node_modules/,
        }
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin({ // https://www.npmjs.com/package/clean-webpack-plugin
      verbose: true,
    }),
    new webpack.HotModuleReplacementPlugin() // https://webpack.js.org/concepts/hot-module-replacement/
  ],
  output: {
    filename: 'build.js',
    path: outputDir,
  },
};