//时间 2019/4/4  正则表达式 

// /正则表达式主体/修饰符(可选)
var patt=/Runoob/ig;
var str = "Visit Runoob!"; 
var n = str.search(patt);
console.log(n);//返回索引6

//修饰符	描述
//i	执行对大小写不敏感的匹配。
//g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
//m	执行多行匹配。

// 正则表达式模式
// 表达式	描述
// [abc]	查找方括号之间的任何字符。
// [0-9]	查找任何从 0 至 9 的数字。
// (x|y)	查找任何以 | 分隔的选项。

// 元字符	描述
// \d	查找数字。
// \s	查找空白字符。
// \b	匹配单词边界。
// \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。


// 量词:
// 量词	描述
// n+	匹配任何包含至少一个 n 的字符串。
// n*	匹配任何包含零个或多个 n 的字符串。
// n?	匹配任何包含零个或一个 n 的字符串。

//实列
var patt1 = /e/;
var FLAG=patt1.test("The best things in life are free!");
console.log(FLAG);

// exec() 方法用于检索字符串中的正则表达式的匹配。
// 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。

var exec=/E/ig.exec("The best things in life are free!");
console.log(exec);//只返回一个值["e", index: 2, input: "The best things in life are free!", groups: undefined]


// runoo+b，可以匹配 runoob、runooob、runoooooob 等，+ 号代表前面的字符必须至少出现一次（1次或多次）。

// runoo*b，可以匹配 runob、runoob、runoooooob 等，* 号代表字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）。

// colou?r 可以匹配 color 或者 colour，? 问号代表前面的字符最多只可以出现一次（0次、或1次）。


// 特别字符	描述
// $	匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\n' 或 '\r'。要匹配 $ 字符本身，请使用 \$。
// ( )	标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \( 和 \)。
// *	匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \*。
// +	匹配前面的子表达式一次或多次。要匹配 + 字符，请使用 \+。
// .	匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \. 。
// [	标记一个中括号表达式的开始。要匹配 [，请使用 \[。
// ?	匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \?。
// \	将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， 'n' 匹配字符 'n'。'\n' 匹配换行符。序列 '\\' 匹配 "\"，而 '\(' 则匹配 "("。
// ^	匹配输入字符串的开始位置，除非在方括号表达式中使用，此时它表示不接受该字符集合。要匹配 ^ 字符本身，请使用 \^。
// {	标记限定符表达式的开始。要匹配 {，请使用 \{。
// |	指明两项之间的一个选择。要匹配 |，请使用 \|。


// 字符	描述
// *	匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
// +	匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
// ?	匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 、 "does" 中的 "does" 、 "doxy" 中的 "do" 。? 等价于 {0,1}。
// {n}	n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
// {n,}	n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
// {n,m}	m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。



// 字符	描述
// ^	匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，^ 还会与 \n 或 \r 之后的位置匹配。
// $	匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与 \n 或 \r 之前的位置匹配。
// \b	匹配一个单词边界，即字与空格间的位置。
// \B	非单词边界匹配。


/*是否带有小数*/
function    isDecimal(strValue )  {  
    var  objRegExp= /^\d+\.\d+$/;
    return  objRegExp.test(strValue);  
 }  
 
 /*校验是否中文名称组成 */
 function ischina(str) {
     var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
     return reg.test(str);     /*进行验证*/
 }
 
 /*校验是否全由8位数字组成 */
 function isStudentNo(str) {
     var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
     return reg.test(str);     /*进行验证*/
 }
 
 /*校验电话码格式 */
 function isTelCode(str) {
     var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
     return reg.test(str);
 }
 
 /*校验邮件地址是否合法 */
 function IsEmail(str) {
     var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
     return reg.test(str);
 }