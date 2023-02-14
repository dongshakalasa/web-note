# 一、Set和Map数据结构

## Set

ES6提供的新的数据结构，类似于数组，但成员的值都是唯一的，没有重复的值

Set本身是一个构造函数，用来生成Set数据结构，Set函数可以接受一个数组（或者具有iterable接口的其他数据类型）作为参数

### 1、Set实例的属性和方法

Set 结构的实例有以下属性。

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

Array.from方法可以将Set结构转为数组

```
const items = new Set([1,2,3])
const array = Array.from(items)
```

### 2、遍历操作

Set 结构的实例有四个遍历方法，可以用于遍历成员。

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

## WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

- WeakSet 的成员只能是对象，而不能是其他类型的值。
- WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中
- 垃圾回收机制根据对象的可达性（reachability）来判断回收，如果对象还能被访问到，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失
- 由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。

WeakSet 结构有以下三个方法。

- **WeakSet.prototype.add(value)**：向 WeakSet 实例添加一个新成员。
- **WeakSet.prototype.delete(value)**：清除 WeakSet 实例的指定成员。
- **WeakSet.prototype.has(value)**：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

## 	Map

### 1、含义和基本用法

- JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
- Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
- 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
- 如果对同一个键多次赋值，后面的值将覆盖前面的值。
- 只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

```
const map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
```

上面代码的`set`和`get`方法，表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此`get`方法无法读取该键，返回`undefined`。

 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如`0`和`-0`就是一个键，布尔值`true`和字符串`true`则是两个不同的键。另外，`undefined`和`null`也是两个不同的键。虽然`NaN`不严格相等于自身，但 Map 将其视为同一个键

### 2、实例的属性和操作方法

- size 属性：属性返回 Map 结构的成员总数。
- Map.prototype.set(key, value)：`set`方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。
- Map.prototype.get(key)：`get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`。
- Map.prototype.has(key)：`has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
- Map.prototype.delete(key)：`elete`方法删除某个键，返回`true`。如果删除失败，返回`false`。
- Map.prototype.clear()：`clear`方法清除所有成员，没有返回值。

### 3、遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

### 4、与其他数据结构的互相转换

- Map 转为数组

  Map 转为数组最方便的方法，就是使用扩展运算符（`...`）。

  ```js
  const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
  [...myMap]
  // [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
  ```

- 数组 转为 Map

  将数组传入 Map 构造函数，就可以转为 Map。

  ```javascript
  new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
  ])
  // Map {
  //   true => 7,
  //   Object {foo: 3} => ['abc']
  // }
  ```

- Map 转为对象

  如果所有 Map 的键都是字符串，它可以无损地转为对象。

  如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。

  ```js
  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
  
  const myMap = new Map()
    .set('yes', true)
    .set('no', false);
  strMapToObj(myMap)
  // { yes: true, no: false }
  ```

- 对象转为 Map

  对象转为 Map 可以通过`Object.entries()`。

  此外，也可以自己实现一个转换函数。

  ```js
  let obj = {"a":1, "b":2};
  let map = new Map(Object.entries(obj));
  
  function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }
  
  objToStrMap({yes: true, no: false})
  // Map {"yes" => true, "no" => false}
  ```

- JSON 转为 Map

  JSON 转为 Map，正常情况下，所有键名都是字符串。

  ```javascript
  function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }
  
  jsonToStrMap('{"yes": true, "no": false}')
  // Map {'yes' => true, 'no' => false}
  ```

  有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。

  ```javascript
  function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
  }
  
  jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
  // Map {true => 7, Object {foo: 3} => ['abc']}
  ```

## 5、WeakMap

`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合。

- WeakMap 可以使用 set 方法添加成员
- WeakMap 也可以接受一个数组，

### 1、`WeakMap`与`Map`的区别有两点。

