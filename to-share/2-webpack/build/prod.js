process.env.NODE_ENV = 'production';

var ora = require('ora');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.prod');

var spinner = ora('building for production...');
spinner.start();

/**
 * webpack方法，返回
 */

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;
    console.log(stats)
    // process.stdout.write(stats.toString({
    //   colors: true,
    //   modules: false,
    //   children: false,
    //   chunks: false,
    //   chunkModules: false
    // }) + '\n\n');

    // https://www.webpackjs.com/api/node/#webpack-
  
    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));
});


