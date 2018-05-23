var gulp = require('gulp');
var fs = require('fs');
var sequence = require('run-sequence');
var browserify = require('browserify');
var watchify = require('watchify');

/*
*
*   使用browserify watchify监听
*
*/

gulp.task('default', function () {
    sequence('indexjs');
});

gulp.task('indexjs', function(){
    var b = browserify({
        entries: ['src/js/main.js'],
        cache: {},
        packageCache: {},
        plugin: [watchify]
    });

    bundle();

    b.on('update', bundle);

    function bundle(){
        b.bundle().pipe( fs.createWriteStream('lib/index.js') );
    }
});