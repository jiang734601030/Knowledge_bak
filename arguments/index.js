//4.5 arguments对象

//arguments是函数中自动创建的一种类数组对象，用来接收函数所传入的参数值。

function checkout(){
    debugger;

    if(arguments.length==1){
        console.log(arguments[0]);
    }
    if(arguments.length==2){
        console.log(arguments[0]);
        console.log(arguments[1]);
    }
    if(arguments.length==3){
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]);
    }
}

checkout(1);
checkout(1,2);
checkout(1,2,3);
