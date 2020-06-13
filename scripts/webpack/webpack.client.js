const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { prepareProxy } = require('react-dev-utils/WebpackDevServerUtils');

const proxyUrl = require('../../package.json').proxy
const pathResolver = require('../utils/pathResolver');

const proxy = prepareProxy(proxyUrl, pathResolver.publicRootDir);

module.exports = {
  target: 'node',
  devtool: 'inline-source-map',
  entry: pathResolver.clientEntryPoint,
  module: {
    rules: [
      { // File Loader
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
        exclude: /node_modules/,
        include: pathResolver.clientRootDir
      },
      { // Css Loader
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
        include: pathResolver.clientRootDir
      },
      { // Javascript Loader
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { presets: ["@babel/preset-react", "@babel/preset-env"] }
      },
      { // HTML Loader
        test: /\.html$/,
        use: 'html-loader',
        exclude: /node_modules/,
        include: pathResolver.clientRootDir
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    open: true,
    // index: 'index.html',
    proxy,
    // contentBase: pathResolver.clientOutputDir
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: pathResolver.clientOutputDir,
    }),
    new HtmlWebPackPlugin({
      favicon: path.join(pathResolver.clientRootDir, 'assets', 'favicon.ico'),
      template: pathResolver.htmlEntryPoint,
      filename: 'index.html'
    }),
  ],
  output: {
    filename: 'index.js',
    path: pathResolver.clientOutputDir,
  },
};
