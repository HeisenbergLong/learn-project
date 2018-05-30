//一、let、const、块作用域
function test1(){
    /*
     * let:
     *   1.块作用域(同const同)
     *   2.强制使用了严格模式(同const同)
     *   3.不能重复声明(同const同)
    **/
    for(let i = 1; i < 3; i++){
        console.log(i);
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
{
    /****
     *  解构赋值优先级：
     *       =右侧有值 >> 默认值  >> undefined(没有匹配到值)
    ****/
        

    /****
     *数组的解构赋值
    ****/
    {
        let a,b,rest;
        [a,b] = [1,2]
        // console.log(a,b)
    }

    // 默认值\配对失败的默认值
    {
        let [a,b,c=3,d] = [1,2,4];
        // console.log(a,b,c,d);
    }
    // ...的解构
    {
        let a,b,rest;
        [a,b,...rest] = [1,2,3,4,5,6];
        // console.log(a,b,rest)
    }
    //使用场景：
    {
        //* 变量的交换：
            let a = 1;
            let b = 2;
            [a,b] = [b,a];
            // console.log(a,b);
    }
    {
        //* 接收函数的返回值：
            function f(){
                return [1,2];
            }
            let [a,b] = f();
            // console.log(a,b);
            function ff(){
                return [1,2,3,4,5];
            }
            let [c,,,d] = ff();
            // console.log(c,d)
            let [m,...n] = ff();
            // console.log(m,n)
    }

    /****
     *对象的解构赋值
    ****/
    {
        let o = {
            a: 1,
            b: true
        },reset;
        let {a, b} = o;
        // console.log(a,b,reset)
    }
    {
        let o = {
            title: '1title',
            test: [{
                title: '2title',
                desc: 'description'
            }]
        }
        let {title: esTile, test: [{title: cnTitle}],cont} = o;
        // console.log(esTile, cnTitle,cont);
    }
}

//三、正则扩展
{
    /****
     * 新增特性：
     *      构造函数的变化
     *      正则方法的扩展
     *      u修饰符
     *      y修饰符
     *      s修饰符(并没有实现好)
    *****/

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
            console.log(s,v1,v2)
            return s + v1 + v2;
        }

        console.log( `Hi\\n${1+2}` )
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

    console.log( Number.isInteger(25) )  //是一个整数？

    console.log( Number.MAX_SAFE_INTEGER )  //最大值
    console.log( Number.MIN_SAFE_INTEGER )  //最小值
    console.log( Number.isSafeInteger(1) ) //true  整数是否安全
    console.log( Math.trunc(3.3) )  //取整 (存在类型转换)
    console.log( Math.sign(10) )  //判断正负值(存在类型转换)  返回值：-1、0、1、NaN
    console.log('cbrt', Math.cbrt(''))  //立方根(存在类型转换) 返回值：Q、Infinity、NaN
    
}

//六、数组的扩展
{
    /****
     * 
     *  1. Array.from()
     *  2. Array.of
     *  3. copyWithin
     *  4. find/findIndex
     *  5. fill
     *  6. entries/keys/values
     *  7. inludes
     * 
    ****/

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
                console.log(item);
            })
        }
        // add(1,2,3,4,5)

        // console.log( Array.from([1,2,3], (item) => item*2) )  // [2,4,6]
    }

    //Array.fill(7,1,3)  将数组每个元素填充为7 | 从1开始到3个元素填充为7(不包含3的位置)
    {
        // console.log([1,2,3,4,5,6].fill(0,2,5))
    }

    // entries/keys/values
    {

    }
}