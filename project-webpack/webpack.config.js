const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');  //重新生成html，将替换dist目录下的index.html
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	// entry: './src/index.js',
	entry: {
		app: './src/index.js'
		// print: './src/print.js'
	},
	//启动服务
	devServer: {
		contentBase: './dist',
		hot: true
	},
	//生成source-map
	// devtool: 'inline-source-map',
	//插件
	plugins: [
		new cleanWebpackPlugin('dist'),
		new htmlWebpackPlugin({
			title: 'Output Management'
		}),
		// new webpack.NamedModulesPlugin(),
		// new webpack.HotModuleReplacementPlugin()
	],
	//输出
	output: {
		// filename: 'main.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	mode: "development",  //['development','production']  --> 未压缩 | 压缩
	//使用的模块
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			},
			{
				test: /\.(csv|tsv)$/,
				use: ['csv-loader']
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			}
		]
	}
}