const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');


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
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
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
                            outputPath: './img/'
                        }  
                    },  
                ]
            }
        ]    
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendor',
    //                 chunks: 'all',
    //             }
    //         }
    //     }
    // },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(
            ['dist/*'], //匹配删除的文件 
            {
                root: path.resolve(__dirname),      //根目录
                verbose:  true,   　  //开启在控制台输出信息
                dry:      false       //启用删除文件
            }
        ),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:  './src/index.html',
            chunks: ['j1']
        })
        // new webpack.HotModuleReplacementPlugin()
      ],

    
}











































// CommonsChunkPlugin
// __dirname：全局变量，存储的是文件所在的文件目录
// __filename：全局变量，存储的是文件名

// 方法将一系列路径或路径段解析为绝对路径。
// path.resolve([from ...], to)
