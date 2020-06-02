const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathResolver = require('../utils/pathResolver');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  entry: pathResolver.serverEntryPoint,
  module: {
    rules: [
      { // TS LOADER
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /(node_modules)/,
        include: pathResolver.clientRootDir
      },
      { // JS LOADER
        test: /\.js/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: pathResolver.clientRootDir
      },
    ],
  },
  resolve: {
    // Add `.ts` and `.js` as a resolvable extension.
    extensions: ['.ts', '.js']
  },
  devServer: {
    port: 5000,
    host: 'localhost',
    hot: true,
    contentBase: pathResolver.clientOutputDir
  },
  plugins: [
    new CleanWebpackPlugin({ // https://www.npmjs.com/package/clean-webpack-plugin
      verbose: true,
    }),
  ],
  output: {
    filename: 'server.js',
    path: pathResolver.serverOutputDir,
  },
};