const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');


var testFiles = ['test/**/*.js'];
var appFile = ['lib/**/*.js', 'bin/cowsay'];
var gulpFile = ['gulpfile.js'];
gulp.task('lint:app', () => {
  gulp.src(appFile)
    .pipe(eslint())
      .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  gulp.src(testFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha:app', () => {
  gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('lint:gulp', () => {
  gulp.src(gulpFile)
  .pipe(eslint())
  .pipe(eslint());
});

gulp.task('default', ['lint:app', 'lint:test','lint:gulp', 'mocha:app']);
