var wiredep = require('wiredep');
var path = require('path');
var modules = require('./gulpfile.conf');
module.exports = function (config) {
  var options = {
    frameworks: ['jasmine'],
    autoWatch: false,
    browsers: ['PhantomJS2'],
    singleRun: true
  };
  var mapPath = function (file) {
    return path.relative(process.cwd(), file);
  };
  options.files = wiredep({
    dependencies: true,
    devDependencies: false
  })['js'].map(mapPath).concat(modules.scriptsByOrder).concat(wiredep({
    dependencies: false,
    devDependencies: true
  })['js'].map(mapPath)).concat([
    'app/**/*.spec.js'
  ]);
  config.set(options);
};
