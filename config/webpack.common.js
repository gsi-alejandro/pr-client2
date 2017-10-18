/**
 * Created by cervantes on 26/12/16.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

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
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['to-string-loader'].concat(ExtractTextPlugin.extract({     // Sharpen Eye With this bug of webpack
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader',
                        { loader: 'sass-loader'}
                    ]
                }))
                // exclude: '/node_modules/',
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         { loader: 'css-loader', options: { importLoaders: 1 } },
                //         'postcss-loader',
                //         { loader: 'sass-loader'}
                //     ]
                // })
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

        new StyleLintPlugin({
            configFile: '.stylelintrc.json',
            files: 'src/**/*.scss'
        })
    ]
};
