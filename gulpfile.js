var gulp = require ('gulp'),
	uglify = require('gulp-uglify');;

gulp.task('default', function() {
	console.log('Hello, world!');
});
 
gulp.task('compressJS', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});