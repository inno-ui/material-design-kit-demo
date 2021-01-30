'use strict';

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var open = require('gulp-open');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

var filePaths = {
	CSS: './assets/css',
	ENTRY_POINT: './index.html',
	SCSS: './assets/scss/**/*.scss',
	SCSS_COMPILED: './assets/scss/inno-ui-demo.scss'
};

gulp.task('compile-scss', function () {
	return gulp.src(filePaths.SCSS_COMPILED)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(filePaths.CSS));
});

gulp.task('watch-scss', function() {
	gulp.watch(filePaths.SCSS, gulp.series('compile-scss'));
});

gulp.task('open-app', function() {
	gulp.src(filePaths.ENTRY_POINT)
	.pipe(open());
});

gulp.task('start-app', gulp.parallel('open-app', 'watch-scss'));
