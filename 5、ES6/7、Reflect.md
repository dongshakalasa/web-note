# 前言

**通俗的理解**：

- 反射机制指的是程序在运行时能够获取自身的信息

# 一、JS的反射对象

反射机制我们在前言中提过了，那么在ES6中JS提供了一个叫做Reflect的对象。

**在MDN上的反射对象是这样定义的**：

​		Reflect是一个内建的对象，用来提供方法去拦截JavaScript的操作。Reflect不是一个函数对象，所以它是不可构造的，也就是说它不是一个构造器，你不能通过`new`操作符去新建或者将其作为一个函数去调用Reflect对象。Reflect的所有属性和方法都是静态的。

## 1 - 为什么需要Reflect对象

因为我们刚才说过了，利用JS的for..in可以实现，还有比如Array.isArray/Object.getOwnPropertyDescriptor，或者甚至Object.keys都是可以归类到反射这一类中。那么ECMA为什么还要这个呢？

当然是为了让JS更加强大了，相当于说提供Reflect对象将这些能够实现反射机制的方法都归结于一个地方并且做了简化，保持JS的简单。于是我们再也不需要调用Object对象，然后写上很多的代码。

**示例**1：

```js
// 此时myObject并没有继承Object这个原型的任何方法,因此有：
var myObject = Object.create(null) 

// 此时myObject是没有hasOwnProperty这个方法，那么我们要如何使用呢？如下：
myObject.hasOwnProperty === undefined 

// 是不是很恐怖，写这么一大串的代码！！！！
Object.prototype.hasOwnProperty.call(myObject, 'foo') 

var myObject = Object.create(null)
Reflect.ownKeys(myObject)
```

**示例2**：

不是用Reflect

```js
var s = Symbol('foo');
var k = 'bar';
var o = { [s]: 1, [k]: 1 };
// getOwnPropertyNames获取到String类型的key，getOwnPropertySymbols获取到Symbol类型的key
var keys = Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
```

使用Reflect

```js
var s = Symbol('foo');
var k = 'bar';
var o = { [s]: 1, [k]: 1 };
console.log(Reflect.ownKeys(o)); // ['bar', Symbol(foo)]
console.log(o[Reflect.ownKeys(o)[1]]); // 1
```

# 二、Reflect方法

## 1、Reflect.apply()

通过指定的参数列表发起对目标 (target) 函数的调用。

**语法**：

```js
Reflect.apply(target, thisArgument, argumentsList)
```

**参数**：

- target

  目标函数。

- thisArgument

  target 函数调用时绑定的 this 对象。

- argumentsList

  target 函数调用时传入的实参列表，该参数应该是一个类数组的对象。

**示例**：

```js
Reflect.apply(Math.floor, undefined, [1.75]);
```

## 2、Reflect.construct()

Reflect.construct() 方法的行为有点像 new 操作符 构造函数，相当于运行 new target(...args).

**语法**：

```js
Reflect.construct(target, argumentsList[, newTarget])
```

**参数**：

- target

  被运行的目标构造函数

- argumentsList

  类数组，目标构造函数调用时的参数。

- newTarget：**可选**

  作为新创建对象的原型对象的 constructor 属性，参考 new.target 操作符，默认值为 target。

**示例**：

```js

```

## 3、Reflect.defineProperty()

静态方法 Reflect.defineProperty() 基本等同于 Object.defineProperty() 方法，唯一不同是返回 Boolean 值。

**语法**：

```js
Reflect.defineProperty(target, propertyKey, attributes)
```

**参数**：

- target

  目标对象。

- propertyKey

  要定义或修改的属性的名称。

- attributes

  要定义或修改的属性的描述。

**示例**：

```js
let obj = {}
Reflect.defineProperty(obj, 'x', {value: 7})  // true
obj.x                                         // 7
```

## 4、Reflect.deleteProperty()

静态方法 Reflect.deleteProperty() 允许用于删除属性。它很像 delete operator ，但它是一个函数。

**语法**：

```js
Reflect.deleteProperty(target, propertyKey)
```

**参数**：

- target

  删除属性的目标对象。

- propertyKey

  需要删除的属性的名称。

**返回值**：

- Boolean 值表明该属性是否被成功删除。

**示例**：

```js
var obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
obj; // { y: 2 }
```

## 5、Reflect.get()

Reflect.get() 方法与从 对象 (target[propertyKey]) 中读取属性类似，但它是通过一个函数执行来操作的。

**语法**：

```js
Reflect.get(target, propertyKey[, receiver])
```

**参数**：

- target

  需要取值的目标对象

- propertyKey

  需要获取的值的键值

- receiver：**可选**

  如果target对象中指定了getter，receiver则为getter调用时的this值。

**返回值**：

- 属性的值。

**示例**：

```js
// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1
```

## 6、Reflect.getOwnPropertyDescriptor()

