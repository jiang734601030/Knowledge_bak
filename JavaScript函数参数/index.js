//4.23 JavaScript 函数参数

//函数显式参数(Parameters)与隐式参数(Arguments)

functionName(parameter1, parameter2, parameter3){
    // 要执行的代码……
}

//实例(ES5)
//ES5 中如果函数在调用时未提供隐式参数，参数会默认设置为： undefined
function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    } 
}

// ES6 函数可以自带参数
// ES6 支持函数带有默认参数，就判断 undefined 和 || 的操作：

// 实例（ES6）
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
 
myFunction(0, 2) // 输出 2
myFunction(5); // 输出 15, y 参数的默认值