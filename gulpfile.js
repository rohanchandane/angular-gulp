'use strict';
var gulp = require('gulp');
// var $ = require('gulp-load-plugins');

var wrench = require('wrench');
var config = require('./gulpfile.conf');

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

gulp.task('build', ['jshint-eslint-jscs', 'fonts', 'sass', 'wiredep', 'imagemin', 'scripts', 'styles'], function () {
  gulp.start('clean:tmp');
});

gulp.task('watch', function () {
  gulp.watch([config.scriptsByOrder, config.scssByOrder, config.html, config.images], ['build']);
});
