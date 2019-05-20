//5.9 

//这种“承诺将来会执行”的对象在JavaScript中称为Promise对象。

// Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，
// 原型上有then、catch等同样很眼熟的方法。
// 那就new一个


function runAsync(){
    debugger;
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        debugger;
        setTimeout(function(){
            console.log('执行完成');
            debugger;
            resolve('随便什么数据');
            console.log(a);
        }, 2000);
    });
    return p;            
}
var a=runAsync();
console.log(a);

