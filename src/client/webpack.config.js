const path = require('path');
const fs = require('fs');

const entryDir = './src/client/src';

module.exports = {
  entry: path.join(entryDir, '../', 'client.js'),
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [{
      oneOf: [
        {
          test: [/\.jpe?g$/, /\.png$/],
          use: 'file-loader',
          include: path.join(__dirname, entryDir),
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: 'ts-loader',
          include: path.join(__dirname, entryDir),
          exclude: /node_modules/,
        },
        {
          test: [/\.css$/, /\.module.css$/],
          use: ['style-loader', 'css-loader'],
          include: path.join(__dirname, entryDir),
          exclude: /node_modules/,
        },
        {
          test: /\.html$/i,
          use: 'html-loader',
          include: path.join(__dirname, entryDir),
          exclude: /node_modules/,
        }
      ]
    }]
  }
};