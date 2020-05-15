import * as webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const path = require('path');

const serverDir = path.join(__dirname, '../', '../', 'src', 'server');

const outputDir = path.join(__dirname, '../', '../', 'build', 'server')

module.exports = {
  entry: path.join(serverDir, 'server.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new CleanWebpackPlugin({ // https://www.npmjs.com/package/clean-webpack-plugin
      verbose: true,
    }),
    new webpack.HotModuleReplacementPlugin() // https://webpack.js.org/concepts/hot-module-replacement/
  ],
  output: {
    filename: 'server.js',
    path: outputDir,
  },
};