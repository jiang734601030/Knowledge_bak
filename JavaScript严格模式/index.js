//4.20 JavaScript 严格模式(use strict)

//"use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。
// 它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。
// "use strict" 的目的是指定代码在严格条件下执行。放在开头就可以了
// 严格模式下你不能使用未声明的变量。

// 支持严格模式的浏览器:
// Internet Explorer 10 +、 Firefox 4+ Chrome 13+、 Safari 5.1+、 Opera 12+。

//  "use strict";
//  x = 3.14;                // 报错 (x 未定义)




// "use strict";
// myFunction();

// function myFunction() {
//     y = 3.14;   // 报错 (y 未定义)
// }



 z = 3.14;       // 不报错 
myFunction();

function myFunction() {
   "use strict";
    y = 3.14;   // 报错 (y 未定义)
}



// 为什么使用严格模式:

// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
// 消除代码运行的一些不安全之处，保证代码运行的安全；
// 提高编译器效率，增加运行速度；
// 为未来新版本的Javascript做好铺垫。
// "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，
// 许多大项目已经开始全面拥抱它。

// 另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；
// 一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，
// 有助于更细致深入地理解Javascript，让你变成一个更好的程序员。