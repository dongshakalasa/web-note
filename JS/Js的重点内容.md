# 一、Js的类型判断

## 1、Js的类型

Js的基本类型共有七种：

- bigInt
- number
- string
- boolean
- symbol
- undefined
- null

复杂数据类型

- Object（包括所有的对象）
- Function（函数）
- Array（数组）
- 内置对象（Date等）

## 2、判断Js类型的方法

### 方法一、typeof方法

基本数据类型除null外都返回对应的字符串

```js
typeof 1 // "number"
typeof 'a' // "string"
typeof true // "boolean"
typeof undefined // "undefined"
typeof Symbol // "symbol"
typeof 53n // "bigint"
```

注：判断一个变量是否被声明可以用（typeof 变量 === "undefined"）来判断

null返回"object"

```js
typeof null // "object"
```

除了函数返回"function"其他的均返回"object"

```js
typeof({a:1}) // "object"
typeof[1,3] // "object"
typeof(new Date) // "object"
```

函数返回"function"

```js
typeof function(){} // "function"
```

### 方法二、instanceof运算符

obj instanceof Object，可以左边放你要判断的内容，右边放类型来进行JS类型判断，只能用来判断复杂数据类型，因为instanceof是用于检测构造函数（右边）的prototype属性是否出现在某个实例对象（左边）的原型链上

```js
[1,2] instanceof Array  // true
(function(){}) instanceof Function // true
({a:1}) instanceof Object // true
(new Date) instanceof Date // true
```

### 方法三、object.property.toString.call方法

基本数据类型都能返回相应的类型。

```
Object.prototype.toString.call(999) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(Symbol()) // "[object Symbol]"
Object.prototype.toString.call(42n) // "[object BigInt]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(true) // "[object Boolean]
```

复杂数据类型也能返回相应的类型

```
Object.prototype.toString.call({a:1}) // “[object Object]”
Object.prototype.toString.call([1,2]) // “[object Array]”
Object.prototype.toString.call(new Date) // “[object Date]”
Object.prototype.toString.call(function(){}) // “[object Function]”
```

这个方法可以返回内置类型

# 二、Set和Map数据结构

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

# 三、Iterator和for-of循环

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

# 四、Js垃圾回收机制

## 程序中的垃圾是什么？

垃圾对于普通人而言就是没有用的、不需要的东西。对于程序而言，就是当一个变量没有被其他变量或属性引用的时候，该变量就是程序中的垃圾了。那变量又分局部变量和全局变量，它们的生命周期是不同的，释放内存（垃圾回收）的判断也是不同的。

## 变量的生命周期

- ​	全局变量
  - 描述：定义在所有函数之外的变量
  - 生命周期：会持续到浏览器关闭
- 局部变量
  - 描述：定义在某个函数中的变量
  - 声明周期：函数执行结束后，此时释放它们的内存（垃圾回收）

## 垃圾回收的原理

执行环境会找出那些不再继续使用的变量，然后释放其占用的内存。

## js垃圾回收的两种常用方法

