'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../gulpfile.conf');

gulp.task('sass', ['clean'], function () {
  return gulp.src(config.scssByOrder)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.compiledScss));
});
