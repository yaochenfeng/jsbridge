const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index:'./src/index.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development Demo',
            template: './demo/index.html'
        })
    ],
    output: {
        filename: '[name].js',
        library: 'ycf',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    }
};