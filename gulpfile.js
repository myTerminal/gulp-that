/* global require */

var gulp = require('gulp'),
    watch = require ('gulp-watch'),
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
    gulp.watch([
        'src/index.js'
    ], [
        'scripts-debug'
    ]);
});
