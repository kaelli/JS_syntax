//对象的属性 方法
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(xiaoming.age); // function xiaoming.age()
console.log(xiaoming.age());  // 今年调用是25,明年调用就变成26了