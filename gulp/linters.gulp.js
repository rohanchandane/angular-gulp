'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var config = require('../gulpfile.conf');

// common task
gulp.task('jshint-eslint-jscs', ['test'], function () {
  console.log('Testing for jshint-jscs');
  return gulp.src(config.scriptsByOrder)
    //.pipe(fixmyjs())
    .pipe(jscs())
    .pipe(eslint())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
