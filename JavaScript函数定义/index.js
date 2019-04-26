//4.22 JavaScript 函数定义

//JavaScript 函数定义

//函数申明
function functionName(parameters) {
    //执行的代码
  }
//函数表达式
var x = function (a, b) {return a * b};




//Function() 构造函数
//函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。


var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);


//自调用函数
(function () {
    var x = "Hello!!";      // 我将调用自己
})();



// 箭头函数
// ES6 新增了箭头函数。
// 箭头函数表达式的语法比普通函数表达式更简洁。

// (参数1, 参数2, …, 参数N) => { 函数声明 }
// (参数1, 参数2, …, 参数N) => 表达式(单一)
// 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

// 当只有一个参数时，圆括号是可选的：
// (单一参数) => {函数声明}
// 单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号:
// () => {函数声明}

// ES5
var x = function(x, y) {
    return x * y;
}
// ES6
const x = (x, y) => x * y;