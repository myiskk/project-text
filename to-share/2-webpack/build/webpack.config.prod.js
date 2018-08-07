var webpackMerge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config.base');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
var ROOT_PATH = path.resolve(__dirname, '../');

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },

        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(
            ['dist/*'], //匹配删除的文件
            {
                root: ROOT_PATH,      //根目录
                verbose:  true,   　  //开启在控制台输出信息
                dry:      false       //启用删除文件
            }
        )
    ]
});
