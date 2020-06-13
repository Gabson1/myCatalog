const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pathResolver = require('../utils/pathResolver');

const isProd = process.env.NODE_ENV === 'production';

// Webpack plugins that are always in use, regardless of the mode
const plugins = [
  new CleanWebpackPlugin({
    verbose: true,
    cleanOnceBeforeBuildPatterns: pathResolver.serverOutputDir,
  }),
];

// Webpack plugins that are only in use when mode !== 'production'
if (!isProd) {
  plugins.push(
    new WebpackShellPlugin({
      onBuildStart: ['echo "Starting webpack"'],
      onBuildEnd: ['npm run server:watch']
    })
  )
}

// Webpack plugins that are only in use when mode === 'production'
if (isProd) {
  plugins.push(
    new CopyPlugin([{
      from: pathResolver.clientOutputDir,
      to: pathResolver.serverOutputDir,
    }]),
  )
  plugins.push(new webpack.DefinePlugin({
    'process.env.CLIENT_BUILD_DIR': JSON.stringify(pathResolver.clientOutputDir),
  }))

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
        // options: {configFile: '../../tsconfig.json'},
        exclude: [/node_modules/, /src\/client\//],
        include: pathResolver.serverRootDir
      },
    ],
  },
  resolve: {
    // Add `.ts` and `.js` as a resolvable extension.
    extensions: ['.ts', '.js'],
  },
  plugins,
  output: {
    filename: 'server.js',
    path: pathResolver.serverOutputDir,
  },
};