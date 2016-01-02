'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var minifyHtml = require('gulp-minify-html');
var config = require('../gulpfile.conf');

gulp.task('html', function () {
  console.log('minifying html');
  var options = {
    empty: true,
    conditionals: true,
    spare:true,
    quotes: true
 };
  return gulp.src(config.html)
    .pipe(gulpif(argv.prod , minifyHtml(options)))
    .pipe(gulp.dest(config.dist));
});
