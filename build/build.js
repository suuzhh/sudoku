const webpack = require('webpack')
const path = require('path')
const shell = require('shelljs')
const webpackConfig = require('./webpack.prod')

shell.rm('-rf', 'dist')

webpack(webpackConfig, function(err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
})