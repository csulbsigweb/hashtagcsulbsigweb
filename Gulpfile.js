var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');


gulp.task('sass', function() {
  gulp.src('./app/styles/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/styles/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src('./app/styles/css/*.css')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./app/*.html', './app/js/*.js', './app/styles/css/*.css'], ['html', 'js', 'css']);
});

gulp.task('default', ['connect', 'watch']);
