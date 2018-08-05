const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        j1: './src/js/j1.js'
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
              },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: [
                    {  
                        loader: 'url-loader',  
                        options: {
                            limit: '1024',
                            name: '[name].[ext]',
                            outputPath: './image/'
                        }  
                    },  
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'], //匹配删除的文件 
        ),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:  './src/index.html',
            chunks: ['j1']
        }),
      ]
    
}





























// CommonsChunkPlugin
// __dirname：全局变量，存储的是文件所在的文件目录
// __filename：全局变量，存储的是文件名

// 方法将一系列路径或路径段解析为绝对路径。
// path.resolve([from ...], to)
