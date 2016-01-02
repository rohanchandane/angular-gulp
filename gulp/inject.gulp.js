'use strict';

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var gulpif = require('gulp-if');
var minifyHtml = require('gulp-minify-html');
var argv = require('yargs').argv;
var config = require('../gulpfile.conf');

// wiredep (inject) bower packages
gulp.task('wiredep', ['clean', 'sass'], function () {
  console.log('Wiring the bower dependencies & project js into the html');
	var wiredepOptions = {
		// want to get a bower json property
		bowerJson: config.bower.json,
		// want to get a property for the directory
		directory: config.bower.directory,
		// ignore path
		ignorePath: config.bower.ignore
	};

  var htmlOptions = {
    empty: true,
    conditionals: true,
    spare:true,
    quotes: true
  };

  var sourceOptions = {
    // Do not add a root slash to the beginning of the path
    addRootSlash: false,
    // Remove the `dist` from the path when doing the injection
    ignorePath: '/app'
  };

  var assets = useref.assets();

  return gulp.src(config.app + 'index.html')
    // injecting bower scripts
	  .pipe(wiredep(wiredepOptions))
    // injecting project scripts
    .pipe(inject(gulp.src(config.scriptsByOrder), sourceOptions))
    // injecting project css files
    .pipe(inject(gulp.src(config.css), sourceOptions))
    // minifying injected html for prod env

    .pipe(gulpif(argv.prod, assets))
    .pipe(gulpif(argv.prod, gulpif('*.css', minifyCss())))
    .pipe(gulpif(argv.prod, gulpif('*.js', uglify())))
    .pipe(gulpif(argv.prod, rev()))
    .pipe(gulpif(argv.prod, assets.restore()))
    .pipe(gulpif(argv.prod, useref()))
    .pipe(gulpif(argv.prod, revReplace()))

    .pipe(gulpif(argv.prod , minifyHtml(htmlOptions)))

	  .pipe(gulp.dest(config.dist));
});
