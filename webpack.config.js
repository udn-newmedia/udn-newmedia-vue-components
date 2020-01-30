"use strict";
const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "udn-newmedia-vue-components.min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  mode: "development",
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
          ),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
          outputPath: 'assets/img'
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "src/assets"),
      'ScrollMagic': 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
      'debug.addIndicators': 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    index: "./index.html",
    publicPath: "/",
    hot: true,
    port: 8080,
    open: true,
    // noInfo: true,
    overlay: {
      // warn: true,
      // warning: true,
      error: true
    }
  },
};