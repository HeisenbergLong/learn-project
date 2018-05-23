/*
*
*	七.Promise.resolve()
*/

var p1 = Promise.resolve(1);
var p2 = Promise.resolve(p1);
var p3 = new Promise(function(resolve, reject){
    resolve(1);
});
var p4 = new Promise(function(resolve, reject){
    resolve(p1);
});

console.log( p1 === p2 );
console.log( p1 === p3 );
console.log( p1 === p4 );
console.log( p3 === p4 );

p4.then(function(val){
	console.log('p4=' + val);
});

p2.then(function(val){
	console.log('p2=' + val);
});

p1.then(function(val){
	console.log('p1=' + val);
});

/*
*	输出：
*
*		true
*		false
*		false
*		false
*		p2=1
*		p1=1
*		p4=1
*/

/*
*
*	分析：
*
*		Promise.resolve(...)可以接收一个值或者是一个Promise对象作为参数。
			* 当参数为普通值时，他返回一个resolved状态的Promise对象，对象的值就是这个参数。
			* 当参数为一个Promise对象时，会直接返回这个Promise对象。
			* 使用new创建的Promise对象是一个全新的对象。
		所以p1===p2,所以p1不等于p3,p4。
		p4之所以是最先调用最后输出是因为： 
			p4接收的是一个promise对象p1，resolve会对p1进行'拆箱'，获取p1的值。
*/