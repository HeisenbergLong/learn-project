//一、let、const、块作用域
/**
 * 共同点：
 *      1.自动使用严格模式。不能使用未声明的变量(在浏览器未实现)
 *      2.不能重复声明。
 *      3.都在块作用域内生效。
 *
 * const：
 *      1.声明的常量，不能修改。
 *      2.如果是对象，存储的是对象的内存地址。
 *      3.初始化必须赋值。
 */
function test1(){
    /*
     * let:
     *   1.块作用域(同const同)
     *   2.强制使用了严格模式(同const同)
     *   3.不能重复声明(同const同)
    **/
    for(let i = 1; i < 3; i++){
        // console.log(i);
    }

    /**
     * const：
     *   1.不能修改值
     *   2.初始化必须赋值
     *   3.对于对象的话：因为是存储对象的地址，所以只要地址不变即可。
     */
    const a = 1;
}

//二、解构赋值
/**
 * 1.数组解构赋值
 *      - ...a：表示用a接收更多的参数，以数组返回;
 * 2.对象的解构赋值
 *      - 要与目标对象的数据解构相同
 *      - 重命名的name写在value中,key对应的是目标对象的key
 * 3.共性：
 *      - 无匹配返回 undefined;
 *      - 可以设置默认值；
 *      - 优先级：赋值》设置默认值》无匹配默认值(undefined);
 */
{
    /****
     *数组的解构赋值
    ****/
    {
        let [a,b=3,c] = [1,2];
        // console.log(a,b,c) //1 2 undefined

        let [aa,...bb] = [1,2,3,4,5];
        // console.log(aa, bb)  //1 [2, 3, 4, 5]
    }
    //使用场景：
        //数组互换位置；接收函数返回值

    /****
     *对象的解构赋值
    ****/
    {
        let o = {
            title: 1,
            list: [
                {
                    title: 'aa',
                    cont: 'bb'
                }
            ],
            info: 22
        }
    }
}

//三、正则扩展
/****
 * 新增特性：
 *      1. 构造函数的变化：
 *          可以写入多个修饰符，2参修饰符会覆盖一参修饰符；
 *          reg.flags[修饰符查询]
 * 
 *      2. u修饰符
 *        处理大于2字节长度的字符
 *          1. ES5中'.'只能匹配小于2个字节长度的字符。
 *          2. 正则中，凡是处理大于2个字节长度的字符，都要加u修饰符
 * 
 *      3. y修饰符
 *          更加严格的全局匹配,匹配中间不能间隔其他字符
 *          a1.sticky 是否使用y修饰符
 *      4. s修饰符(ES8)
 *          处理：换行符，回车符，行分隔符，段分隔符。
*****/
{
    //构造函数的变化：可以使用多个修饰符|修饰符查询
        /**
         *  1. es5: /xyz/i, /后面只能跟一个修饰符; es6: /后面可以跟多个修饰符，2参会覆盖1参
         *  2. reg.flags  查询正则的修饰符
         **/
        {
            let reg1 = new RegExp('xyz', 'i');
            let reg2 = new RegExp(/xyz/i);

            let reg3 = new RegExp(/xyz/ig, 'i');
            // console.log(reg3.flags);
        }

    // y修饰符：更加严格的全局匹配|是否使用y修饰符
        /**
         *  1. y修饰符：紧跟上一次匹配其后进行当前匹配，中间不能有其他的间隔
         *  2. a1.sticky 是否开启y匹配：未开启-->false
         **/
        {
            let s = 'bbbb_bb_b';
            let a1 = /b+/g;
            let a2 = /b+/y;  //都是全局匹配，y匹配：紧跟上一次匹配其后进行当前匹配，中间不能有其他的间隔；本例中：bbbb之后有一个‘_’，所以匹配失败

            // console.log( 'one', a1.exec(s), a2.exec(s) );
            // console.log( 'two', a1.exec(s), a2.exec(s) );
            // console.log( 'three', a1.exec(s), a2.exec(s) );

            // console.log( a1.sticky, a2.sticky )
        }

    // u修饰符: 处理大于2字节长度的字符
        /**
         *  1. ES5中'.'只能匹配小于2个字节长度的字符。
         *  2. 正则中，凡是处理大于2个字节长度的字符，都要加u修饰符
         **/
        {
            // console.log( /\u{61}/.test('a') )                //匹配失败
            // console.log( /\u{61}/u.test('a') )               //匹配成功

            // u 会将 '\uD83D\uDC2A' 当成一个字来识别
            // console.log( /^\uD83D/.test('\uD83D\uDC2A') );   匹配成功
            // console.log( /^\uD83D/u.test('\uD83D\uDC2A') );  匹配失败

            // console.log( `\u{20BB7}` )
            // let s = '𠮷';
            //es5中正则匹配的 '.' 只能匹配小于2个字节的任何字符  1个字符= 1-4个字节
            // console.log( 'one',/^.$/.test(s) );
            // console.log( 'two', /^.$/u.test(s) );
            // console.log(/𠮷{2}/.test('𠮷𠮷'))  // false
            // console.log(/𠮷{2}/u.test('𠮷𠮷'))  // true
            // console.log(/𠮷/.test('𠮷𠮷'))  // true
        }

    // s修饰符(es6没有实现)
        /**
         *  1. ES5中'.'不能处理：换行符，回车符，行分隔符，段分隔符。
         *  2. 正则中，凡是处理大于2个字节长度的字符，都要加u修饰符
         **/
}

