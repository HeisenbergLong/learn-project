var gulp = require('gulp');
var fs = require('fs');
var sequence = require('run-sequence');
var browserify = require('browserify');
var watchify = require('watchify');
//压缩代码
var uglify = require('gulp-uglify');
var vinyl = require('vinyl-source-stream');  //node流 --> vinyl流
var buffer = require('vinyl-buffer');        //vinyl流 --> vinyl buffer ( uglify只接收vinyl标准的buffer )

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
        b.bundle()
        .pipe( vinyl('index.js') )  //vinyl拿到了 node流，转为vinyl流，然后接收新文件的文件名
        .pipe( buffer() )           //转为buffer流
        .pipe( uglify() )           //执行压缩代码
        .pipe( gulp.dest('./lib/') );//输出到指定文件夹下面
    }
});