//4.27 JavaScript prototype（原型对象）

//所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。

//对象的构造器（constructor）：


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
   
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");

  //我们也知道在一个已存在的对象构造器中是不能添加新的属性的：
  Person.nationality = "English";//不能赋值
  myFather.nationality = "English";//实例可以赋值
  //要添加一个新的属性需要在在构造器函数中添加：
   //this.nationality = "English";
  
console.log(myFather);


// prototype 继承
// 所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法：
// Date 对象从 Date.prototype 继承。
// Array 对象从 Array.prototype 继承。
// Person 对象从 Person.prototype 继承。
// 所有 JavaScript 中的对象都是位于原型链顶端的 Object 的实例。
// JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。
// Date 对象, Array 对象, 以及 Person 对象从 Object.prototype 继承。


//使用 prototype 属性就可以给对象的构造函数添加新的属性：

function Person1(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
   
  Person1.prototype.nationality = "English";
  var myFather1=new Person1("John", "Doe", 50, "blue");
  debugger;
  console.log(Person1);

  console.log(Person1.prototype);
  console.log(myFather1.__proto__);
  console.log(myFather1.__proto__==Person1.prototype);//true

  //待续
  