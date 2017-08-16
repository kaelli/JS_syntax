//对象的属性 方法
// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: function () {
//         var y = new Date().getFullYear();
//         return y - this.birth;
//     }
// };
// console.log(xiaoming.age); // function xiaoming.age()
// console.log(xiaoming.age());  // 今年调用是25,明年调用就变成26了

'use strict';
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

// xiaoming.age(); // 25

/**
 * map学习
 * @type {[number,number,number,number,number]}
 */
var a = [1,2,3,4,5];
var b = a.map(function (x) {
    return x*x;
})
for (var key in b){
    // console.log(b[key]);
}

/**
 * reduce学习
 */
var c = [1,2,3,4,5];
var d = c.reduce(function (p1, p2) {
    return p1+p2;
})
// console.log(d);

/**
 * filter
 */
var e = c.filter(function (x) {
    return x%2!=0;
})
// console.log(e);

c.filter(function (element, index,self) {
    // console.log(element);
    // console.log(index);
    // console.log(self);
    return true;
});

/**
 * 质数过滤
 * @param arr
 * @returns {*|Array.<T>}
 */
function get_primes(arr) {
    var fun = function (x) {
        var i = 2;
        if (x<2){
            return false;
        }
        if (x==2){
            return true;
        }
        while (i<x){
            if (x%i==0){
                return false
            }
            i++;
        };
        return true;
    }
    var result = arr.filter(function (x) {
        return fun(x);
    });
    return result;
}

// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    // console.log('测试通过!');
} else {
    // console.log('测试失败: ' + r.toString());
}

/**
 * sort 默认是根据ASCII
 * sort 会把结果放到array中
 */
var sort_arr = ['Micsoft','Google','apple'];
var sort_result = sort_arr.sort();
// console.log(sort_result);
var sort_result = [1,2,10,20].sort();
// console.log(sort_result);
console.log(sort_arr);

/**
 * == 和===的区别
 *  定义："==="叫做严格运算符，"=="叫做相等运算符。
 *  1.===当类型不同时，直接false
 */


/**
 * 闭包：高阶函数的用法，1.参数可以是函数，2.返回值可以是函数，延时调用
 *
 * 理解：闭包就是能够读取其他函数内部变量的函数。
 * 由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。
 * 所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
 *
 * 用途：闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
 */

