var webpackMerge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config.base');
var webpack = require('webpack');
const path = require("path");

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
