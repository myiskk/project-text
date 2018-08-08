const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname, '../');
// 'webpack-hot-middleware/client?noInfo=true&reload=true'
module.exports = {
    entry: {
        j1: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/js/j1.js']
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: [
                    {  
                        loader: 'url-loader',  
                        options: {
                            limit: '10240',
                            name: '[name].[ext]',
                            outputPath: '../dist/img/'
                        }
                    },  
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'html-withimg-loader!' + ROOT_PATH + '/src/index.html',
            chunks: ['j1']
        }),
    ]
}
