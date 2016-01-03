'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function () {

  var routes = null;
  if (!argv.prod) {
    routes = {
       '/bower_components': 'bower_components'
     };
  }

  var server = {
    baseDir: ['./dist'],
    routes: routes
  };

  browserSync.init({
    server: server
  });
  
});
