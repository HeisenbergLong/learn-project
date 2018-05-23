/**
*
* 五、Promise.then()回调异步性
*
**/

var p = new Promise(function(resolve, reject){
  resolve("success");
});

p.then(function(value){
  console.log(value);
});

console.log("which one is called first ?");

/*
*
* 控制台输出：  
*
*   "which one is called first ?"
*   "success"
*/

/*
*
* 分析：
*
*   Promise接收的函数参数是同步执行的，但then方法中的回调函数执行则是异步的，因此，"success"会在后面输出。

为什么then会优先于定时器先执行是因为等待队列（或者说是任务队列）其实是分为两个： macrotask 和 microtask；promise是存放在microtasks中，而定时器是存放在macrotasks中，但是在每次"事件循环"后会先执行microtask中的内容，并且当这些 microtask 执行结束后还能继续添加 microtask 一直到真个 microtask 队列执行结束（这也就是po主说的"拆箱"），直到当前microtask执行结束之后，才会执行macrotask中的任务，并且往下进行"事件循环"所以才会出现如上代码输出的结果。

*
*/