/* eslint-disable */
var path = require('path');
const merge = require("webpack-merge");

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_DIR = path.resolve(__dirname, '../src');

module.exports = merge([
  {
    entry: ['@babel/polyfill', APP_DIR],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader",
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
    ],
  },
]);