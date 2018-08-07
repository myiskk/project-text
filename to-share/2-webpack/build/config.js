/**
 * Created by luwenliang on 2018/3/6.
 */
var path = require('path');

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"'
        },
        port: 8989,
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 9999,
        historyApiFallback:true,
        autoOpenBrowser: true,
        proxyTable: {
            // '/api/user/video/upload':{
            //     target:'http://123.206.9.214:8080',
            //     changeOrigin:true,
            // },
            // '/api':{
            //     target:'http://dev.live.sohu.com/api',
            //     changeOrigin:true,
            //     pathRewrite:{
            //         '/api':''
            //     }
            // },
            // '/media':{
            //     target:'http://dev.live.sohu.com',
            //     changeOrigin:true
            // },

        },
        cssSourceMap: false
    }
}
