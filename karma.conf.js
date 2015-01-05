'use strict';

module.exports = function(config) {
  config.set({
    basePath: '.',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/ng-elif/src/**/*.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/app/app.js',
      'src/app/app.spec.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
    reporters: ['dots']
  });
};