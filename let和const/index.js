//4.9 let 和 const
//ECMAScript 2015(ECMAScript 6)

// ES2015(ES6) 新增加了两个重要的 JavaScript 关键字: let 和 const。
// let 声明的变量只在 let 命令所在的代码块内有效。
// const 声明一个只读的常量，一旦声明，常量的值就不能改变。
// 在 ES6 之前，JavaScript 只有两种作用域： 全局变量 与 函数内的局部变量。




//使用 var 关键字声明的变量不具备块级作用域的特性，它在 {} 外依然能被访问到。

{ 
    var x = 2; 
}
console.log(x);// 2
// 在 ES6 之前，是没有块级作用域的概念的。
// ES6 可以使用 let 关键字来实现块级作用域。
{ 
    let xy = 2; 
    console.log(xy);
}
//console.log(xy);// 无法访问


// 重新定义变量
// 使用 var 关键字重新声明变量可能会带来问题。
// 在块中重新声明变量也会重新声明块外的变量：
var x = 10;
// 这里输出 x 为 10
{ 
    var x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 2

var x = 10;
// 这里输出 x 为 10
{ 
    let x = 2;
    // 这里输出 x 为 2
}
// 这里输出 x 为 10



var i = 5;
for (var i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 10
let i = 5;
for (let i = 0; i < 10; i++) {
    // 一些代码...
}
// 这里输出 i 为 5
// 在第一个实例中，使用了 var 关键字，它声明的变量是全局的，包括循环体内与循环体外。
// 在第二个实例中，使用 let 关键字， 它声明的变量作用域只在循环体内，循环体外的变量不受影响。

var carName = "Volvo";
// 可以使用 window.carName 访问变量
let carName = "Volvo";
// 不能使用 window.carName 访问变量 ，使用 let 关键字声明的全局作用域变量不属于 window 对象:


//变量提升

// 在这里可以使用 carName 变量
var carName;

// 在这里不可以使用 carName 变量
let carName;


//const 用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改：
const PI = 3.141592653589793;
PI = 3.14;      // 报错
PI = PI + 10;   // 报错