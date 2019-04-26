//4.18 JavaScript 类型转换

typeof "John"                 // 返回 string 
typeof 3.14                   // 返回 number
typeof NaN                    // 返回 number
typeof false                  // 返回 boolean
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof myCar                  // 返回 undefined (如果 myCar 没有声明,什么不赋值也是undefined)
typeof null                   // 返回 object



// constructor 属性
// constructor 属性返回所有 JavaScript 变量的构造函数。

// 实例
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
//[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
//{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
//function () {}.constructor         // 返回函数 Function(){ [native code] }
console.log("John".constructor);


// JavaScript 类型转换
// JavaScript 变量可以转换为新变量或其他数据类型：
// 通过使用 JavaScript 函数
// 通过 JavaScript 自身自动转换


// 将数字转换为字符串
// 全局方法 String() 可以将数字转换为字符串。
// 该方法可用于任何类型的数字，字母，变量，表达式：
// 实例
// String(x)         // 将变量 x 转换为字符串并返回
// String(123)       // 将数字 123 转换为字符串并返回
// String(100 + 23)  // 将数字表达式转换为字符串并返回

var x=1;
console.log(typeof string); //返回undefined，说明string不是关键字
console.log(typeof String); //返回function
console.log(typeof String(x)); //返回是string
var a="a";
console.log(String(123+23));//返回 146
console.log(a+10);//a10
console.log(10+a);//10a

//toString()
var  b="b";
console.log((12).toString());//12
console.log(Number(b)); //返回NaN


String(false)        // 返回 "false"
String(true)         // 返回 "true"

Number("3.14")    // 返回 3.14
Number(" ")       // 返回 0 
Number("")        // 返回 0
Number("99 88")   // 返回 NaN

var xy=2;
var y = "5";      // y 是一个字符串
    xy +=  y;      // x 是一个数字
console.log(xy);//返回25


// 自动转换类型
// 当 JavaScript 尝试操作一个 "错误" 的数据类型时，会自动转换为 "正确" 的数据类型。

// 以下输出结果不是你所期望的：

5 + null    // 返回 5         null 转换为 0
"5" + null  // 返回"5null"   null 转换为 "null"
"5" + 1     // 返回 "51"      1 转换为 "1"  
"5" - 1     // 返回 4         "5" 转换为 5

console.log("a"-1); //返回NaN


// 自动转换为字符串
// 当你尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法：


var myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
var myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
var myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"



// 下表展示了使用不同的数值转换为数字(Number), 字符串(String), 布尔值(Boolean):
// 原始值	转换为数字	转换为字符串	转换为布尔值	
// false	0	      "false"	            false	
// true	    1	      "true"	            true	
// 0	    0	       "0"	                false	
// 1	    1	       "1"	                true	
// "0"   	0	       "0"	                true	
// "000"	0	       "000"	            true	
// "1"	    1	       "1"	                true	
// NaN   	NaN	      "NaN"	             false	
// Infinity	Infinity	"Infinity"        true	
// -Infinity -Infinity	"-Infinity"	      true	
// ""	    0	        ""	              false	
// "20"	    20	       "20"             	true	
// "Runoob"	 NaN	"Runoob"	           true	
// [ ]	   0	      ""    	           true	
// [20]	   20	      "20"	           true	
// [10,20]	NaN	     "10,20"	      true	
// ["Runoob"]	NaN	  "Runoob"	      true	
// ["Runoob","Google"]	NaN	    "Runoob,Google"	true	
// function(){}	NaN	"function(){}"    	true	
// { }  	NaN	    "[object Object]"	true	
// null	 0	"null"	false	
// undefined	NaN	"undefined"	false	
