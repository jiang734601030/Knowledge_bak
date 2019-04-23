//4.6 arguments对象

// try 语句测试代码块的错误。

// catch 语句处理错误。

// throw 语句创建自定义错误。

// finally 语句在 try 和 catch 语句之后，无论是否有触发异常，该语句都会执行。


try {
        //异常的抛出
} catch(e) {
        //异常的捕获与处理
} finally {
        //结束处理
}


var txt=""; 
function message() 
{ 
    debugger;
    try { 
        adddlert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n\n"; 
        txt+="错误描述：" + err.message + "\n\n"; 
        txt+="点击确定继续。\n\n"; 
        alert(txt); 
    } 
    console.log(12);
}
message();