// including plugins
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel');
	sourcemaps = require('gulp-sourcemaps');



// sass task
gulp.task('sass', function () {
	return gulp.src('./assets/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(rename('main.min.css'))
		.pipe(autoprefixer({
			grid: true
		}))
		.pipe(gulp.dest('./dist/css/'));
});
// minify js task
gulp.task('minify-js', function () {
	gulp.src([
			'./assets/js/helpers/*.js',
			'./assets/js/main.js'
		])
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/'))
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('dist/js/'));
});




gulp.task('watch', ['sass', 'minify-js'], function () {
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
	gulp.watch('./assets/js/**/*.js', ['minify-js']);
})
