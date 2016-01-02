'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var config = require('../gulpfile.conf');

gulp.task('styles', ['sass', 'clean'], function () {
  console.log('Copying styles assets to dist');
  return gulp.src(config.css)
    .pipe(gulpif(!argv.prod, gulp.dest(config.dist + 'assets/css')));
});
