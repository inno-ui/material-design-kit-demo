'use strict';

var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var open = require('gulp-open');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

var filePaths = {
	CSS: './assets/css',
	CSS_COMPILED: './assets/css/inno-ui-kit.css',
	CSS_MINIFIED: 'inno-ui-kit.min.css',
	ENTRY_POINT: './index.html',
	SCSS: './assets/scss/**/*.scss',
	SCSS_COMPILED: './assets/scss/inno-ui-kit.scss'
};

gulp.task('compile-scss', () => {
	return gulp.src(filePaths.SCSS_COMPILED)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(filePaths.CSS));
});

gulp.task('minify-css', () => {
	return gulp.src(filePaths.CSS_COMPILED)
	.pipe(cleanCSS())
	.pipe(rename(filePaths.CSS_MINIFIED))
	.pipe(gulp.dest(filePaths.CSS));
});

gulp.task('watch-scss', () => {
	return gulp.watch(filePaths.SCSS, gulp.series('compile-scss', 'minify-css'));
});

gulp.task('open-app', () => {
	return gulp.src(filePaths.ENTRY_POINT)
	.pipe(open());
});

gulp.task('start-app', gulp.parallel('open-app', 'watch-scss'));
