//4.12 DOM EventListener

// addEventListener() 方法

// addEventListener() 方法用于向指定元素添加事件句柄。

// addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄。

// 你可以向一个元素添加多个事件句柄。

// 你可以向同个元素添加多个同类型的事件句柄，如：两个 "click" 事件。

// 你可以向任何 DOM 对象添加事件监听，不仅仅是 HTML 元素。如： window 对象。

// addEventListener() 方法可以更简单的控制事件（冒泡与捕获）。

// 当你使用 addEventListener() 方法时, JavaScript 从 HTML 标记中分离开来，可读性更强， 在没有控制HTML标记时也可以添加事件监听。

// 你可以使用 removeEventListener() 方法来移除事件的监听。



// 事件冒泡或事件捕获？
// 事件传递有两种方式：冒泡与捕获。

// 事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？

// 在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。

// 在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。

//默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。



// removeEventListener() 方法
// element.removeEventListener("mousemove", myFunction);