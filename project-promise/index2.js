/**
*
*	一、Promise 三种状态
*
**/

var p1 = new Promise(function(resolve,reject){
  resolve(1);
});
var p2 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve(2);  
  }, 500);
});
var p3 = new Promise(function(resolve,reject){
  setTimeout(function(){
    reject(3);
  }, 500);
});

console.log(p1);
console.log(p2);
console.log(p3);

setTimeout(function(){
  console.log(p2);
}, 1000);
setTimeout(function(){
  console.log(p3);
}, 1000);

p1.then(function(value){
  console.log(value);
});
p2.then(function(value){
  console.log(value);
});
p3.catch(function(err){
  console.log(err);
});

/*
*
* 控制台输出：	
*
*	Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 1}
*	Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
*	Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
*	1
*	2
*	3
*	Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 2}
*	Promise {[[PromiseStatus]]: "rejected", [[PromiseValue]]: 3}
*/


/*
*
* 分析：
*
*	Promise的内部实现是一个状态机。Promise有三种状态：pending，resolved，rejected。当Promise刚创建完成时，处于pending状态；当Promise中的函数参数执行了resolve后，Promise由pending状态变成resolved状态；如果在Promise的函数参数中执行的不是resolve方法，而是reject方法，那么Promise会由pending状态变成rejected状态。
p2、p3刚创建完成时，控制台输出的这两台Promise都处于pending状态，但为什么p1是resolved状态呢？ 这是因为p1 的函数参数中执行的是一段同步代码，Promise刚创建完成，resolve方法就已经被调用了，因而紧跟着的输出显示p1是resolved状态。我们通过两个setTimeout函数，延迟1s后再次输出p2、p3的状态，此时p2、p3已经执行完成，状态分别变成resolved和rejected。
*
*
*/