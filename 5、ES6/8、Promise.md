# 一、简介

- Promise 是一个类或构造函数，是 JS 原生提供的，通过实例化 Promise 完成预期的异步任务处理；
- Promise 是一个能够获取异步操作消息的对象；译为承诺，表示会在一段时间后返回处理结果；
- Promise 是一种异步编程的解决方案，被 ES6 列为正式规范，提供了原生 Promise 对象；
- Promise 能够接收一个异步请求，在提供的 then/catch 方法中拿到异步请求的处理结果；
- Promise 支持链式调用，通过链式调用的方式能够将异步请求的结果以同步的方式进行处理；

## 1 - 基本使用

```js
// 创建
let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if("异步请求成功"){
      resolve('ok');
    } else {
      reject('error')
    }
  }, 2000);
});

// 使用
promise.then(data=>{
  console.log(data);
}).catch(error=>{
  console.log(error);
});
```

- Promise的参数是一个回调函数，包含两个参数：resolve，reject
- 当异步操作成功时，通过调用resolve返回异步操作的成功结果
- 当异步操作失败时，通过调用reject返回异步操作的失败结果
- 异步操作成功时，进入then处理后续操作
- 异步操作失败时，进入catch处理后续操作

## 2 - Promise 和 callback对比

callback方式处理异步操作：

```js
function async(callback){
    setTimeout(function(){
        callback("异步操作完成");
    }, 1000);
}

async(function(data){
    console.log(data);
});
```

Promise 和 callback 的本质区别，就是**控制权反转**；

- 在 callback 模式下，回调函数的执行控制权在封装层：
  - **业务层**将回调函数**定义**传递给**封装层**
  - **封装层**在任务结束时执行了回调函数
  - **业务层**并没有调用回调函数，甚至连调用的代码都看不到
- 在Promise模式下，回调函数
  - **业务层**并没有把回调函数直接传递给封装层（Promise 对象内部）；
  - **封装层**在任务结束时，并不知道要执行的回调，只能通过 resolve 或 reject 通知到**业务层**由**业务层**在 then() 或 reject() 中控制回调执行；
  - **业务层**不仅能看到回调函数的调用代码，还能对其进行修改；

## 3 - Promise作用

Promise 可以说（主要）是为了解决程序异步处理而生的

- Promise 不仅解决了异步回调的多层嵌套，即“回调地狱”问题；
- 更重要的，Promise 提供了更完整、更强大的异步解决方案；通过 Promise 构造函数上提供的方法，实现对 Promise 批量操作的支持，如：all、race、any、allSettled 等；

## 4 - Promise的兼容性

1、兼容性介绍

