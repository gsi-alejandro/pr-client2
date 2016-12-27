var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    shell = require('gulp-shell');

// var files = {
//     client: [ 'dist/**/*.js']
// };

gulp.task('dev', [
    'webpack:dev'
]);

gulp.task('build', [
    'webpack:build'
]);

gulp.task('docs', [
    'webpack:docs'
]);

gulp.task('test', [
    'webpack:test'
]);

gulp.task('webpack:dev', shell.task([
    'webpack-dev-server --inline --progress --port 1666'
]));

gulp.task('webpack:build', shell.task([
    'rimraf dist && webpack --config config/webpack.prod.js --progress --profile --bail'
]));

gulp.task('webpack:docs', shell.task([
    'rimraf docs && webpack --config config/webpack.docs.js --progress'
]));

gulp.task('webpack:test', shell.task([
    'karma start karma.config.js'
]));
