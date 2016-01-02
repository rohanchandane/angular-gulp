'use strict';

var gulp = require('gulp');
var del = require('del');
var config = require('../gulpfile.conf');

gulp.task('clean', ['clean:tmp'], function () {
  console.log('Cleaning dist directory');
  return del.sync([
    config.dist
  ]);
});

gulp.task('clean:tmp', function () {
  return del.sync(['app/assets/css']);
});
