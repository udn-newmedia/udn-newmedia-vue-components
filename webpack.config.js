const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname + '/src/main.js'),
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'udn-newmedia-vue-components.min.js',
        libraryTarget: 'umd',
        library: 'udn-newmedia-vue-components',
        umdNamedDefine: true
    },
    externals: {
        Utils: 'udn-newmedia-utils',
        // lottieWeb: 'lottie-web',
        // d3: 'd3'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!less!css'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
}