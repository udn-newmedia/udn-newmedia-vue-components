"use strict";

const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "nmd-components.min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./"
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
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
      "~": path.resolve(__dirname, "assets"),
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({ dry: true, protectWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
  ],
};