- `WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名
- `WeakMap`的键名所指向的对象，不计入垃圾回收机制。

### 2、`WeakMap`的设计目的

有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。请看下面的例子。

```js
const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo 元素'],
  [e2, 'bar 元素'],
];
```

上面代码中，`e1`和`e2`是两个对象，我们通过`arr`数组对这两个对象添加一些文字说明。这就形成了`arr`对`e1`和`e2`的引用。

一旦不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放`e1`和`e2`占用的内存。

上面这样的写法显然很不方便。一旦忘了写，就会造成内存泄露。

WeakMap 就是为了解决这个问题而诞生的，它的键名所引用的对象都是弱引用，即垃圾回收机制不将该引用考虑在内。因此，只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用`WeakMap`结构。当该 DOM 元素被清除，其所对应的`WeakMap`记录就会自动被移除。

`注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。`

```js
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
```

上面代码中，键值`obj`是正常引用。所以，即使在 WeakMap 外部消除了`obj`的引用，WeakMap 内部的引用依然存在。

### 3、WeakMap的语法

WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有`keys()`、`values()`和`entries()`方法），也没有`size`属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。二是无法清空，即不支持`clear`方法。因此，`WeakMap`只有四个方法可用：`get()`、`set()`、`has()`、`delete()`。

### 4、WeakMap 的用途

# 二、Iterator和for-of循环

## Iterator(遍历器)的概念

### 1、简介

JavaScript 原有的表示“集合”的数据结构，主要是数组（`Array`）和对象（`Object`），ES6 又添加了`Map`和`Set`。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是`Map`，`Map`的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

`Iterator 的作用有三个`：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令`for...of`循环，Iterator 接口主要供`for...of`消费。

### 2、Iterator 的遍历过程

1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
2. 第一次调用指针对象的`next`方法，可以将指针指向数据结构的第一个成员。
3. 第二次调用指针对象的`next`方法，指针就指向数据结构的第二个成员。
4. 不断调用指针对象的`next`方法，直到它指向数据结构的结束位置。

每一次调用`next`方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含`value`和`done`两个属性的对象。其中，`value`属性是当前成员的值，`done`属性是一个布尔值，表示遍历是否结束。

## 默认的Iterator接口

Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即`for...of`循环。当使用`for...of`循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口。

一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）

ES6 规定，默认的 Iterator 接口部署在数据结构的`Symbol.iterator`属性，或者说，一个数据结构只要具有`Symbol.iterator`属性，就可以认为是“可遍历的”（iterable）。`Symbol.iterator`属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名`Symbol.iterator`，它是一个表达式，返回`Symbol`对象的`iterator`属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内

原生具备 Iterator 接口的数据结构如下。

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

## 调用 Iterator 接口的场合 

（1）解构赋值

对数组和 Set 结构进行解构赋值时，会默认调用`Symbol.iterator`方法。

（2）扩展运算符

扩展运算符（...）也会调用默认的 Iterator 接口。

（3）yield*

`yield*`后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。

（4）其他场合

由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。下面是一些例子。

- for...of
- Array.from()
- Map(), Set(), WeakMap(), WeakSet()（比如`new Map([['a',1],['b',2]])`）
- Promise.all()
- Promise.race()

## 字符串的 Iterator 接口

字符串是一个类似数组的对象，也原生具有 Iterator 接口。

## Iterator 接口与 Generator 函数

## 遍历器对象的 return()，throw()

遍历器对象除了具有`next()`方法，还可以具有`return()`方法和`throw()`方法。如果你自己写遍历器对象生成函数，那么`next()`方法是必须部署的，`return()`方法和`throw()`方法是否部署是可选的。

`return()`方法的使用场合是，如果`for...of`循环提前退出（通常是因为出错，或者有`break`语句），就会调用`return()`方法。如果一个对象在完成遍历前，需要清理或释放资源，就可以部署`return()`方法。

注意，`return()`方法必须返回一个对象，这是 Generator 语法决定的。

`throw()`方法主要是配合 Generator 函数使用，一般的遍历器对象用不到这个方法。