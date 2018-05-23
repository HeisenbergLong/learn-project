/*
*
*	七.resolve vs reject
*/

var p1 = new Promise(function(resolve, reject){
	resolve(Promise.resolve('resolve'));
});

var p2 = new Promise(function(resolve, reject){
	resolve(Promise.reject('reject'));
});

var p3 = new Promise(function(resolve, reject){
	reject(Promise.resolve('resolve'));
});


p1.then(
		function(val){
			console.log('p3[val]=' + val );
		},
		function(err){
			console.log('p3[err]=' + err );	
		}
	)

p2.then(
		function(val){
			console.log('p3[val]=' + val );
		},
		function(err){
			console.log('p3[err]=' + err );	
		}
	)

p3.then(
		function(val){
			console.log('p3[val]=' + val );
		},
		function(err){
			console.log('p3[err]=' + err );	
		}
	)


/*
*	输出：
*
*	p3[err]=[object Promise]
*	p3[val]=resolve
*	p3[err]=reject
*/

/*
*
*	总结：
*		* resolve 可以'拆箱'Promise对象； reject不能'拆箱'Promise对象。
*		
*/