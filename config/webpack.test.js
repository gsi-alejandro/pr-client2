var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var bourbon = require('bourbon').includePaths;
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        exprContextCritical: false,  // to remove angular warning - https://github.com/angular/angular/issues/11580
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: "tslint-loader"
            },
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader?includePaths[]=' + bourbon] // sass-loader not scss-loader
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        )
    ]
}