静态方法 Reflect.getOwnPropertyDescriptor() 与 Object.getOwnPropertyDescriptor() 方法相似。如果在对象中存在，则返回给定的属性的属性描述符。否则返回 undefined。

**语法**：

```js
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

**参数**：

- target

  需要寻找属性的目标对象。

- propertyKey

  获取自己的属性描述符的属性的名称。

**返回值**：

- 如果属性存在于给定的目标对象中，则返回属性描述符；否则，返回 undefined。

**示例**：

```js
Reflect.getOwnPropertyDescriptor({x: "hello"}, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}
```

## 7、Reflect.getPrototypeOf()

静态方法 Reflect.getPrototypeOf() 与 Object.getPrototypeOf() 方法几乎是一样的。都是返回指定对象的原型（即内部的 [[Prototype]] 属性的值）

**语法**：

```js
Reflect.getPrototypeOf(target)
```

**参数**：

- target

  获取原型的目标对象。

**返回值**：

- 给定对象的原型。如果给定对象没有继承的属性，则返回 null。

**示例**：

```js
// 如果参数为 Object，返回结果相同
Object.getPrototypeOf({})   // Object.prototype
Reflect.getPrototypeOf({})  // Object.prototype

// 在 ES5 规范下，对于非 Object，抛异常
Object.getPrototypeOf('foo')   // Throws TypeError
Reflect.getPrototypeOf('foo')  // Throws TypeError

// 在 ES2015 规范下，Reflect 抛异常，Object 强制转换非 Object
Object.getPrototypeOf('foo')   // String.prototype
Reflect.getPrototypeOf('foo')  // Throws TypeError
```

## 8、Reflect.has()

静态方法 Reflect.has() 作用与 in 操作符 相同。

**语法**：

```js
Reflect.has(target, propertyKey)
```

**参数**：

- target

  目标对象

- propertyKey

  属性名，需要检查目标对象是否存在此属性。

**返回值**：

- 一个 Boolean 类型的对象指示是否存在此属性。

**示例**：

```js
Reflect.has({x: 0}, "x"); // true
Reflect.has({x: 0}, "y"); // false

// Proxy 对象的 .has() 句柄方法
obj = new Proxy({}, {
  has(t, k) { return k.startsWith("door"); }
});
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

## 9、Reflect.isExtensible()

静态方法 Reflect.isExtensible() 判断一个对象是否可扩展（即是否能够添加新的属性）。与它 Object.isExtensible() 方法相似，但有一些不同，详情可见 与 Object.isExtensible() 的不同点。

**语法**：

```js
Reflect.isExtensible(target)
```

**参数**：

- target

  检查是否可扩展的目标对象。

**返回值**：

- 返回一个 Boolean 值表明该对象是否可扩展。

**示例**：

```js
// New objects are extensible.
var empty = {};
Reflect.isExtensible(empty); // === true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false
```

## 10、Reflect.ownKeys()

静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。

**语法**：

```js
Reflect.ownKeys(target)
```

**参数**：

- target

  获取自身属性键的目标对象。

**返回值**：

- 由目标对象的自身属性键组成的 Array。

**示例**：

```js
Reflect.ownKeys({z: 3, y: 2, x: 1}); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]
```

## 11、Reflect.preventExtensions()

静态方法 Reflect.preventExtensions() 方法阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)

**语法**：

```js
Reflect.preventExtensions(target)
```

**参数**：

- target

  阻止扩展的目标对象。

**返回值**：

- 返回一个 Boolean 值表明目标对象是否成功被设置为不可扩展。

**示例**：

```js
// Objects are extensible by default.
var empty = {};
Reflect.isExtensible(empty); // === true
```

## 12、Reflect.set()

静态方法 Reflect.set() 工作方式就像在一个对象上设置一个属性。

**语法**：

```js
Reflect.set(target, propertyKey, value[, receiver])
```

**参数**：

- target

  设置属性的目标对象。

- propertyKey

  设置的属性的名称。

- receiver

  设置的值。

- receiver：**可选**
  如果遇到 `setter`，`receiver`则为`setter`调用时的`this`值。

**返回值**：

- 返回一个 Boolean 值表明是否成功设置属性。

**示例**：

```js
// Object
var obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"
```

## 13、Reflect.setPrototypeOf()

除了返回类型以外，静态方法 Reflect.setPrototypeOf() 与 Object.setPrototypeOf() 方法是一样的。它可设置对象的原型

**语法**：

```js
Reflect.setPrototypeOf(target, prototype)
```

**参数**：

- target

  设置原型的目标对象。

- prototype

  对象的新原型（一个对象或 null）。

**返回值**：

- 返回一个 Boolean 值表明是否原型已经成功设置。

**示例**：

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// It can change an object's [[Prototype]] to null.
Reflect.setPrototypeOf({}, null); // true

// Returns false if target is not extensible.
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// Returns false if it cause a prototype chain cycle.
var target = {};
var proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

