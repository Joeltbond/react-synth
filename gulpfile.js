(function () {
    'use strict';

    var gulp = require('gulp'),
        browserify = require('browserify'),
        babelify = require('babelify'),
        source = require('vinyl-source-stream'),
        less = require('gulp-less');

    gulp.task('react', function () {
        browserify({
            entries: './js/app.js',
            extensions: ['.jsx', '.js']
        })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
    });

    gulp.task('less', function () {
        return gulp.src('less/styles.less')
            .pipe(less())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('watch', function () {
        gulp.watch('jsx/*.jsx', ['react']);
        gulp.watch('less/*.less', ['less']);
    });

    gulp.task('default', ['react', 'less', 'watch']);
}());
