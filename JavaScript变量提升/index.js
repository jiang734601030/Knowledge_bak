//4.19 JavaScript 变量提升

// JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
// JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。


function abc(){
    console.log(a);
    var a=123;
}

//实际上是
function abc(){
    var a;
    console.log(a);
    a=123;
}

// JavaScript 初始化不会提升
// JavaScript 只有声明的变量会提升，初始化的不会。

// var x = 5; // 初始化 x
// elem = document.getElementById("demo"); // 查找元素 
// elem.innerHTML = x + " " + y;           // 显示 x 和 y
// var y = 7; // 初始化 y
//  y 输出了 undefined，这是因为变量声明 (var y) 提升了，但是初始化(y = 7) 并不会提升，所以 y 变量是一个未定义的变量。
