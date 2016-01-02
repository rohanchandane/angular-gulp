'use strict';

var gulp = require('gulp');
var config = require('../gulpfile.conf');

gulp.task('fonts', ['clean'], function () {
  console.log('Copying fonts assets to dist');
  return gulp.src([config.fonts])
    .pipe(gulp.dest(config.dist + 'assets/fonts'));
});
