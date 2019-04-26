//4.25 some方法

var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    var result = ages.some(checkAdult);
    console.log(result);
}
myFunction();//true


// some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
// some() 方法会依次执行数组的每个元素：
// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。
// 注意： some() 不会对空数组进行检测。

// 注意： some() 不会改变原始数组。


array.some(function(currentValue,index,arr){},thisValue);


// 参数	描述
// function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
// 函数参数:
// 参数	描述
// currentValue	         必须。当前元素的值
// index	            可选。当前元素的索引值
// arr	                可选。当前元素属于的数组对象
// thisValue	          可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
// 如果省略了             thisValue ，"this" 的值为 "undefined"


