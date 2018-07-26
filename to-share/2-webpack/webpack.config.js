const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        t1: './src/js/j1.js'
    },
    output: {
        filename: 'j1.js',
        path: path.resolve(__dirname, "dist")
    }
}