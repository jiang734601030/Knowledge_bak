// 5.6
// 1.懒加载概念
// 对于页面有很多静态资源的情况下（比如网商购物页面），
// 为了节省用户流量和提高页面性能，可以在用户浏览到当前资源的时候，再对资源进行请求和加载。


// 原理：先将img标签中的src链接设为同一张图片（空白图片），将其真正的图片地址存储再img标签的自定义属性中
// （比如data-src）。当js监听到该图片元素进入可视窗口时，即将自定义属性中的地址存储到src属性中，
// 达到懒加载的效果。
// 这样做能防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题。


// 代码实现

// 既然懒加载的原理是基于判断元素是否出现在窗口可视范围内，首先我们写一个函数判断元素是否出现在可视范围内：
function isVisible($node){
    var winH = $(window).height(),
        scrollTop = $(window).scrollTop(),
        offSetTop = $(window).offSet().top;
    if (offSetTop < winH + scrollTop) {
        return true;
    } else {
        return false;
    }
}

// 再添加上浏览器的事件监听函数，让浏览器每次滚动就检查元素是否出现在窗口可视范围内：


var hasShowed = false;
$(window).on("sroll",function(){
    if (hasShowed) {
        return;
    } else {
        if (isVisible($node)) {
            hasShowed = !hasShowed;
            console.log(true);
        }
    }
})


// 总结：懒加载有图片懒加载和路由懒加载。

// 图片懒加载原理是使用js监听图片元素是否进入可视窗口，进入之前，
// 将图片链接设为假地址而真正的地址用自定义属性储存起来，进入之后，将src属性值替换成真正地址；
// 优点：能防止页面一次性向服务器响应大量请求导致服务器响应慢，页面卡顿或崩溃等问题；

// 路由懒加载：把所有代码分成几块，按需加载；按照路由跳转加载需要的代码块，同样地减少不必要的服务器请求；
