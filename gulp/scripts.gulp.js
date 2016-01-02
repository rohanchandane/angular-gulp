'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var config = require('../gulpfile.conf');

gulp.task('scripts', ['clean'], function () {
  console.log('Copying scripts assets to dist');
  return gulp.src(config.scriptsByOrder)
    .pipe(gulpif(!argv.prod, gulp.dest(config.dist)));
});
