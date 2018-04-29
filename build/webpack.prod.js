const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        // new CleanWebpackPlugin(['../dist']),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all', // "initial", "async" , "all" 1对入口点的文件进行分块， 2对异步加载的模块进行分块 3对以上两种模式都进行分块
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: 'common',
            cacheGroups: {
                // 第三方依赖
                vender: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vender'
                },
            }
        },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    }
})