垃圾回收并不是实时的，因为开销比较大，所以[垃圾回收器](https://so.csdn.net/so/search?q=垃圾回收器&spm=1001.2101.3001.7020)会周期性的释放程序中已经不在被引用的垃圾对象。那如何判断哪些被引用了，哪些不再被引用？通常会使用以下两种方法来进行判断。

### 1、标记清除法

这是目前浏览器大多基于标记清除法。我们可以分为两个阶段：

- **标记**：从根节点遍历为每个可以访问到的对象都打上一个标记，表示该对象可达。
- **清除**：在没有可用分块时，对堆内存遍历，若没有被标记为可达对象就将其回收。

**优点**：实现简单

**缺点**：

- 内存过于碎片化
- 内存分配速度慢

**解决方法**：标记-整理法（标记整理法和标记清除法标记阶段一致，只是整理阶段是先将被引用的对象移动到一端，然后清理掉标记的内存。）

### 2、引用计数法

引用计数法就是追踪每个变量被引用的次数，当引用数为0将可以被回收掉。

**优点**：当引用数为0时会被立即回收

**缺点**：

- 计数器的增减处理频繁，会导致空间的使用效率降低。
- 循环引用无法收回，导致内存泄漏。

**例如**

若有一函数Person中a引用了b，b引用了a。每次调用函数Person，它们的引用计数都不为0，则永远不能被回收。

```js
function Person(){
	let a={};
	let b={};
	a.prop = b;
	b.prop = a;
}
```

## 关于Chrome V8引擎的GC

### 1、分代式垃圾回收机制

v8中将内存分成了两个区，新生代和老生代。新生代对象存活时间较短，内存通常支持1~8MB。而老生代存储存活时间较长或常驻内存的对象。对于新老两块内存区域的垃圾回收频率不同，所以V8 采用了两个垃圾回收器来管控。

**新生区**：大多数对象被分配在这里。新生区是一个很小的区域，垃圾回收在这个区域非常频繁，与其他区域相独立。
**老生指针区**：包含大多数可能存在指向其他对象的指针的对象。大多数在新生区存活一段时间之后的对象都会被挪到这里。
**老生数据区**：存放只包含原始数据的对象（这些对象没有指向其他对象的指针）。字符串、封箱的数字以及未封箱的双精度数字数组，在新生区存活一段时间后会被移动到这里。
**大对象区**：这里存放体积超越其他区大小的对象。每个对象有自己mmap产生的内存。垃圾回收器从不移动大对象。
**代码区**：代码对象，也就是包含JIT之后指令的对象，会被分配到这里。这是唯一拥有执行权限的内存区（不过如果代码对象因过大而放在大对象区，则该大对象所对应的内存也是可执行的。译注：但是大对象内存区本身不是可执行的内存区）。
**Cell区、属性Cell区、Map区**：这些区域存放Cell、属性Cell和Map，每个区域因为都是存放相同大小的元素，因此内存结构很简单。

### 2、 新生代垃圾回收

新生代垃圾回收通过Scavenge策略进行垃圾回收，在具体实现中，主要采用了一种复制式的方法Cheney算法。Cheney算法将堆内存也分为两个区，一个使用状态的空间我们称为使用区。一个处于闲置状态的空间称为空闲区。新加入的对象都会被存放到使用区，当使用区快被写满时，就执行一次垃圾回收操作。

#### （1）垃圾回收流程

- 先对使用区中的活动做标记
- 标记完成后，将使用区的活动对象复制进空闲区并进行排序
- 将原先使用区对象占用的空间释放
- 最后进行角色互换，把空闲区变为使用区，使用区变为空闲区

#### （2）新生代对象何时会到老生代？

- 经过多次复制后依然存活的对象会被认为是生命周期较强的对象，会被移到老生代管理。
- 第二种情况：如果复制一个对象到空闲区时，空闲区空间占用超过25%，那么这个对象将被移到老生代区域。原因是，当完成Scavenge回收后，空闲区转变成使用区，需继续进行内存分配，若占比过大，将会影响后续内存的分配。

#### （3）并行回收

Javascript是一门单线程语言，它是运行在主线程上的，而在进行垃圾回收的时候就会阻塞Javascript脚本的执行，需等待垃圾回收完毕后再恢复脚本执行，这种行为叫全停顿。那当GC时间过长就会造成页面卡顿问题。那一个人干活慢，n个人一起速度便会是一个人的n倍。程序也一样，我们可以通过引入多个辅助线程来同时处理。因此V8引入了并行回收机制。
新生代对象空间就采用并行策略。在垃圾回收过程中，启动多个线程来负责新生代中的垃圾清理，这些线程同时将对象空间中的数据移到空闲区。由于这个过程中数据地址会发生改变，所以还需要同步更新引用这些对象的指针。

### 2、老生代垃圾回收

老生代数据大多是存活的对象，不需要时常清除更新，所以采用上面提到的标记清除法来进行垃圾回收。因为上面也提到标记清除后会产生大量内存碎片，所以V8就采用了上文所说的**标记整理法**来解决这个问题。

#### （1）增量标记

​		并行策略虽然可以增加垃圾回收的效率，对于新生代这样存放较小对象的回收器能有很好的优化，但其实还是全停顿式的。对于存放较大对象的老生代来说，这些较大对象GC时哪怕使用并行策略依旧会消耗大量时间。所以V8对老生代进行了优化，从全停顿标记切换到了增量标记。

​		**增量标记**：就是将一次GC分成多步小GC标记，让JS和小GC标记交替执行，直到标记完成。
问题来了，小GC标记执行完后是如何暂停执行JS任务，而后又是如何进行下一次小GC 标记？如果执行JS任务时刚被标记好的对象引用又被修改了该当如何？V8解决这两个问题的方法分别是三色标记法和写屏障。

##### 1）解决问题一：三色标记法

​		标记清理法区分是通过非黑即白的策略，但这样便会出现在增量标记时，内存中黑白都有，我们无法区分下一步是什么？所以采用了三色标记法，使用每个对象的两个标记位和一个标记工作表来实现标记，两个标记位编码三种颜色：黑（11），白（00），灰（10）。

- 黑色表示对象自身及对象的引用都被标记（已检查状态）
- 白色表示未被标记的对象（初始状态）
- 灰色表示自身被标记，自身的引用未被标记（待检查状态）

**执行流程如下：**

- 初始将所有对象都是白色
- 从root对象开始，先将root对象标记为灰色并推入标记工作表中
- 当收集器从标记工作表中弹出对象并访问他的所有引用对象时，自身灰色就会变成黑色。
- 将自身的下一个引用对象标记为灰色
- 一直这样执行下去，直到没有可以被标记为灰色的对象时，剩下的白色对象都是不可达的，进入清理阶段。恢复时从灰色标记对象开始执行。

##### 2）解决问题二：写屏障

为了解决黑色对象在程序执行中被新添加引用或已经标记黑色的被引用对象不再被引用了。写屏障就有了以下两个变化：

- 不对已标记的黑色对象做处理，因为在之后的GC中也会被清理。
- Write-barrier 机制强制不变黑的对象指向白色对象。这个也被称作强三色不变性。所以一旦有黑色对象引用白色对象，该机制会强制将引用的白色对象改为灰色，从而保证下一次增量 GC 标记阶段可以正确标记。

#### （2）懒性清理

增量标记完后，如果当前内存足以支持代码的快速运行，也没必要立即清理，可让程序先运行，也无需一次性清理完所有垃圾对象，可以按需清理直到所有垃圾对象清理完后再继续增量标记。

##### 并发回收

​		并发主要发生在工作线程上。当在工作线程（辅助线程）执行GC是，应用程序可以继续在主线程运行并不会被挂起。

​		这也是有问题的，因为GC也在进行，应用程序也在执行，此时对象的引用关系随时都有可能变化，所以之前做的一些标记就需要改变，所以需要**读写锁机制**来控制这一点。

# 参考博文

原文链接：https://blog.csdn.net/qq_42543177/article/details/124644363