var gulp = require ('gulp'),
	uglify = require('gulp-uglify');;

gulp.task('default', function() {
	console.log('Hello, world!');
});
 
gulp.task('compressJS', function() {
  return gulp.src('/app/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('/app/js/'));
});