//4.28 number 对象

//所有 JavaScript 数字均为 64 位

// 精度
// 整数（不使用小数点或指数计数法）最多为 15 位。

var x = 999999999999999;   // x 为 999999999999999
var y = 9999999999999999;  // y 为 10000000000000000

console.log(x);
console.log(y);

var x = 0.2+0.1; // 输出结果为 0.30000000000000004

// 八进制和十六进制
// 如果前缀为 0，则 JavaScript 会把数值常量解释为八进制数，
// 如果前缀为 0 和 "x"，则解释为十六进制数。

var y = 0377; //八进制
var z = 0xFF; //十六进制


// 默认情况下，JavaScript 数字为十进制显示。
// 但是你可以使用 toString() 方法 输出16进制、8进制、2进制。
var myNumber=128;
myNumber.toString(16);   // 返回 80
myNumber.toString(8);    // 返回 200
myNumber.toString(2);    // 返回 10000000

//无穷大（Infinity）
console.log(2/0);//返回Infinity


//NaN - 非数字值
var x = 1000 / "Apple";
isNaN(x); // 返回 true
var y = 100 / "1000";
isNaN(y); // 返回 false
var x = 1000 / 0;
isNaN(x); // 返回 false


// 数字可以是数字或者对象
// 数字可以私有数据进行初始化，就像 x = 123;
// JavaScript 数字对象初始化数据， var y = new Number(123);

var x = 123;
var y = new Number(123);
typeof(x) // 返回 Number
typeof(y) // 返回 Object