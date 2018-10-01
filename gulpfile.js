'use strict';

var gulp = require('gulp');
let babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");

gulp.task('dist', ['lint:js', 'minify']);

gulp.task('minify', function (cb) {
    pump([
        gulp.src('./src/*.js'),
        babel({
            presets: ['@babel/preset-env']
        }),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('./dist')
    ],
        cb
    );
});

gulp.task('lint:js', function () {
    return gulp.src([
        'src/*.js'
    ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError('fail'));
});