const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common_wc.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    index: "./index.html",
    publicPath: "/",
    hot: true,
    port: 8080,
    open: true,
    overlay: {
      error: true
    }
  },
});