let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /*
    * 入口文件:
    *   1.写成数组方式就可以打出多入口文件，不过这里的文件都合并成了一个文件。
    *       entry: ['./src/index.js', '.src/login.js']
    *   2.真正实现多文件多入口，需要使用对象的方式。
    *       entry: {
    *           index: './src/index.js',
    *           login: './src/login.js'
    *       }
    *       output: {
    *           filename: '[name].js',
    *           path: path.resolve('dist')
    *       }
    */
    entry: ['./src/index.js', './src/login.js'],
    //出口文件
    output: {
        // 添加hash可以防止文件缓存，每次都会生成4位的hash串
        filename: 'bundle.[hash:4].js',      //打包后的文件名
        path: path.resolve('dist')  //打包后的文件路径
    },
    //处理对应模块
    module: {},
    //对应的插件        
    plugins: [
        //通过new一下这个类来使用插件
        new HtmlWebpackPlugin({
            //用哪个html作为模版
            //载src目录下创建一个index.html页面来当作模版来用
            template: './index.html',
            filename: 'index.html',
            chunks: ['index'],
            hash: true     //会在打包好的bundle.js后面加上hash串
        }),
        new HtmlWebpackPlugin({
            template: './login.html',
            filename: 'login.html',
            chunks: ['login']
        })
    ],
    //开发服务器配置
    devServer: {},
    //模式配置
    mode: 'development'     
}