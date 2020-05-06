const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '../', 'build')

module.exports = {
  entry: './server.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'server.js',
    path: path.join(outputDir),
  },
};