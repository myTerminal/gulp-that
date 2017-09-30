/* global require */

var gulp = require('gulp'),
    watchNow = require ('gulp-watch-now'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    return gulp.src('src/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts-debug', function () {
    return gulp.src('src/index.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);

gulp.task('debug', ['scripts-debug']);

gulp.task('develop', function() {
    watchNow.watch(gulp,
                   [
                       'src/index.js'
                   ],
                   [
                       'scripts-debug'
                   ]);
});
