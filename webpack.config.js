const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: './main.js',
    output: {
        filename: './index.js',
        path: path.join(__dirname, 'dist'),
        // publicPath: 'dist/'
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', "css-loader", "less-loader"]
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                type: "asset"
            },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
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