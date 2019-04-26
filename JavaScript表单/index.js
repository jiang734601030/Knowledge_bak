//4.21 JavaScript 表单
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}


// 约束验证 HTML 输入属性
// 属性	描述
// disabled	规定输入的元素不可用
// max	规定输入元素的最大值
// min	规定输入元素的最小值
// pattern	规定输入元素值的模式
// required	规定输入元素字段是必需的
// type 	规定输入元素的类型

// 约束验证 CSS 伪类选择器
// 选择器	描述
// :disabled	选取属性为 "disabled" 属性的 input 元素
// :invalid	选取无效的 input 元素
// :optional	选择没有"required"属性的 input 元素
// :required	选择有"required"属性的 input 元素
// :valid	选取有效值的 input 元素