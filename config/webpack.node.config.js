/* eslint-disable */
var path = require('path');
var merge = require('webpack-merge');

// Plugins
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge([
  {
    plugins: [
      new CopyWebpackPlugin([
        { 
          from: 'src/static', to: '/' 
        }
      ]),
    ],
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, '..', 'dist'),
      publicPath: '/',
    },
  }
]);
