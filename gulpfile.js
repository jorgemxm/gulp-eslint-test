'use strict';

const path = require('path');
const gulp = require('gulp');

//-----------------------------------
// Helper fn - Require Gulp Tasks
//-----------------------------------
// Usage: getGulpTask('gulp.watch')
function getGulpTask(taskFile) {
  let taskPath = path.resolve(__dirname, 'config', taskFile + '.js');
  return require(taskPath)(gulp);
}

//-----------------------------------
// Tasks
//-----------------------------------
gulp.task('eslint', getGulpTask('gulp.eslint'));


// Default Task
gulp.task('default', [], () => {
  getGulpTask('gulp.watch');
  gulp.start('eslint');
});

