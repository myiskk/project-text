const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 该插件将为你生成一个 HTML5 文件,其中包括使用 script 标签的 body 中的所有 webpack 包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// copy-webpack-plugin

module.exports = {
    mode: 'development', // production
    devtool: 'inline-source-map',
    entry: {
        j1: './src/js/j1.js'
    },
    output: {
        filename: '[name]-[hash].js', // 添加md5哈希码保证文件的唯一，避免缓存
        path: path.resolve(__dirname, "dist")
    },
    // Webpack alias 配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.css'],
        alias: {
            src: path.resolve(__dirname, './src/')
        }
    },
    module: {
        rules: [
            // { 
            //     test: /\.js$/, 
            //     exclude: /node_modules/, 
            //     loader: "babel-loader" 
            // }, // 并不能转换所有
            {
                test: /\.css$/, // 正则，数组
                use: [
                    'style-loader',
                    // MiniCssExtractPlugin.loader, // 生产环境
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {  
                        loader: 'url-loader',  
                        options: {
                            limit: '10240',
                            name: '[name].[ext]',
                            outputPath: './dist/img/'
                        }
                    },  
                ]
            }
        ]    
    },
    optimization: {
        splitChunks: { // 公共代码抽取
            cacheGroups: {  // 自定义配置主要使用它来决定生成的文件
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        }
    },
    devServer: { // 提供 HTTP 服务来预览本地文件；监听文件的变化并自动刷新页面；支持 Source Map，以方便调试。
        contentBase: path.join(__dirname, 'dist'), // 你要提供哪里的内容给虚拟服务器用。绝对路径
        compress: false,
        port: 9999
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
            filename: 'index1.html',
            template:  'html-withimg-loader!./src/index.html',
            chunks: ['vendor', 'j1'],
            title: 'is title'
        }),
        new webpack.HotModuleReplacementPlugin() // 热更新，自动刷新
      ], 
}












































// __dirname：全局变量，存储的是文件所在的文件目录
// __filename：全局变量，存储的是文件名

// 方法将一系列路径或路径段解析为绝对路径。
// path.resolve([from ...], to)
