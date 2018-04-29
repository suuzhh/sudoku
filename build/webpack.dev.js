const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode:  'development', //'production', 
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
}) 