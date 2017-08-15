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
console.log(d);
