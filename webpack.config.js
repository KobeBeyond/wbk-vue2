const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: './index.js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.js', '.vue', '.less'],
        alias: {
            '@src': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: './index.html',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        compress: true,
        host: '127.0.0.1',
        port: 8080
    }
}