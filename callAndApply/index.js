//1.call和apply的用法

function fruits (){};

fruits.prototype={
    color:"red",
    say:function(){
        console.log("my color is "+this.color);
    }
}

var apple = new fruits;

var banana = {
    color: "yellow"
}

apple.say.call(banana);     //My color is yellow
apple.say.apply(banana);    //My color is yellow

//所以，可以看出 call 和 apply 是为了动态改变 this 而出现的，
//当一个 object 没有某个方法（本栗子中banana没有say方法），
//但是其他的有（本栗子中apple有say方法），我们可以借助call或apply用其它对象的方法来操作。


// 2.apply、call 区别
//对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样
var func = function(arg1, arg2) {
     
};
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])

//数组之间追加
var array1 = [12 , "foo" , {name:"Joe"} , -2458]; 
var array2 = ["Doe" , 555 , 100]; 
Array.prototype.push.apply(array1, array2); 
// array1 值为  [12 , "foo" , {name:"Joe"} , -2458 , "Doe" , 555 , 100] 

//获取数组中的最大值和最小值
var  numbers = [5, 458 , 120 , -215 ]; 
var maxInNumbers = Math.max.apply(Math, numbers),   //458
    maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458

//3.bind 绑定方法
this.num = 9; 
var mymodule = {
  num: 81,
  getNum: function() { 
    console.log(this.num);
  }
};
mymodule.getNum(); // 81
var getNum = mymodule.getNum;
getNum(); // 9, 因为在这个例子中，"this"指向全局对象
var boundGetNum = getNum.bind(mymodule);
boundGetNum(); // 81


//4.apply、call、bind比较
var obj = {
    x: 81,
};
 
var foo = {
    getX: function() {
        return this.x;
    }
}
 
console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81
//三个输出的都是81，但是注意看使用 bind() 方法的，他后面多了对括号。
//也就是说，区别是，当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法。
//而 apply/call 则会立即执行函数。

// apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
// apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
// apply 、 call 、bind 三者都可以利用后续参数传参；
// bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。






