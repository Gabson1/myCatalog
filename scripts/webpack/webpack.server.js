const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const pathResolver = require('../utils/pathResolver');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  new CleanWebpackPlugin({ // https://www.npmjs.com/package/clean-webpack-plugin
    verbose: true,
    cleanOnceBeforeBuildPatterns: pathResolver.serverOutputDir,
  }),
];

if (!isProd) {
  plugins.push(
    new WebpackShellPlugin({
      onBuildStart: ['echo "Starting webpack"'],
      onBuildEnd: ['npm run server:watch']
    })
  )
}

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV,
  watch: !isProd,
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  entry: pathResolver.serverEntryPoint,
  module: {
    rules: [
      { // TS LOADER
        test: /\.(ts|js)$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /src\/client\//],
        include: pathResolver.serverRootDir
      },
    ],
  },
  resolve: {
    // Add `.ts` and `.js` as a resolvable extension.
    extensions: ['.ts', '.js']
  },
  plugins,
  output: {
    filename: 'server.js',
    path: pathResolver.serverOutputDir,
  },
};