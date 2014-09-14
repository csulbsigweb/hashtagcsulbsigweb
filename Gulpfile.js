var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
  gulp.src('./app/styles/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/styles/css'));
});
