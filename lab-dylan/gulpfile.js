const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var options = {
  rules: {
    'no-console': 0,
    'indent': [
      2,
      2
    ],
    'quotes': [
      2,
      'single'
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'semi': [
      2,
      'always'
    ]
  },
  globals:  [
    'describe',
    'it',
    'beforeEach',
    'afterEach',
    'before',
    'after'
  ],
  envs: [
    'es6',
    'node',
    'browser'
  ],
  ecmaFeatures: [
    'modules',
    'experimentalObjectRestSpread',
    'impliedStrict'
  ],
  extends: 'eslint:recommended',
  useEslintrc: false
};

var watcher = gulp.watch(['test/**/*.js', 'lib/**/*.js'], ['lint:all', 'mocha:app']);

var testFiles = ['test/**/*.js'];
var appFile = ['lib/**/*.js'];
var gulpFile = ['gulpfile.js'];
gulp.task('lint:all', () => {
  gulp.src(appFile)
    .pipe(eslint(options))
    .pipe(eslint.format());
  gulp.src(testFiles)
    .pipe(eslint(options))
    .pipe(eslint.format());
  gulp.src(gulpFile)
    .pipe(eslint(options))
    .pipe(eslint.format());
});

gulp.task('mocha:app', () => {
  gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('default', ['lint:all', 'mocha:app']);
