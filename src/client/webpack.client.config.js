const path = require('path');

const outputDir = path.join(__dirname, '../', 'build', 'client')

// https://webpack.js.org/configuration/mode/#mode-development

module.exports = {
  entry: './client.tsx',
  module: {
    rules: [{
      oneOf: [
        {
          test: [/\.jpe?g$/, /\.png$/],
          use: 'file-loader',
          include: './**/*',
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: 'ts-loader',
          include: './**/*',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
          exclude: /\.module\.css$/
        },
        {
          test: /\.html$/i,
          use: 'html-loader',
          include: './**/*',
          exclude: /node_modules/,
        }
      ]
    }]
  },
  output: {
    filename: 'build.js',
    path: outputDir,
  },
};