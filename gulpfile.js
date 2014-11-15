var gulp = require('gulp'),
    del = require('del'),
    run = require('gulp-run'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    path = require('path'),
    browserSync = require('browser-sync'),
    pkg = require('./package.json'),
    reload = browserSync.reload;

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
})

/**
 * Cleaning dist/ folder
 */
.task('clean', function(cb) {
  del(['dist/**'], cb);
})

/**
 * Running livereload server
 */
.task('server', function() {
  browserSync({
    server: {
     baseDir: './' 
    }
  });
})

/**
 * Less compilation
 */
.task('less', function() {
  return gulp.src('assets/less/*.less')
  .pipe(less())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('dist'));
})
.task('less:min', function() {
  return gulp.src('assets/less/*.less')
  .pipe(less())
  .pipe(concat('style.css'))
  .pipe(cssmin())
  .pipe(gulp.dest('dist'));
})

/**
 * JSLint/JSHint validation
 */
.task('lint', function() {
  return gulp.src('./app/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
})

/** JavaScript compilation */
.task('js', function() {
  return gulp.src(['app/**/*.js'])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist'));
})
.task('js:min', function() {
  return gulp.src(['app/**/*.js'])
  .pipe(uglify())
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist'));
})

/** JSX Component compilation */
.task('jsx', function() {
  return gulp.src(['app/components/*.jsx'])
  .pipe(concat('components.js'))
  .pipe(gulp.dest('dist'));
})

/**
 * Compiling resources and serving application
 */
.task('serve', ['bower', 'clean', 'lint', 'less', 'js', 'jsx', 'server'], function() {
  return gulp.watch([
    '*.js', 'app/**/*.js', 'app/**/*.jsx', '*.html', 'assets/**/*.less'
  ], [
   'lint', 'less', 'js', 'jsx', browserSync.reload
  ]);
})
.task('serve:minified', ['bower', 'clean', 'lint', 'less:min', 'js:min', 'jsx', 'server'], function() {
  return gulp.watch([
    '*.js', 'app/**/*.js', 'app/**/*.jsx', '*.html', 'assets/**/*.less'
  ], [
   'lint', 'less:min', 'js:min', 'jsx', browserSync.reload
  ]);
});