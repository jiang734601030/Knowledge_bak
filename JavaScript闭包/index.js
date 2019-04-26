//4.24 JavaScript 闭包

// JavaScript 变量可以是局部变量或全局变量。
// 私有变量可以用到闭包。

// 实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。

// JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 


// 变量 add 指定了函数自我调用的返回字值。
// 自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。
// add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。
// 这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。
// 计数器受匿名函数的作用域保护，只能通过 add 方法修改。


//java的 get 和set方法就是闭包