//四、字符串扩展
{
    /***
     * Unicode表示法
     * 遍历接口
     * 模板字符串
     * 新增方法(10种)
    ***/

    /*****
     * ES5: 
     *  1. '𠮷'.length  //1  length：计算长度时：每2个字节为1个长度，所以算4个字节，所以长度为2
     *  2. a.charAt(0) //返回指定位置的字符
     *  3. a.charCodeAt(0) //返回指定位置的Unicode码
     *  4. a.fromCharCode() //将Unicode码转字符串
     * ES6:
     * 【转码】
     *  1. String.codePointAt(0)  //返回指定位置的Unicode码 (可以正确返回大于2字节的字符，但是只在第一位返回正确)
     *  2. String.fromCodePoint() //将Unicode码转字符串
     *  3. for...of 可以解决Unicode编码大于2个字节的字符的问题
     * 
     *  【检测】
     *  4. str.includes('s');  //true 是否包含字母s
     *  5. str.startsWith('st');  //true 是否是以 st 开头
     *  6. str.endsWith('ing');  //true 是否是以 ing 结尾
     * 
     *  【模板字符串】
     *  7. `i am ${str}` //模版字符串
     *  8. abc`i am ${user.name},${user.info}`  //abc为函数，模板字符串的拆分
     * 
     *  9. String.raw`Hi\n${1+2}` //Hi\n3  对\n处理为：\\n
     * ES7：
     *  【字符串操作】
     *  1. '1'.padStart(2, '0')  // 01  向前补0，满足2位数
     *  2. '1'.padEnd(2,'0') // 10 向后补0，满足2位数
    *****/
    {
        let a = '𠮷'; 
        // console.log(a.length);  //2  计算长度时：每2个字节为1个长度，所以算4个字节，所以长度为2
        // console.log(a.charAt(0)) //返回指定位置的字符
        // console.log(a.charAt(1))
        // console.log(a.charCodeAt(0)) //返回臧丁位置的Unicode码
        // console.log(a.charCodeAt(1))

        let b = '𠮷a';
        // console.log(a.length);  //3       
        let c = b.codePointAt(0); 
        // console.log(c); //取4个字节   \𠮷
        // console.log(b.codePointAt(1)) //取4个字节后2个字节        \...
        // console.log(b.codePointAt(2)) //取5-6，这2个字节          \a
          
        // console.log( String.fromCodePoint(c) )
        // console.log( String.fromCharCode() )

        // for...of 可以解决Unicode编码大于2个字节的字符的问题
        {
            let str = '\u{20bb7}abc';
            for(let i = 0; i <str.length; i++){
                // console.log('es5', str[i]);
            }

            for(let code of str){
                // console.log('es6', code);
            }
        }
    }

    {
        let str = 'string';
        // console.log( 'includes', str.includes('s') );  //true 是否包含字母s
        // console.log( 'start', str.startsWith('st') );  //true 是否是以 st 开头
        // console.log( 'end', str.endsWith('ing') );  //true 是否是以 ing 结尾
        // console.log(str.repeat(2)); // stringstring  将字符串复制2次

        let m = `i am ${str}`;
    }

    {
        // es7的草案
        // console.log( '1'.padStart(2,'0') ) // 01  向前补0，满足2位数
        // console.log( '1'.padEnd(2,'0') ) // 10 向后补0，满足2位数
    }
    {
        let user = {
            name: 'list',
            info: 'hello world'
        }
        // console.log( abc`i am ${user.name},${user.info}` )
        function abc(s, v1, v2){
            // console.log(s,v1,v2)
            return s + v1 + v2;
        }

        // console.log( `Hi\\n${1+2}` )
    }
}

