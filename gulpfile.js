var gulp = require ('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
	console.log('Hello, world!');
});
 
gulp.task('compress-js', function() {
  return gulp.src('app/js/*.js')
    .pipe(uglify())
    .pipe(rename({
    	suffix: '.min'
    }))
    .pipe(gulp.dest('app/js/'));
});

gulp.task('minify-css', function() {
  return gulp.src('app/css/*.css')
    .pipe(minifyCss())
    .pipe(rename({
    	suffix: '.min'
    }))
    .pipe(gulp.dest('app/css/'));
});