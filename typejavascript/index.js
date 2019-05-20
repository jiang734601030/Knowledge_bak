//5.8  https://www.tslang.cn/
//https://www.runoob.com/typescript/ts-install.html

//安装ts  npm install -g typescript

//$ tsc -v

// 然后我们新建一个 test.ts 的文件，代码如下：

// var message:string = "Hello World" 
// console.log(message)


// 通常我们使用 .ts 作为 TypeScript 代码文件的扩展名。
// 然后执行以下命令将 TypeScript 转换为 JavaScript 代码：
// tsc test.ts

// 这时候再当前目录下（与 test.ts 同一目录）就会生成一个 test.js 文件，代码如下：
// var message = "Hello World";
// console.log(message);


// $ node test.js 
// Hello World

/*
tsc 常用编译参数如下表所示：

序号	编译参数说明
1.	--help 显示帮助信息
2.	--module 载入扩展模块
3.	--target 设置 ECMA 版本
4.	--declaration 额外生成一个 .d.ts 扩展名的文件。
tsc ts-hw.ts --declaration
以上命令会生成 ts-hw.d.ts、ts-hw.js 两个文件。
5.	--removeComments 删除文件的注释
6.	--out 编译多个文件并合并到一个输出的文件
7.	--sourcemap 生成一个 sourcemap (.map) 文件。
sourcemap 是一个存储源代码与编译代码对应位置映射的信息文件。
8.	--module noImplicitAny
在表达式和声明上有隐含的 any 类型时报错
9.	
--watch
在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。*/


//1.TypeScript 基础类型
/*
任意类型	any
let x: any = 1; 数字，字符串，布尔值

定义存储各种类型数据的数组时，示例代码如下：
let arrayList: any[] = [1, false, 'fine'];
*/

/**
  Null 和 Undefined
 
  let x: number | null | undefined;
  
 

never 类型
let x: never;
let y: number;
    never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
    这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点
 

 
数据类型 number
let num：number=123; 

字符串类型
let name: string = "jiang";
  
boolean类型
let flag: boolean = true;


数组类型
let arr: number[] = [1, 2];
let arr: Array<number> = [1, 2];

元组
元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
let x: [string, number];
x = ['Runoob', 1];    // 运行正常
x = [1, 'Runoob'];    // 报错
console.log(x[0]);    // 输出 Runoob


枚举	enum	
枚举类型用于定义数值集合。

enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2

void
用于标识方法返回值的类型，表示该方法没有返回值。
function hello(): void {
    alert("Hello Runoob");
}

*/
  

/**
 2.TypeScript 变量声明

var [变量名] : [类型] = 值;
var uname:string = "jiang";//

声明变量的类型及但没有初始值，变量值会设置为 undefined：
var [变量名] : [类型];

声明变量并初始值，但不设置类型类型，该变量可以是任意类型：
var [变量名] = 值;

声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
var [变量名];

类型断言（Type Assertion）
类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。
语法格式：
<类型>值
或:
值 as 类型

变量作用域
全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。
该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

 */

 /**
  TypeScript 运算符
  TypeScript 条件语句
  TypeScript 循环


  与js类似

  */

  
 /**
  TypeScript 函数
  函数调用 
  function function_name()
    {
        // 执行代码
    }
    function_name();

函数返回值
有时，我们会希望函数将执行的结果返回到调用它的地方。
通过使用 return 语句就可以实现。
在使用 return 语句时，函数会停止执行，并返回指定的值。 
 function function_name():return_type { 
    // 语句
    return value; 
}
return_type 是返回值的类型。
return 关键词后跟着要返回的结果。
一个函数只能有一个 return 语句。
返回值的类型需要与函数定义的返回类型(return_type)一致。

带参数函数
function func_name( param1 [:datatype], ( param2 [:datatype]) {   
}

可选参数和默认参数
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob");  // 正确
let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");  // 正确

默认参数
我们也可以设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数，语法格式为：
function function_name(param1[:type],param2[:type] = default_value) { 
}

剩余参数
有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。
剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

函数的最后一个命名参数 restOfName 以 ... 为前缀，
它将成为一个由剩余参数组成的数组，索引值从0（包括）到 restOfName.length（不包括）。
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("和为：",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)


*/

/**
TypeScript Number
TypeScript String
TypeScript Array(数组)
TypeScript 元组 即数组元素的类型不一样
以上和js类似

TypeScript 联合类型
联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
var val:string|number 
 */

 /**
 TypeScript 接口 
    interface interface_name { 

    }

 interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
  */

  /**
   TypeScript 类

   class class_name { 
    // 类作用域
    }
    字段 − 字段是类里面声明的变量。字段表示对象的有关数据。
    构造函数 − 类实例化时调用，可以为类的对象分配内存。
    方法 − 方法为对象要执行的操作。


class Car { 
    // 字段 
    engine:string; 
 
    // 构造函数 
    constructor(engine:string) { 
        this.engine = engine 
    }  
 
    // 方法 
    disp():void { 
        console.log("发动机为 :   "+this.engine) 
    } 
}
   */

   /**
    TypeScript 对象
    和js类似


    TypeScript 命名空间
     namespace SomeNameSpaceName { 
     export interface ISomeInterfaceName {      }  
     export class SomeClassName {      }  
     }
     以上定义了一个命名空间 SomeNameSpaceName，
     如果我们需要在外部可以调用 SomeNameSpaceName 中的类类和接口，则需要在类和接口添加 export 关键字。
     要在另外一个命名空间调用语法格式为：
     SomeNameSpaceName.SomeClassName;


     如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
     /// <reference path = "SomeFileName.ts" />
    
     */

     /**
     TypeScript 模块 
        // 文件名 : SomeInterface.ts 
        export interface SomeInterface { 
        // 代码部分
        }
        
        要在另外一个文件使用该模块就需要使用 import 关键字来导入:
        import someInterfaceRef = require("./SomeInterface");
      */