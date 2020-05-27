const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const serverDir = path.join(__dirname, '../', '../', 'src', 'server');

const outputDir = path.join(__dirname, '../', '../', 'build', 'server')

module.exports = {
  target: 'node',
  externals: nodeExternals(),
  entry: path.join(serverDir, 'server.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.join(serverDir, '/**/*'),
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(serverDir, '/**/*'),
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts' ],
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