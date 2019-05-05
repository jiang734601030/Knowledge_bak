//5.2 数组排序
// ### 1. JavaScript的sort()方法  sort排序直接更改原数组的顺序
var array = [1,4,-8,-3,6,12,9,8];
function compare(val1,val2){
    return val1-val2;
};
array.sort(compare);
document.write(array);

// ### 2.冒泡排序（从后向前）
var arr=[1,4,-8,-3,6,12,9,8,7];
for(var i=0;i<arr.length-1;i++){  //i的作用是执行每一项
    for(var j=0;j<arr.length-1;j++){ //每次把最大的往后面移动。直到比自己大的就停下，（执行arr.length-1次）
       if(arr[j]>arr[j+1]){
             var temp=arr[j+1];
             arr[j+1]=arr[j];
             arr[j]=temp;
       }
    }
}
console.log(arr);
//（1）比较相邻的元素。如果第一个比第二个大，就交换他们两个位置。
//（2）对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
//（3）针对所有的元素重复以上的步骤，除了最后一个。
//（4）持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。


//数组去重

//数组二分法查找