//五、数值扩展
{
    /******
     * ES6:
     *   二进制：‘0b’开头 (不区分大小写)
     *   八进制：'0o'开头 (不区分大小写)
     *  
     * 1. Number.isInteger() //是一个整数？  只限定数字类型(NaN,Infinity除外)
     * 2. Number.MAX_SAFE_INTEGER  //最大值  
     * 3. Number.MIN_SAFE_INTEGER  //最小值
     * 4. Number.isSafeInteger(1) //true  整数是否安全
     * 5. console.log( Math.trunc(3.3) )  //取整 (存在类型转换)
     * 6. Math.sign(10)   //判断正负值(存在类型转换)  返回值：-1、0、1、NaN
     * 7. Math.cbrt('')  //立方根(存在类型转换) 返回值：Q、Infinity、NaN
    *****/

    // console.log( Number.isInteger(25) )  //是一个整数？

    // console.log( Number.MAX_SAFE_INTEGER )  //最大值
    // console.log( Number.MIN_SAFE_INTEGER )  //最小值
    // console.log( Number.isSafeInteger(1) ) //true  整数是否安全
    // console.log( Math.trunc(3.3) )  //取整 (存在类型转换)
    // console.log( Math.sign(10) )  //判断正负值(存在类型转换)  返回值：-1、0、1、NaN
    // console.log('cbrt', Math.cbrt(''))  //立方根(存在类型转换) 返回值：Q、Infinity、NaN
    
}

//六、数组的扩展
    /****
     * 
     *  1. Array.from()  //将伪数组转数组
     *  2. Array.of      //将输入的值以数组返回
     *  3. copyWithin    //复制数组内的值，在指定地方替换
     *  4. find/findIndex //查找满足条件的值，返回值\下标
     *  5. fill           //数组填充
     *  6. entries/keys/values //遍历 key value key和value
     *  7. inludes             //检查是否有这个值，可以检查NaN
     * 
    ****/
{
    // Array.of(); 将一组数据转化为数组
    {
        function add(){
            return Array.of(arguments);
        }
        let a = Array.of(1,2,3,4,5);
        // console.log(a)
    }

    // Array.from()  将伪数组或者集合转数组 | 还有一个map作用
    {
        function add(){
            Array.from(arguments).forEach(function(item){
                // console.log(item);
            })
        }
        // add(1,2,3,4,5)

        // console.log( Array.from([1,2,3], (item) => item*2) )  // [2,4,6]
    }

    //Array.fill(7,1,3)  将数组每个元素填充为7 | 从1开始到3个元素填充为7(不包含3的位置)
    {
        // console.log([1,2,3,4,5,6].fill(0,2,5))
    }

    /*
     * entries/keys/values：
     *   1. keys --》 拿到数组的下标
     *   2. values --> 拿值
     *   3. entries --> 下标和值
    */
    {
        //  for(let index of ['1', 'c', 'ks'].keys()){
        //      console.log(index);
        //  }

        //  for(let index of ['1', 'c', 'ks'].values()){
        //     console.log(index);
        // }

        // for(let [key, val] of ['1', 'c', 'ks'].entries()){
        //     console.log(key, val);
        // }
    }

    //替换数组元素
    {
        // console.log( [1,2,3,4,5,6,7,8].copyWithin(0,3,5) )  //[4, 5, 3, 4, 5, 6, 7, 8]  替换开始位置：0，从位置3-5(不含) 复制出来覆盖位置0，1
    }
    
    //查找
    {
        // console.log([1,2,3,4,5].find(function(item){return item>3}))  //返回值(只找第一个)
        // console.log([1,2,3,4,5].findIndex(function(item){return item>3}))  //返回下标(只找第一个)

        // console.log( [1,2,3,4,NaN].includes(1) );  //true  是否有1
        // console.log( [1,2,3,4,NaN].includes(NaN) );  //true 是否有NaN
    }
}

