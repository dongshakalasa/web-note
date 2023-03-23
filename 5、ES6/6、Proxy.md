# 一、Proxy概述

Proxy用于修改某些操作的默认行为，等同于在语言层面作出修改，所以属于一种“元编程”，即对编程语言进行编程。

Proxy可以理解成，在目标对象之间加设一层“拦截”，外界对于该对象的操作，都必须通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

Proxy这个词的原意是代理，可以译为“代理器”

**语法**：

```js
const p = new Proxy(target,handler)
```

**参数**：

- target

  要使用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组、函数，甚至另一个代理）

- handler

  一个通常以函数作为属性的对象，个属性中的函数分别定义了在执行各种操作时代理`p`的行为

**例**：

```js
const obj = new Proxy({},{
    get:function(target,propKey,receiver) {
        return Reflect.get(target,propKey,receiver)
    },
    set:function(target,propKey,receiver) {
        return Reflect.get(target,propKey,receiver)
    },
})
```

# 二、Proxy实例的方法

## 1.get()方法

用于拦截对象的读取属性操作

**语法**：

```js
var p = new Proxy({},{
    get:function(target,propKey,receiver){
        
    }
})
```

**参数**：

- **target**

  目标对象

- **propKey**

  被获取的属性名

- **receiver**：可选属性

  Proxy或者继承Proxy的对象

**返回值**：

- get方法可以返回任何任何值

**拦截的操作**：

- 访问属性：proxy[foo] 和 proxy.bar
- 访问原型链上的属性：Object.create(proxy)[foo]
- Reflect.get()

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- 要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
- 如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined。

**例**：

```js
let person = {
    name:'张三',
    sex:'男'
};
let proxy = new Proxy(person,{
    get:function(target,propKey,receiver) {
    // { name: '张三', sex: '男' } 'age' Proxy { name: '张三', sex: '男' }
    console.log(target,propKey,receiver); 
    return '啦啦啦啦'
    }
})

console.log(proxy.name); // 啦啦啦啦
```

## 2.set()

设置属性值操作的捕获器。

**语法**：

```js
var p = new Proxy({},{
    set: function(target, property, value, receiver) {
  	}
})
```

**参数**：

- **target**

  目标对象

- **property**

  将被设置的属性名或Symbol

- **value**

  新属性值

- **receiver**：可选属性

  最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）

**返回值**：

- 返回 true 代表属性设置成功。
- 在严格模式下，如果 set() 方法返回 false，那么会抛出一个 TypeError异常。

**拦截的操作**：

- 指定属性值：proxy[foo] = bar 和 proxy.foo =bar
- 指定继承者的属性值：Object.create(proxy)[foo] = bar
- Reflect.set()

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- 若目标属性是一个不可写及不可配置的数据属性，则不能改变它的值。
- 如果目标属性没有配置存储方法，即 [[Set]] 属性的是 undefined，则不能设置它的值。
- 在严格模式下，如果 set() 方法返回 false，那么也会抛出一个 TypeError异常。

**例**：

```js
let proxy = new Proxy(person,{
    set: function(target,prop,value,receiver){
        // {name: '张三', sex: '男'}  'age'  18   Proxy {name: '张三', sex: '男'}
        console.log(target,prop,value,receiver);
    	return true;
	}
});

proxy.age = 18
```

## 3.apply()

用于拦截函数的调用。

**语法**：

```js
var p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
});
```

**参数**：

- **target**

  目标对象

- **thisArg**

  被调用时的上下文对象。

- **argumentsList**

  被调用时的参数数组。

**返回值**：

- 可以返回任何值。

**拦截的操作**：

- proxy(...args)
- Function.prototype.apply() 和 Function.prototype.call()
- Reflect.apply()

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- target 必须是可被调用的。也就是说，它必须是一个函数对象。

**例**：

```js
let target = function(){
	return ' I am function'
}

let handler = {
        apply:function(target,ctx,args) {
        console.log(target); //ƒ (){ return ' I am function' }
        console.log(ctx); //undefined
        console.log(args); //(3) [1, 2, 3]
        return ' I am Proxy'
    }
}

const proxy = new Proxy(target,handler)

console.log(proxy(1, 2, 3)); // I am Proxy
```

## 4.has()

​		用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是`in`运算符。

**语法**：

```js
var p = new Proxy(target, {
  has: function(target, prop) {
  }
});
```

**参数**：

- **target**

  目标对象

- **prop**

  需要检查是否存在的属性

**返回值**：

- 返回一个 boolean 属性的值。

**拦截的操作**：

- 属性查询：foo in proxy
- 继承属性查询：foo in Object.create(proxy)
- with 检查: with(proxy) { (foo); }
- Reflect.has()

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- 如果目标对象的某一属性本身不可被配置，则该属性不能够被代理隐藏。
- 如果目标对象为不可扩展对象，则该对象的属性不能够被代理隐藏

**例**：

```js
const proxy = new Proxy(person,{
    has:function(target,prop) {
        console.log(target); // {name: '张三', sex: '男'}
        console.log(prop); // name
        return true
    }
})

console.log("name" in proxy); // true
```

## 5.construct()

