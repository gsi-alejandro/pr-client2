/**
 * Created by cervantes on 26/12/16.
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        new ExtractTextPlugin('[name].[hash].css'),
        new TypedocWebpackPlugin({
            name: 'Documentation',
            mode: 'file',
            theme: 'default',
            out: '../docs',
            includeDeclarations: false,
            ignoreCompilerErrors: true
        })
    ]
});
