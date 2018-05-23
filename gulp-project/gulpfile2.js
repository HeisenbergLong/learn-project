var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');
var sequence = require('run-sequence');

/*
*
*   1.gulp新建任务
*   2.browserify 合并 js
*   3.fs模块输出文件
*   4.sequence 执行调用gulp.task() 的任务
*
*/

gulp.task('default', function(){
    sequence('indexjs', 'watch');    //监听完成以后，一定要执行 'watch' 任务
});

gulp.task('indexjs', function(){
    browserify().add('src/js/main.js').bundle().pipe(fs.createWriteStream('lib/index.js'));
});

gulp.task('watch', function(){
    gulp.watch(['src/js/*.js'], function(){
        sequence('indexjs');
    })
});