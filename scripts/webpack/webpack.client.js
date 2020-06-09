const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const pathResolver = require('../utils/pathResolver');

module.exports = {
  target: 'node',
  devtool: 'inline-source-map',
  entry: '../../public/index.html',
  module: {
    rules: [
      { // File Loader
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
        exclude: /node_modules/,
        include: pathResolver.clientRootDir
      },
      { // Css Loader
        test: /\.(css|module\.css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'local',
                localIdentName: '[name]_[local]__[hash:base64:5]',
              },
            }
          },
        ],
        exclude: /node_modules/,
        include: pathResolver.clientRootDir
      },
      { // Typescript + Javascript Loaders
        test: /\.(js|ts)x?$/,
        use: [{
          loader: 'babel-loader',
        }, {
          loader: 'ts-loader',
        }],
        exclude: /node_modules/,
        include: pathResolver.clientRootDir
      },
      { // HTML LOADER
        test: /\.html$/,
        use: 'html-loader',
        exclude: /node_modules/,
        include: pathResolver.clientRootDir
      }
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
