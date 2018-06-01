const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/bundle.js'
    },
    mode: 'development',
    devServer : {
        contentBase: './dist'
    },
    //automatically takes html file from src and puts itinto dev and adds src 
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    //for babel loader. all files ending in .js should use babel loader. except all in node modules
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }

        ]
    }
};