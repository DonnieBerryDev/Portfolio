const {
    src,
    dest,
    watch,
    series
} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
    return src('assets/scss/*.scss', {
            sourcemaps: true
        })
        .pipe(sass())
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', {
            sourcemaps: '.'
        }));
}

// JavaScript Task
function jsTask() {
    return src('assets/js/scripts.js', {
            sourcemaps: true
        })
        .pipe(terser())
        .pipe(dest('dist', {
            sourcemaps: '.'
        }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask() {
    watch('*.html', browsersyncReload);
    watch(['assets/scss/*.scss', 'assets/scss/pages/*.scss', 'assets/js/*.js'], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);