Promise 属于 ES6 规范内容，浏览器支持情况可查看 [Can I use](https://caniuse.com/?search=promise) 或 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)：

2、解决方案

- bluebird.js

  在项目中使用 Promsie 对象，可以使用第三方插件 bluebird.js；bluebird 对 ES6 原生 Promise 进行封装，解决了浏览器兼容性问题;

- es6-promise

  使用 es6-promise 也可以解决 IE 下不支持 Promise 的问题；

## 5 - Promise优缺点

- 缺点
  - 优化异步代码，解决“回调地狱”问题，增强代码的可读性、可维护性；
  - Promise 对象提供统一的接口，使得控制异步操作更加容易；
  - 通过 catch 方法对异常进行统一的捕获处理；
- 缺点
  - 无法取消 Promise，一旦创建它就会立即执行，无法中途取消；
  - 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部；
  - 当处于 Pending 状态时，是无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

# 二、Promise 功能介绍与特性分析

## 1 - Promise基础特性

### 1.1、Promise类

- Promise 能够通过 new 进行对象创建，说明它是一个类或或构造函数；
- 使用 Promise 时，需要传入一个 executor 执行器；
- executor 执行器的入参包含 reslove 和 reject 两个函数；

### 1.2、executor 执行器

代码示例：

```js
new Promise(()=>{ // executor 执行器
  console.log('promise')
})
console.log('ok')

// 执行结果：
promise
ok
```

- 现象：先输出 promise，后输出 ok；
- 所以，executor 执行器会**在 Promise 创建完成后被立即执行**；

### 1.3、Promise的三种状态

- pending：等待状态（默认）
- fufilled：成功状态
- rejected：失败状态

### 1.4、reslove 和 reject 的作用

executor 执行器的两个函数 reslove 和 reject，用于描述 Promise 状态：

- 当异步操作成功时，通过调用 resolve 返回异步操作的成功结果;
- 当异步操作失败时，通过调用 reject 返回异步操作的失败结果;

**reslove**：

- 通过调用 reslove 函数，使当前 Promise 状态变更为成功态 fulfilled；
- resolve 表示成功，可以传入一个 value；

示例：

```js
let promise = new Promise((resolve, reject)=>{
  console.log('promise')
  resolve("成功");	// 调用 resolve 方法
})
console.log('ok', promise)

// 执行结果：
promise
ok Promise { '成功' }
```

**reject**：

- 通过调用 reject 函数，使当前 Promise 状态变更为失败态 rejected；
- reject 表示失败，可以传入一个 reason；

示例：

```js
let promise = new Promise((resolve, reject)=>{
  console.log('promise')
  reject("失败");	// 调用 reject 方法
})
console.log('ok', promise)

// 执行结果：
promise
ok Promise { <rejected> '失败' }
```

### 1.5、Promise 实例的状态只能改变一次

Promise 实例的状态一旦发生变化，不能再次被更改：

- promise 状态只能从 pending 更新为 fulfilled 成功态，或是从 pending 更新为 rejected 失败态；
- 当 promise 为成功或失败状态时，不能再次通过调用 resolve、reject或抛出异常来改变 当前 promise 实例的状态；

### 1.6、Promise API

Promise API 分为以下两大类：

- **实例 API 或原型方法**：必须要 new 出实例才能使用的实例方法；
- **静态 API 或类方法**：不需要 new 出实例就可以使用的静态方法；

分别包含了以下方法：

- Promise 共有 3 个实例方法:`then`、`catch`、`finally`；
- Promise 共有 4 个静态方法:`resolve`、`reject`、`all`、`race`；

## 2 - Promise实例API（原型方法）

### 2.1、Promise.prototype.then()

**语法**：

```js
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

**参数**：

- onFulfilled：可选

  当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment value）。如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数

- onRejected：可选

  当 Promise 变成拒绝状态（rejected）时调用的`函数`。该函数有一个参数，即拒绝的原因（rejection reason）。如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。

**进入条件**：

​		Promise 主体任务 和 此前链式调用中的全部回调任务都成功时（即通过 resolve 标注状态），进入本次 then() 回调；

示例：

```js
// promise 有三种状态：成功态，失败态，等待态（默认）
// 调用 resolve，状态更新为成功态，进入 then 成功回调；
// 调用 reject，状态更新为失败态，进入 then 失败回调；
// 每个 promise 实例的状态只能给改变一次；
let promise = new Promise((resolve, reject)=>{
  console.log('promise')
  resolve("成功");     // 进入 then 成功处理
  // reject("失败");   // 进入 then 失败处理
  // throw new Error("发生错误"); // 进入 then 失败处理
})

promise.then((value)=>{
  console.log('success', value) // onFulfilled：成功状态时被调用
},()=>{
  console.log('err')     // onRejected：失败状态时被调用 
})

console.log('ok')

// 执行结果：
promise      -> executor 被立即执行
ok           -> 直接执行完毕，then 方法为异步
success 成功 -> promise 异步处理完成，进入 then 中 onFulfilled 函数
```

### 2.2、Promise.prototype.catch()

**功能介绍**：

​	用于指定发生错误时的回调函数；此方法是 Promise.prototype.then(undefined, onRejected) 的一种简写形式。

**进入条件**：

​		Promise 主体任务和此前链式调用中出现异常且未被捕获时（即通过 reject 标注状态或出现 JS 原生报错且没有被处理时），进入本次 catch()回调；

### 2.3、Promise.prototype.finally()

**功能介绍**：

​		在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在 `Promise` 是否成功完成后都需要执行的代码提供了一种方式。这避免了同样的语句需要在 [`then()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 和 [`catch()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 中各写一次的情况。

**进入条件**：

无论链式调用过程中是否出现成功或者失败，最终都将会执行 finally 方法，除非没有添加 .finally 处理;

## 3 - Promise静态API（类方法）

Promise 共有 4 个静态方法，分别是:`resolve`、`reject`、`all`、`race`；

### 3.1、Promise.resolve()

**功能介绍**：

- Promise.resolve()：创建并返回一个成功状态的 Promise 实例；
- 常用于构建微任务；（构建宏任务常用`setTimeout`）;

**示例**：

```js
function getData() {
  const a = 1;
  const b = 2;
  const c = a + b;
  return Promise.resolve(c); // 创建成功状态 promise 实例，放入微任务队列
}
```

### 3.2、Promise.reject()

**功能介绍**：

- Promise.reject()：创建并返回一个失败状态的 Promise 实例；

### 3.3、Promise.all()

**功能介绍**：

- Promise.all()：用于将多个 Promise 实例，包装成一个新的 Promise 实例。

### 3.4、Promise.race()

**功能介绍**：

- 类似Promise.all()，区别是

# 三、手撸原码

## 1 - 手写promise.all

```js
function pAll(_promise) {
    // 返回promise对象
    return new Promise((resolve,reject)=>{
        // Iterable => Array
        const promises = Array.from(_promise)
        // 结果用一个数组
        const res = []
        const len = promises.length
        let count = 0
        for(let i = 0; i < len; i++) {
            // Promise.resolve 确保把所有数据都转化为 Promise
            Promise.resolve(promises[i]).then(o=>{
                // 因为 promise 是异步的，保持数组一一对应
                res[i] = o
                
                // 如果数组中所有 promise 都完成，则返回结果数组
                 if (++count === len) {
                   resolve(res)
                 }
            }).catch(e => reject(e))
        }
    })
}
```

## 2 - 实现一个简版Promise

**实现思路**：

- promise 是一个类；
- 使用 promise 时，传入 executor 执行器，并被立即执行；
- executor 参数是两个函数，用于描述 promise 实例的状态；
  - resolve 表示成功，可以传入一个 value；
  - reject 表示失败，可以传入一个 reason;
- 每个 Promise 实例都有一个 then 方法；
- promise 一旦状态发生后，不能再更改，promise 有三种状态：成功态，失败态，等待态(默认)

**实现代码**：

```js
// 声明proimse的三种状态
const PENDING = 'PENDING'; //等待态
const FUFILLED = 'FUFILLED';//成功态
const REJECTED = 'REJECTED';//失败态

class Promise {
    constructor(executor) {
        this.value = undefined; //保存成功的原因，then中调用onFulfilled
        this.reason = undefined; //保存失败的原因,then中调用onFulfilled时传入
        this.state = PENDING;
        const reslove = (value)=> {
            if(this.state === PENDING) {
                this.value = value;
                this.state = FUFILLEND;
            }
        }
        const reject = (reason) => {
            if(this.state = PENDING) {
                this.reason = reason;
                this.state = REJECTED;
            }
        }
        // 立即执行 executor 执行器函数，通过 try...catch... 进行异常捕捉；
        try {
            executor(reslove,reject);
        }catch(e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected){
    // 成功态，调用 onFulfilled，传入成功 value
    if(this.state === FUFILLED){
      onFulfilled(this.value)
    } 
    // 失败态，执行 onRejected，传入失败 reason
    if(this.state === REJECTED){
      onRejected(this.reason)
    }
  }
}

// 导出 Promise 类供外部使用
module.exports = Promise; 
```

# Promise应用场景

## 1 - 项目应用场景

