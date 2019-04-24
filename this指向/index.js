//4.7 this 对象

// 面向对象语言中 this 表示当前对象的一个引用。
// 但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
// 在方法中，this 表示该方法所属的对象。
// 如果单独使用，this 表示全局对象。
// 在函数中，this 表示全局对象。
// 在函数中，在严格模式下，this 是未定义的(undefined)。
// 在事件中，this 表示接收事件的元素。
// 类似 call() 和 apply() 方法可以将 this 引用到任何对象。


// 面向对象语言中 this 表示当前对象的一个引用。
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

// 在函数中，this 表示全局对象。
function myFunction() {
console.log(this);
    return this;
  }
myFunction();//这里返回的时window对象

// 在函数中，在严格模式下，this 是未定义的(undefined)。
"use strict";
function myFunction1() {
    console.log(this);
  return this;
}
myFunction1();