​		用于拦截 new 操作符。为了使 new 操作符在生成的 Proxy 对象上生效，用于初始化代理的目标对象自身必须具有 [[Construct]] 内部方法

**语法**：

```js
var p = new Proxy(target, {
  	construct: function(target, argumentsList, newTarget) {
  }
});
```

**参数**：

- **target**

  目标对象

- **argumentsList**

  constructor 的参数列表

- **newTarget**

  最初被调用的构造函数，就上面的例子而言是 p。

**返回值**：

- 必须返回一个对象。

**拦截的操作**：

- new proxy(...args)
- Reflect.construct()

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- 必须返回一个对象。

**例**：

```js
const proxy = new Proxy(function(){},{
    construct:function(target,arumentsList,newTarget){
        console.log(target); //ƒ (){}
        console.log(arumentsList); [1]
        console.log(newTarget); // Proxy { length: 0, name: '', arguments: null, caller: null, prototype: {… } }
        return {value: arumentsList[0]*10}
    }
})
console.log(new proxy(1).value); // 10
```

## 6.deleteProperty()

​		用于拦截delete操作，如果这个方法抛出错误或者返回`false`，当前属性就无法被`delete`命令删除。

**语法**：

```js
var p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
});
```

**参数**：

- **target**

  目标对象

- **property**

  待删除的属性名。

**返回值**：

- 返回一个 Boolean 类型的值，表示了该属性是否被成功删除。

**拦截的操作**：

- 删除属性：delete proxy[foo] 和 delete proxy.foo
- Reflect.deleteProperty()

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- 如果目标对象的属性是不可配置的，那么该属性不能被删除。

**例**：

```js
const proxy = new Proxy(person,{
    deleteProperty:function(target,property) {
        console.log(target,property); //{name: '张三', sex: '男'} 'name'
        return true;
    }
})
console.log(proxy); //Proxy {name: '张三', sex: '男'}
console.log(delete proxy.name); //true
console.log(proxy); //Proxy {name: '张三', sex: '男'}
```

## 7.defineProperty()

​		拦截了`Object.defineProperty()`操作。

**语法**：

```js
var p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
  }
});
```

**参数**：

- **target**

  目标对象

- **property**

  待检索其描述的属性名。

- **descriptor**

  待定义或修改的属性的描述符。

**返回值**：

- 必须以一个 Boolean 返回，表示定义该属性的操作成功与否。

**拦截的操作**：

- Object.defineProperty()
- Reflect.defineProperty()
- proxy.property='value'

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- 必须返回一个对象。

**例**：

```js
var p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log('called: ' + prop);
    return true;
  }
});

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"
```

## 8.getOwnPropertyDescriptor()

​		拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。

**语法**：

```js
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function(target, prop) {
  }
});
```

**参数**：

- **target**

  目标对象

- **prop**

  返回属性名称的描述。

**返回值**：

- 必须返回一个 object 或 `undefined`。

**拦截的操作**：

- Object.getOwnPropertyDescriptor()
- Reflect.getOwnPropertyDescriptor()

**约束**：

如果违背了以下的约束，proxy 会抛出 TypeError

- getOwnPropertyDescriptor 必须返回一个 object 或 undefined。
- 如果属性作为目标对象的不可配置的属性存在，则该属性无法报告为不存在。
- 如果属性作为目标对象的属性存在，并且目标对象不可扩展，则该属性无法报告为不存在。
- 如果属性不存在作为目标对象的属性，并且目标对象不可扩展，则不能将其报告为存在。
- 属性不能被报告为不可配置，如果它不作为目标对象的自身属性存在，或者作为目标对象的可配置的属性存在。
- Object.getOwnPropertyDescriptor（target）的结果可以使用 Object.defineProperty 应用于目标对象，也不会抛出异常。

**例**：

```js
var proxy = new Proxy(person,{
    getOwnPropertyDescriptor:function(target,key) {
        let text = /^_\w*/
        if(text.test(key)) {
            return ;
        }
        return Object.getOwnPropertyDescriptor(target,key)
    }
})
//{value: '张三', writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(proxy, "name")); 
// undefined
console.log(Object.getOwnPropertyDescriptor(proxy, "_b")); 
```

## 9.getPrototypeOf()

​		用来拦截获取对象原型。

**语法**：

```js
const p = new Proxy(obj, {
  getPrototypeOf(target) {
  ...
  }
});
```

**参数**：

- **target**

  目标对象

**返回值**：

- 返回值必须是一个对象或者 `null`。

**拦截的操作**：

- Object.getPrototypeOf()
- Reflect.getPrototypeOf()
- Object.prototype.__proto__
- Object.prototype.isPrototypeOf()
- instanceof

**约束**：

如果违背了以下的约束，JS 引擎会抛出 TypeError

- getPrototypeOf() 方法返回的不是对象也不是 null。
- 目标对象是不可扩展的，且 getPrototypeOf() 方法返回的原型不是目标对象本身的原型。

**例**：

```js
var proto = {};
var p = new Proxy({}, {
  getPrototypeOf(target) {
    return proto;
  }
});
Object.getPrototypeOf(p) === proto // true
```

