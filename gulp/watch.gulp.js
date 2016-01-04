'use strict';

var gulp = require('gulp');
var config = require('../gulpfile.conf');

gulp.task('watch', function () {
  gulp.watch([config.scriptsByOrder, config.scssByOrder, config.html, config.images], ['build']);
});
