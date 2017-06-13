var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('pug', function () {
	return gulp.src('./pug/**/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./build'));
});

gulp.task('serve', ['sass', 'pug'], function () {
	browserSync.init({
		server: "./build",
		notify: "false",
	});

  gulp.watch('./sass/**/*.scss', ['sass']);
	gulp.watch('./pug/**/*.pug', ['pug']);
	gulp.watch('./build/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
