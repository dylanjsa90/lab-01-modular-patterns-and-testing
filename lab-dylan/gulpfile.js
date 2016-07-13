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


var watcher = gulp.watch(['test/**/*.js', 'lib/**/*.js'], ['lint:app', 'lint:test', 'lint:gulp', 'mocha:app']);
watcher.on('change', function() {
  console.log('watcher test');
});

var testFiles = ['test/**/*.js'];
var appFile = ['lib/**/*.js'];
var gulpFile = ['gulpfile.js'];
gulp.task('lint:app', () => {
  gulp.src(appFile)
      .pipe(eslint(options))
      .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  gulp.src(testFiles)
    .pipe(eslint(options))
    .pipe(eslint.format());
});

gulp.task('mocha:app', () => {
  gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('lint:gulp', () => {
  gulp.src(gulpFile)
  .pipe(eslint(options))
  .pipe(eslint.format());
});

gulp.task('default', ['lint:app', 'lint:test','lint:gulp', 'mocha:app']);
