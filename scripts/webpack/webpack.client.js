const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const pathResolver = require('../utils/pathResolver');

module.exports = {
  target: 'node',
  devtool: 'inline-source-map',
  entry: pathResolver.clientEntryPoint,
  module: {
    rules: [
      { // IMAGE LOADER
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: 'file-loader',
        exclude: /(node_modules)/,
        include: pathResolver.clientRootDir
      },
      { // FONT LOADER
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
        exclude: /(node_modules)/,
        include: pathResolver.clientRootDir
      },
      { // HTML LOADER
        test: /\.(html)$/,
        use: 'html-loader',
        exclude: /(node_modules)/,
        include: pathResolver.clientRootDir
      },
      { // CSS LOADER
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /(\.module\.css|node_modules)/,
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
        exclude: /(\.css|node_modules)/,
        include: pathResolver.clientRootDir
      },
      { // TS LOADER
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /(node_modules)/,
        include: pathResolver.clientRootDir
      },
      { // JS LOADER
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: pathResolver.clientRootDir
      },
    ]
  },
  resolve: {
    // Add `.ts`, `.tsx` and `.js`, `.jsx` as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    hot: true,
    contentBase: pathResolver.clientOutputDir
  },
  plugins: [
    new CleanWebpackPlugin({ // https://www.npmjs.com/package/clean-webpack-plugin
      verbose: true,
    }),
    new HtmlWebPackPlugin() // https://www.npmjs.com/package/html-webpack-plugin
  ],
  output: {
    filename: 'client.js',
    path: pathResolver.clientOutputDir,
  },
};
