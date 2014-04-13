/**
 * Created by azu on 2014/03/30.
 * LICENSE : MIT
 */
"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var esmangle = require('gulp-esmangle');
var paths = {
    scripts: ['src/hammer.js', 'src/shower.js']
};

gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(esmangle({
            license: true
        }))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', ["scripts"], function () {
    gulp.watch(paths.scripts, ["scripts"]);
});
