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
*
*
*/