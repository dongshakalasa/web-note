# 一、概述

Symbol()是一个内置全局函数，生成一个独一无二的的数据。

symbol是一个ES6标准中新增的一种基本数据类型，

Symbol类型数据的原理：保证**每一个属性名都是独一无二的**，从**根本上防止属性名的冲突**。

# 二、Symbol的生成

**symbol 的值是通过 Symbol() 函数生成**，

```js
<script>
    let data = Symbol();
    console.log(data);  //红色字体：Symbol() 表示Symbol数据
    console.log(typeof data); //"symbol"类型
</script>
```

**注**：

1. Symbol(),虽然像Array(),Object()等这些函数一样，是官方内置的函数，但是利用其生成symbol数据时却不用加new ，这是因为生成的 Symbol 是一个原始类型的值，并不是对象。
2. 每一个 symbol 的值都是唯一的，Symbol() 函数可以接受一个字符串作为参数，表示对该值的描述，因此即使定义 symbol 使用相同的参数互相之间也不是相同的：

```js
<script>
    let a1 = Symbol("G");
    let a2 = Symbol("G");
    console.log(a1 == a2); //false 不严格情况下都不相等，严格情况下更不相等
    //这里通俗理解为：两个不同的人，叫相同的名字G，你能说是同一个不？
</script>
```

# 三、方法

## 1、Symbol.for()

​		**`Symbol.for(key)`** 方法会根据给定的键 `key`，来从运行时的 symbol 注册表中找到对应的 symbol，如果找到了，则返回它，否则，新建一个与该键关联的 symbol，并放入全局 symbol 注册表中。

**语法**：

```js
Symbol.for(key);
```

**参数**：

- key：一个字符串，作为 symbol 注册表中与某 symbol 关联的键（同时也会作为该 symbol 的描述）。

**返回值**：

​		返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol。

**实例**：

```js
Symbol.for("foo"); // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo"); // 从 symbol 注册表中读取键为"foo"的 symbol

Symbol.for("bar") === Symbol.for("bar"); // true，证明了上面说的
Symbol("bar") === Symbol("bar"); // false，Symbol() 函数每次都会返回新的一个 symbol

var sym = Symbol.for("mario");
sym.toString();
// "Symbol(mario)"，mario 既是该 symbol 在 symbol 注册表中的键名，又是该 symbol 自身的描述字符串
```

## 2、Symbol.keyFor()

​		**`Symbol.keyFor(sym)`** 方法用来获取全局 symbol 注册表中与某个 symbol 关联的键。

**语法**：

```js
Symbol.keyFor(sym);
```

**参数**：

- sym：必选参数，需要查找键值的某个 Symbol。

**返回值**：

​		如果全局注册表中查找到该 symbol，则返回该 symbol 的 key 值，返回值为字符串类型。否则返回 undefined

**示例**：

```js
// 创建一个全局 Symbol
var globalSym = Symbol.for("foo");
Symbol.keyFor(globalSym); // "foo"

var localSym = Symbol();
Symbol.keyFor(localSym); // undefined，

// 以下 Symbol 不是保存在全局 Symbol 注册表中
Symbol.keyFor(Symbol.iterator) // undefined
```

# 四、注意事项

1. Symbol值作为对象的属性名时，不能使用点运算符
2. 如果要访问Symbol属性对应的值，需要使用中括号[ ]
3. Symbol定义的属性无法被Object.keys( )或者for…in遍历到

