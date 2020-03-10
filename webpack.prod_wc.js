const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common_wc.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// gzip
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'nosources-source-map',
  // plugins: [new CompressionPlugin()], // gzip
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
});