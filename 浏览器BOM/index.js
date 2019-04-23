//4.8 浏览器bom
//Window 对象
// 所有浏览器都支持 window 对象。它表示浏览器窗口。
// 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
// 全局变量是 window 对象的属性。
// 全局函数是 window 对象的方法。
// 甚至 HTML DOM 的 document 也是 window 对象的属性之一：

//window.document.getElementById("header");
console.log(this.document);

// window.innerHeight - 浏览器窗口的内部高度(包括滚动条)
// window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)

console.log(window.innerHeight);

console.log(window.innerWidth);

//兼容问题
var w=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
console.log(window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth);


// window.open() - 打开新窗口
// window.close() - 关闭当前窗口
// window.moveTo() - 移动当前窗口
// window.resizeTo() - 调整当前窗口的尺寸
//window.open("file:///D:/Knowledge/this%E6%8C%87%E5%90%91/index.html");可打开新的窗口
//window.close();


//window.screen 对象包含有关用户屏幕的信息。

// screen.availWidth - 可用的屏幕宽度
// screen.availHeight - 可用的屏幕高度

//window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。
// location.hostname 返回 web 主机的域名
// location.pathname 返回当前页面的路径和文件名
// location.port 返回 web 主机的端口 （80 或 443）
// location.protocol 返回所使用的 web 协议（http:// 或 https://）
// location.href 属性返回当前页面的 URL。
// document.write(location.href);
// http://www.runoob.com/js/js-window-location.html


//window.history 对象包含浏览器的历史。
// history.back() - 与在浏览器点击后退按钮相同
// history.forward() - 与在浏览器中点击向前按钮相同
// history.go(1);  // go() 里面的参数表示跳转页面的个数 例如 history.go(1) 表示前进一个页面
// history.go(-1);  // go() 里面的参数表示跳转页面的个数 例如 history.go(-1) 表示后退一个页面

//window.navigator 对象包含有关访问者浏览器的信息。
console.log(this.navigator);

//setInterval() 和 setTimeout() 


// 什么是 Cookie？
// Cookie 是一些数据, 存储于你电脑上的文本文件中。

// 当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。

// Cookie 的作用就是用于解决 "如何记录客户端的用户信息":

// 当用户访问 web 页面时，他的名字可以记录在 cookie 中。
// 在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。


// JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。

// JavaScript 中，创建 cookie 如下所示：

// document.cookie="username=John Doe";
// 您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

// document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
// 您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
document.cookie="username=John Doe";
var x = document.cookie;
console.log(x);