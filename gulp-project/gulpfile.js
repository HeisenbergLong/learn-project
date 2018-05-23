var gulp = require('gulp');
var fs = require('fs');

//启动服务器
var server = require('gulp-webserver');

var sequence = require('run-sequence');  //调用 gulp 任务
//js文件合并和监听
var browserify = require('browserify');  //文件合并
var watchify = require('watchify');      //文件监听
//压缩js代码
var uglify = require('gulp-uglify');
var vinyl = require('vinyl-source-stream');  //node流 --> vinyl流
var buffer = require('vinyl-buffer');        //vinyl流 --> vinyl buffer ( uglify只接收vinyl标准的buffer )

//gul-if
var gif = require('gulp-if');

//es6 --> es5
var babel = require('gulp-babel');

//css
var cleanCss = require('gulp-clean-css');  //压缩css
var concat = require('gulp-concat');       //合并css

//less的构建
var less = require('gulp-less');


var isProduction = true;  // true线上环境  false开发环境
gulp.task('default', function () {
    sequence('server','less-watch', 'minify-css', 'babel', 'babel-watch', 'indexjs');
});

//启动服务器
gulp.task('server', function(){
    gulp.src('./')
      .pipe(server({
            port: 1234,
            livereload: true,
            directoryListing: true,
            open: true,
            directoryListing: false  //不启用目录
      }))
});

//js
gulp.task('indexjs', function(){
    var b = browserify({
        entries: ['./lib/js/main.js'],
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
        .pipe( gif(isProduction, uglify()) )           //执行压缩代码
        .pipe( gulp.dest('./build/') );//输出到指定文件夹下面
    }
});

//js-es6
gulp.task('babel', function(){
    gulp.src('./src/**/*.js')
    .pipe( babel({presets: ["es2015"]}) )
    .pipe(gulp.dest('./lib/'));
});
gulp.task('babel-watch', function(){
    gulp.watch('./src/**/*.js',function(){
        sequence('babel');
    })
});

// css
gulp.task('minify-css', function(){
    gulp.src(['./src/**/*.less'])
    .pipe(less())
    .pipe(concat('index.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('./build/'));
});
// gulp.task('minify-css-watch', function(){
//     gulp.watch('./src/**/*.css', ['minify-css']);
// });
//css-less
// gulp.task('less', function(){
//     gulp.src(['./src/less/*.less'])
//     .pipe(less())
//     .pipe(gulp.dest('./build/css/'));
// });
gulp.task('less-watch', function(){
    gulp.watch('./src/**/*.less',['minify-css']);
});