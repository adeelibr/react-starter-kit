/* eslint-disable */
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');
var nodeConfig = require('./webpack.node.config');

module.exports = merge(baseConfig, nodeConfig)