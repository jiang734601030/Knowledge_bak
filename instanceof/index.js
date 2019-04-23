//时间 2019/4/3  instanceof
//js中的instanceof运算符
//instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上
var obj={};
obj instanceof Object;//true 实例obj在不在Object构造函数中
console.log(obj instanceof Object);


function Person(){};
function Student(){};
var p =new Person();
Student.prototype=p;//继承原型
var s=new Student();
console.log(s instanceof Student);//true
console.log(s instanceof Person);//true


//复杂用法

function Person() {}
console.log(Object instanceof Object);     //true
//第一个Object的原型链：Object=>
//Object.__proto__ => Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Object的原型：Object=> Object.prototype

console.log(Function instanceof Function); //true
//第一个Function的原型链：Function=>Function.__proto__ => Function.prototype
//第二个Function的原型：Function=>Function.prototype

console.log(Function instanceof Object);   //true
//Function=>
//Function.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//Object => Object.prototype

console.log(Person instanceof Function);      //true
//Person=>Person.__proto__=>Function.prototype
//Function=>Function.prototype

console.log(String instanceof String);   //false
//第一个String的原型链：String=>
//String.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个String的原型链：String=>String.prototype

console.log(Boolean instanceof Boolean); //false
//第一个Boolean的原型链：Boolean=>
//Boolean.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Boolean的原型链：Boolean=>Boolean.prototype

console.log(Person instanceof Person); //false
//第一个Person的原型链：Person=>
//Person.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Person的原型链：Person=>Person.prototype