'use strict';
//-----------------------------------
// Gulp: ESLint Task
//-----------------------------------
const eslint = require('gulp-eslint')
const gulpIf = require('gulp-if');
const path = require('path');

const configFile = path.resolve('./.eslintrc.js');

// Has ESLint fixed the file contents?
// https://github.com/adametry/gulp-eslint/blob/master/example/fix.js
const isFixed = file => file.eslint != null && file.eslint.fixed;

const lintTask = gulp => () => {
  return gulp.src('./src/**/*.js')

  .pipe(eslint({
    fix: true,
    options: { configFile }
  }))

  .pipe(eslint.format())

  // If the file was fixed, write the file to dest
  .pipe(gulpIf(isFixed, gulp.dest('./src')))

  .pipe(eslint.failAfterError())

};

module.exports = lintTask;

