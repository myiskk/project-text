// 开发环境使用，热加载、代理
var webpackConfig = require('./webpack.config.dev.js');

var opn = require('opn');
var express = require('express');
var webpack = require('webpack');
var proxyMiddleware = require('http-proxy-middleware');
var config = require('./config');
var autoOpenBrowser = true;
var port = config.dev.port;
var app = express();
var compiler = webpack(webpackConfig); // 

var proxyTable = config.dev.proxyTable;

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log:(message) => {console.log(message)}
});
app.use(devMiddleware)
app.use(hotMiddleware)

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
});

Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
});

app.use(express.static('./'));

var uri = 'http://localhost:' + port;
app.use(function (req, res, next) {
    next();
});
devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n')
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }

    // 开启浏览器
    if (autoOpenBrowser) {
        opn(uri + '/index')
    }
});
