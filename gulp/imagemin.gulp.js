'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../gulpfile.conf');

// ['clean'] is dependacy, that means until clean finishes, it won't run 'imagemin'
gulp.task('imagemin', ['clean'], function () {
  console.log('minifying images and copying it to dist');
  return gulp.src(config.images)
    // .use(imagemin.optipng({optimizationLevel: 3}))
    .pipe(imagemin())
    .pipe(gulp.dest(config.dist + 'assets/images/'));
});
