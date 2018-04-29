const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.dev')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    quiet: true,
    noInfo: true
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3000, function() {
    console.log('Server is running on port 3000!\n')
})