var gulp = require('gulp');
var shelljs = require('shelljs');

/*
*
* 使用 shelljs 执行命令，相当于在命令行中输入指令
*
**/

gulp.task('default', function(){
    shelljs.exec('browserify src/js/main.js -o lib/index.js')
})

// 将src/js/main.js文件和相关依赖，输出到lib/index.js中。  -o：表示输出