//七、函数拓展
/******
 * 1.参数默认值
 * 2.rest参数：...args
 * 3.箭头函数
 * 4.尾调用： 提升性能
*******/

//八、对象的拓展
/******
 *  
 *  1.简写模式: 属性、方法
 *  2.属性表达式：key值使用变量 [a]
 * API:
 *  3. Object.is(a,b)   //判断a===b; 可以判断NaN
 *  4. Object.assign(o) //浅拷贝
 *  5.
 *    5.1 Object.entries(o)  // es7]将对象转2维数组
 *    5.2 Object.values(o)   // es7]value组成数组
 *    5.3 Object.keys(o)     // es5]keys组成数组
 * 6. rest: ...args [babel]不支持
*******/
{
    //1
    {
        let a = 1;
        let es6 = {
            a,
            b () {
                console.log(111)
            }
        }
        // console.log(es6)
    }
    //2
    {
        let a = 'aa';
        let es6 = {
            [a]: 11
        }
        // console.log(es6)
    }
    //3
    {
        /*
         * 3.1 使用的全等
         * 3.2 能判断NaN
         * 
        */
        // console.log( Object.is(NaN,NaN) );
    }
    //4
    {
        /*
         * 4.1 浅拷贝
         * 
        */
        let o = {
            c: 1
        }
        // console.log( Object.assign({a: 'a'}, {b: o}) ) ;
    }

    //5
    {
        //对象转2维数组
        let o = {
            a: 1,
            b: 2,
            c: 3
        }

        // console.log(Object.values(o));
    }

    //扩展运算符  [ES2018-babel不支持]
    {
        // let {a,b, ...c} = {a: '1', b: '2', c: '3', d: '4'};
        // console.log(a,b,c)
    }
}

//九、Symbol：声明独一无二的值
/* 创建
 *   1. Symbol.for('aa') //如果Symbol('a')中的a已经存在，则直接使用。
 * 遍历
 *   2. Object.getOwnPropertySymbols(obj)  //返回 keys的数组(只有Symbol)
 *   3. Reflect.ownkeys(obj)               //返回 keys的数组(都存在)
*/

{
    let a1 = Symbol.for('aa');
    let a2 = Symbol.for('aa');

    // console.log(a1 === a2)

    let o = {
        [a2]: 1,
        aa: 2
    }

    for(let i in o){
        // console.log(i)
    }

    // console.log( Object.getOwnPropertySymbols(o)[0] )

    // console.log( Reflect.ownKeys(o) )
}

//十、数据结构
/*
 * 1. Set()
 *   1.1 创建：
 *          let lise = new Set(arr);
 * 
 *       1.1.1 ：
 *          * 不能重复
 *          * 属性名就是属性值
 *          * 可以被 Araay.from(list)转数组
 *   1.2 属性:
 *          list.size
 *   1.3 方法：
 *          list.add(); 
 *          list.delete(); 
 *          list.has(); 
 *          list.clear()
 *   1.4 遍历：
 *          for...of  
 *          for...of...to[.keys()] 
 *          for...of...to[.values()]  
 *          for...of...to[.entries()] 
 *          forEach
 * 2. WeakSet()
 *   2.1  值只能存储 对象
 *   2.2  弱引用：垃圾回收机制不考虑这段内容
 *   2.3  不可遍历
 * 
 * 3.Map
 *   3.1 声明
 *          let map = new Map();
 *          let map = new Map([['a', 123],['b',456]]);
 *   3.2 属性：
 *          map.size
 *   3.3 方法：
 *          .set()
 *          .get()
 *          .clear()
 *          .delete()
 *   3.4 遍历
 *          for...of  
 *          for...of...to[.keys()] 
 *          for...of...to[.values()]  
 *          for...of...to[.entries()] 
 *          forEach
 * 4.WeakMap
 *   2.1  WeakMap只接受对象作为键名
 *   2.2  WeakMap的键名所指向的对象，不计入垃圾回收机制
 *   2.3  不可遍历
*/

