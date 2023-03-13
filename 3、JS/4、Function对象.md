# 一、Function

每个 JavaScript 函数实际上都是一个 `Function` 对象

# 二、属性

## 1、Function.length

length 是函数对象的一个属性值，指该函数期望传入的参数数量，即形参的个数

例：

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 etc.

console.log(((...args) => {}).length);
// 0, 剩余参数不计算在内

console.log(((a, b = 1, c) => {}).length);
// 1, 只有第一个具有默认值的参数之前的参数才会被计算
```

## 2、Function.name

函数的 `name` 属性可用于在调试工具或错误消息中标识该函数。它对语言本身没有任何意义。

例：

```js
function someFunction() {}
// name 属性是只读的，不能用赋值操作符修改
someFunction.name = 'otherFunction';
console.log(someFunction.name); // someFunction
```

# 三、方法

## 1、Function.prototype.apply()

`apply`() 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数。

语法：

```js
apply(thisArg)
apply(thisArg, argsArray)
```

fn.apply的作用和call相同：修改this指向，并立即执行fn。区别在于传参形式不同，apply接受两个参数，第一个参数是要指向的this对象，第二个参数是一个数组，数组里面的元素会被展开传入fn,作为fn的参数。

例：

```js
let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
	// 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。
    obj.sayHello('程序员', '看美女'); 


    let obj1 = {
        name: "lihua",
        age: 30
    }
    
    // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
    obj.sayHello.apply(obj1, ['设计师', '画画']); 
```

## 2、Function.prototype.bind()

`bind`() 方法创建一个新的函数，在 `bind`() 被调用时，这个新函数的 `this` 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

语法：

```js
bind(thisArg, arg1, arg2, arg3, ...)
```

例：

```js
let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
	// 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。
    obj.sayHello('程序员', '看美女'); 

    let obj1 = {
        name: "lihua",
        age: 30
    }
    
    obj.sayHello.bind(obj1, '设计师', '画画'); // 无输出结果
	// 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
    obj.sayHello.bind(obj1, '设计师', '画画')(); 
```



## 3、Function.prototype.call()

**`call()`** 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

语法：

```js
fn.call(thisArg, arg1, arg2, arg3, ...)
```

例：

```js
let obj = {
        name: "xiaoming",
        age: 24,
        sayHello: function (job, hobby) {
            console.log(`我叫${this.name},今年${this.age}岁。我的工作是: ${job}，我的爱好是: ${hobby}。`);
        }
    }
	// 我叫xiaoming,今年24岁。我的工作是: 程序员，我的爱好是: 看美女。
    obj.sayHello('程序员', '看美女'); 


    let obj1 = {
        name: "lihua",
        age: 30
    }
    // 我叫lihua,今年30岁。我的工作是: 设计师，我的爱好是: 画画。
    obj.sayHello.call(obj1, '设计师', '画画'); 
```



## 4、Function.prototype.toString()

**`toString()`** 方法返回一个表示当前函数源代码的字符串。

例：

```js
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// Expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// Expected output: "function abs() { [native code] }"
```

