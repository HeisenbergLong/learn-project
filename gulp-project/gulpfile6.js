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
    sequence('vendorjs', 'indexjs');
});

gulp.task('indexjs', function(){
    var b = browserify({
        entries: ['src/js/main.js'],
        cache: {},
        packageCache: {},
        plugin: [watchify]
    }).external('jquery').external('swiper');

    bundle();

    b.on('update', bundle);

    function bundle(){
        b.bundle().pipe( fs.createWriteStream('lib/index.js') );
    }
});

//vendorjs 第三方类库的打包文件( browserify  来打包 )
gulp.task('vendorjs', function(){
    var c = browserify().require('./bower_components/jquery/dist/jquery.js', {
        expose: 'jquery'
    }).require('./bower_components/swiper/dist/js/swiper.js',{
        expose: 'swiper'
    }).bundle().pipe( fs.createWriteStream('lib/vendor.js') )
})