{
    //Set
    {
        let arr = ['add','delete','clar','has','add'];
        let list = new Set(arr);
        for(let key of list){
            // console.log(key)
        }
        for(let index of list.keys()){
            // console.log(index)            
        }
        
        for(let index of list.values()){
            // console.log(index)            
        }

        for(let [index, v] of list.entries()){
            // console.log(index, v)            
        }

        list.forEach(function(item){
            // console.log(item)
        })

        // console.log(Array.from(list))
    }

    //Map：key不限定数据类型
    {
        // let map = new Map(); 
        const k1 = [1, 2, 3];
        const k2 = [4, 5, 6];
        const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
        console.log(wm2.get(k2))
    }
}

//十一、对比map-数组 Set-对象：增|查|改|删
/*
 * 优先 Map
 * 要求有唯一性 Set
**/

//map set 数组：增|查|改|删
{
    let set = new Set();
    let map = new Map();
    let arr = [];
    //增
    map.set('a', 1);
    arr.push({a: 1});
    set.add({a: 1});

    //查
    let m = map.has('a');
    let s = set.has({a: 1});
    let a = arr.find((i)=> i.a?i:'');

    //改
    m = map.set("a", 2);
    a = arr.forEach((i) => i.a?i.a=2:'');
    s = set.forEach((i)=> i.a?i.a=2:'');

    //删
    map.delete('a');
    set.forEach((i)=>i.a?set.delete(i):'');
    let index = arr.findIndex((i)=>i.a);
    arr.splice(index,1);
}
//map set Object：增|查|改|删
{
    let item = {
        a: 1
    }
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;

    //查
    let m = map.has('t');
    let s = set.has(item);
    let o = 't' in obj;
    // console.log(m, s, o);

    //改
    map.set('t', 2);
    item.a = 2;
    obj.t = 2;

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log(map, set, obj);
}

//十二、 Proxy、Reflect
/***
 *  Proxy：代理：new Proxy(target, {
 *          get (){},
 *          set (){}
 *      })
 *      1.读取设置: .[name]/赋值
 *      2.检查: has()
 *      3.删除: deleteProprety()
 *      4.遍历：遍历Object.okeys()\Object.getOwnPropertySymbol\Object.getOwnPropertyNames：ownKeys()
 *  Reflect：反射：不需要new，直接使用
 *      1.获取/设置  get(_obj,_name)/set()
 *      2.检查：has()
 *      3.删除: deleteProprety()
 * */
{
    let obj = {
        name: 'obj',
        time: '2017-03-11',
        _r: 123
    }

    let monitor = new Proxy(obj, {
        get(target, key){
            if(key !== '_r'){
                return target[key];
            }
        }, 
        set (target, key, val){
            if(key !== '_r'){
                return target[key] = val;
            }else{
                return target[key];
            }
        },
        has (target, key){
            if(key !== '_r'){
                return target[key]                
            }else{
                return false;
            }
        },
        deleteProperty (target, key){
            if(key !== '_r'){
                delete target[key];
                return true;
            }else{
                return target[key];
            }
        },
        //遍历Object.okeys()\Object.getOwnPropertySymbol\Object.getOwnPropertyNames
        ownKeys (target){
            return Object.keys(target).filter(item=>item!=='_r');
        }
    })

    // console.log( monitor.name )
    // console.log( monitor.time )
    // console.log( monitor._r )

    // console.log('_r' in monitor)

    // delete monitor._r;
    // console.log( Object.getOwnPropertyNames(monitor) )
}
{
    let obj = {
        name: 'obj',
        time: '2017-03-11',
        _r: 123
    }

    // console.log( Reflect.get(obj, 'time') );
    // console.log( Reflect.set(obj, 'time', '11') );
    // console.log( Reflect.deleteProperty(obj, 'time') );
    // console.log( Reflect.has(obj, 'time') );
    // console.log(obj);
}
//案例
{
    function validator(target, validator){
        return new Proxy(target, {
            _validator: validator,
            set (target, key, value, proxy){
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target, key, value, proxy);
                    }else{
                        throw Error(`不能设置${key}到${value}`);
                    }
                }else{
                    throw Error(`${key}不存在`);
                }
            }
        })
    }

    const personValidators = {
        name(val){
            return typeof val === 'string';
        },
        age(val){
            return typeof val === 'number' && val > 18;
        }
    }

    class Person{
        constructor (name, age){
            this.name = name;
            this.age = age;
            return validator(this,personValidators);
        }
    }

    const person = new Person('david', 24);
    person.age = 19;
    console.info(person);
}