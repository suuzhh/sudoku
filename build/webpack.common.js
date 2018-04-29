const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
        // another: ['./src/another.js']
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].chunk.js',
        path: resolve('dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "babel-loader" ,
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Production',
            chunks: ['app'], // 制定该 html应用哪些入口点文件
            template: './template.html',
            minify: {
                removeAttributeQuotes: true
            }
        }),
        // css分离
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "static/css/[name].[hash].css",
            chunkFilename: "[id].[hash].css"
          })
    ]
}