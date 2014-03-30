/**
 * Created by azu on 2014/03/30.
 * LICENSE : MIT
 */
"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var paths = {
    scripts: ['src/hammer.js', 'src/shower.js']
};

gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ["scripts"]);
});
