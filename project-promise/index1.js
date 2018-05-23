/**
*
*	一、Promise立即执行
*
**/

var p = new Promise(function(resolve, reject){
	console.log('create a promise');
	resolve('success');
});

console.log('after new Promise')

p.then(function(v){
	console.log(v);
});

/*
*
* 执行结果：
*
*	create a promise
*	after new Promise
*	success
*
*/

/*
*
* 分析：
*
*	Promise对象表示未来某个将要发生的事件，但在创建（new）Promise时，作为Promise参数传入的函数是会被立即执行的，只是其中执行的代码可以是异步代码。有些同学会认为，当Promise对象调用then方法时，Promise接收的函数才会执行，这是错误的。因此，代码中"create a promise"先于"after new Promise"输出。
*	作者：艾特老干部
*	链接：https://juejin.im/post/597724c26fb9a06bb75260e8
*
*/