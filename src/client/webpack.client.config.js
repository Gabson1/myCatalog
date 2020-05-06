const path = require('path');

const outputDir = path.join(__dirname, '../', 'build', 'client')


module.exports = {
  entry: './client.ts',
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
          rules: [
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
            }
          ]
        },
        {
          test: /\.html$/i,
          use: 'html-loader',
          include: path.join(__dirname, entryDir),
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