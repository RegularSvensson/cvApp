var gulp = require ('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
	console.log('Hello, world!');
});
 
gulp.task('compressJS', function() {
  return gulp.src('app/js/*.js')
    .pipe(uglify())
    .pipe(rename({
    	suffix: '.min'
    }))
    .pipe(gulp.dest('app/js/'));
});