'use strict';
//-----------------------------------
// Gulp: Watch Task
//-----------------------------------
const gutil = require('gulp-util');
const path = require('path');

const watchTask = gulp => {
  gutil.log(gutil.colors.green.bold('Watching for file changes...'));

  // Watch: Javascript
  gulp.watch('./src/**/*.js', ['eslint']);

};

module.exports = watchTask;
