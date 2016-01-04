var config = {
  app: 'app/',
  scriptsByOrder: [
    'app/app.module.js',
    'app/**/*.module.js',
    'app/**/*.js',
    '!app/**/*.spec.js'
  ],
  images: 'app/assets/images/**/*.png',
  html: ['!app/index.html', 'app/**/*.html'],
  fonts: 'app/assets/fonts/*.*',
  scssByOrder: [
    'app/shared/**/*.scss',
    'app/components/**/*.scss'
  ],
  compiledScss: 'app/assets/css',
  css: 'app/assets/css/**/*.css',
  dist: 'dist/',
  bower: {
    json: require('./bower.json'),
    directory: './bower_components/',
    ignorePath: '../..'
  }
};

module.exports = config;
