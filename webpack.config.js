const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/deploy',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Map App'
        })
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader', options: {
                    sourceMap: true
                }
            }, {
                loader: 'less-loader', options: {
                    sourceMap: true
                }
            }]
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        },
        {
            test: /\.(jpg|png)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: 'img/'
                }
            }
        }
    ]
    }
};
