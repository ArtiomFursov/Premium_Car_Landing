var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass')(require('sass'));


function style(){
  return gulp.src('./scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
}

function watch(){
  browserSync.init({
    server:{
      baseDir: './'
    }
  });
  gulp.watch('./scss/*.scss', style);
  gulp.watch('./css/all.css').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
}
//
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

exports.style = style;
exports.watch = watch;