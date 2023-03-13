# 一、Set

## 1.简介

Set是ES6提供的新的数据结构，类似数组，但是Set的成员的值是唯一的，没有重复值。

- 类似数组
- 不包含重复的值

## 2.创建Set

（1）使用new关键字

```js
let s = new Set() //创建一个空集合

let ss = new Set()
```

（2）带参构造

**注**：如果想在创建的时候初始化实例，可以给Set构造函数传入一个可迭代对象

```js
const s = new Set(["val1", 1, true, {}, undefined, function fun() {}]);
```

## 3.属性

### 3.1、size属性

size 属性将会返回 Set 对象中（唯一的）元素的个数。

**例**：

```js
const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.size); // 3
```

## 4.方法

### 4.1、add()方法

add(): 添加元素

**例**：

```js
const s = new Set();
s.add(1).add(2).add(3);
Array.from(s); // [1, 2, 3]
```

### 4.2、has()方法

查询Set实例是否存在某元素(返回布尔值)：

**例**：

```js
const s = new Set();
s.add(1).add(2).add(3);
s.has(1); // true
```

### 4.3、delete()方法

 删除Set实例中某个元素(返回布尔值)：

**例**：

```js
const s = new Set();
s.add(1).add(2);
s.delete(1);
Array.from(s); // [2]
```

### 4.4、clear()方法

清空Set实例：

**例**：

```js
const s = new Set();
s.add(1).add(2).add(3);
Array.from(s); // [1, 2, 3]
s.clear();
Array.from(s); // []
```

### 4.5、entries()方法

返回Set对象的所有键值对;

**例**：

```js

//SetIterator {'a' => 'a', 'b' => 'b', 'c' => 'c', 'd' => 'd'}
console.log(arrs.entries()); 
```

### 4.6、key()方法

返回Set对象中所有元素的键名;

**例**：

```js
let arrs = new Set(['a', 'b', 'c', 'd'])
console.log(arrs.keys()); //SetIterator {'a', 'b', 'c', 'd'}
```

### 4.7、values()方法

返回Set对象中所有元素的值;

**例**：

```js
let arrs = new Set(['a', 'b', 'c', 'd'])
console.log(arrs.values()); //SetIterator {'a', 'b', 'c', 'd'}
```

### 4.8、forEach()

对 Set 对象中的每个值按插入顺序执行一次提供的函数。

**例**：

```js
let arrs = new Set(['a', 'b', 'c', 'd'])
arrs.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
// a a Set(4) {'a', 'b', 'c', 'd'}
// b b Set(4) { 'a', 'b', 'c', 'd' }
// c c Set(4) { 'a', 'b', 'c', 'd' }
// d d Set(4) { 'a', 'b', 'c', 'd' }
```



## 5.遍历

遍历对象：

```js
const set = new Set(['aa','bb','cc']);
```

### 5.1、通过keys()方法

```js
/ 获取所有key
for(let key of set.keys()) {
  console.log(key);
}
// "aa"
// "bb"
// "cc"
```

### 5.2、通过values()方法

```js
// 获取所有value
for(let val of set.values()) {
  console.log(val);
}
// "aa"
// "bb"
// "cc"
```

### 5.3、通过entries()方法

```js
// key and value
for(let item of set.entries()) {
  console.log(item);
}
// ["aa", "aa"]
// ["bb", "bb"]
// ["cc", "cc"]
```

### 5.4、通过forEach()方法

```js
set.forEach((key,val) => console.log(key + ": " + val))
// "aa: aa"
// "bb: bb"
// "cc: cc"
```

# 二、Map

## 1.简介

​		Map 是JavaScript中的数据结构，它允许存储【键，值】对，其中任何值都可以用作键或值；Map集合中的键和值可以是任何类型，并且如果使用集合中已存在的键将值添加到Map集合中，新值将替换旧值。

## 2.创建

（1）创建空对象

```js
const map1 = new Map()
console.log(map1); //Map(0)
```

（2）带参构造

```js
const map2 = new Map([['a',1],['b',2]])
console.log(map2); //Map(2) {'a' => 1, 'b' => 2};
```

## 3.属性

### 3.1、size属性

```js
const map1 = new Map();

map1.set('a', 'alpha');
map1.set('b', 'beta');
map1.set('g', 'gamma');

console.log(map1.size);
// Expected output: 3
```

## 4.方法

### 4.1、set()方法

​		为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对

**例**：

```js
const map2 = new Map([['a',1],['b',2]])
map2.set('c',3)
console.log(map2); // Map(3) {'a' => 1, 'b' => 2, 'c' => 3}
```

### 4.2、get()方法

​		从 Map 对象返回指定的元素。如果与所提供的键相关联的值是一个对象，那么你将获得该对象的引用，对该对象所做的任何更改都会有效地在 Map 对象中修改它。

**例**：

```js
 const map2 = new Map([['a',1],['b',2]])
 console.log(map2.get('a')); //1
```

### 4.3、has()方法

返回一个布尔值，指示具有指定键的元素是否存在

**例**：

```js
 const map2 = new Map([['a',1],['b',2]])
 console.log(map2.has('b')); // true
```

### 4.4、delete()方法

 用于移除 Map 对象中指定的元素

**例**：

```js
 const map2 = new Map([['a',1],['b',2]])
 map2.delete('a')
 console.log(map2); // Map(1) {'b' => 2}
```

### 4.5、clear()方法

移除 Map 对象中的所有元素。

**例**：

```js
 const map2 = new Map([['a',1],['b',2]])
 map2.clear()
 console.log(map2); // Map(0) {size: 0}
```

### 4.6、entries()方法

返回Set对象的所有键值对;

**例**：

```js
const map3 = new Map([['a', 1], ['b', 2]])
console.log(map3.entries()); // MapIterator {'a' => 1, 'b' => 2}
```

### 4.7、key()方法

 返回一个引用的迭代器对象。它包含按照顺序插入 Map 对象中每个元素的 key 值。

**例**：

```js
const map3 = new Map([['a', 1], ['b', 2]])
console.log(map3.keys()); // MapIterator {'a', 'b'}
```

### 4.8、values()方法

返回一个新的迭代器对象。它包含按顺序插入 Map 对象中每个元素的 value 值

**例**：

```js
const map3 = new Map([['a', 1], ['b', 2]])
console.log(map3.values()); //MapIterator {1, 2}
```

### 4.9、forEach()

按照插入顺序依次对 `Map` 中每个键/值对执行一次给定的函数。

**例**：

```js
const map3 = new Map([['a', 1], ['b', 2]])
map3.forEach((item,index,map)=>{
    console.log(item,index,map);
})
// 1 'a' Map(2) {'a' => 1, 'b' => 2}
// 2 'b' Map(2) {'a' => 1, 'b' => 2}
```

## 5.遍历

## 1.forEach()

```js
map.forEach(function(value, key) {
  console.log(key, value);
})
```

## 2.for...of循环

```js
let keys = map.keys();
for (key of keys) {
  console.log(key);  // map.get(key)可得value值。
}

let values = map.values();
for (value of values) {
  console.log(value);
}

let entries = map.entries();
for ([key, value] of entries) {
  console.log(key, value);
}
```

## 3.Map Iterator对象的next()方法遍历

```js
let keys = map.keys();
for (i = 0; i < map.size; i++) {
  let key = keys.next().value;       // obj.propertyName
  // key = keys.next()[value];   // obj[propertyName]
  console.log(key);
}

let values = map.values();
for (i = 0; i < map.size; i++) {
  let value = values.next().value;
  console.log(value);
}

let entries = map.entries();
for (i = 0; i < map.size; i++) {
  let entry = entries.next().value;
  console.log(entry[0], entry[1]);
}
```

# 三、WeakSet

## 1.特点

1. WeakSet也是一个构造函数，可以用new来创建WeakSet数据结构，同时WeakSet可以接收一个值为对象的数组（或者具有 iterable 接口的其他数据结构）作为参数用来初始化WeakSet
2. WeakSet的值必须都是对象并且WeakSet是不可遍历的
3. WeakSet没有size属性，不能被遍历
4. WeakSet中的值也是不能重复的，跟Set一样WeakSet中两个对象永远是不相等的，即使键和值都是一样的
5. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

## 2.方法

​		WeakSet 跟Set不同，它只提供了3个方法，因为WeakSet是不能[遍历](https://so.csdn.net/so/search?q=遍历&spm=1001.2101.3001.7020)的因此对于Set中所有遍历的方法在WeakSet中都是不存在的。

- add(value)向 WeakSet 实例添加一个新成员，value必须是对象类型否则会报错，返回值也是一个WeakSet的实例
- delete(value)删除WeakSet中指定的成员，返回值为布尔类型，标识是否删除成功。
- has(value)检测WeakSet中是否存在指定的成员，返回值为布尔类型，标识成员是否存在。

# 四、WeakMap

## 1.特点

1. WeakMap只接受对象作为key，如果设置其他类型的数据作为key，会报错。
2. WeakMap的值必须都是对象并且WeakSet是不可遍历的
3. WeakMap没有size属性，不能被遍历
4. WeakMap和Map一样键是不能重复的
5. WeakMap的key所引用的对象都是弱引用，只要对象的其他引用被删除，[垃圾回收机制](https://so.csdn.net/so/search?q=垃圾回收机制&spm=1001.2101.3001.7020)就会释放该对象占用的内存，从而避免内存泄漏

## 2.方法

​		WeakMap跟Map不同，它只提供了4个方法，因为WeakMap是不能遍历的因此对于Map中所有遍历的方法在WeakMap中都是不存在的。

- set(key,value)向 WeakMap实例添加一个新成员，key必须是对象类型否则会报错，返回值也是一个WeakMap的实例
- get(key)返回WeakMap指定的对象
- delete(key)删除WeakMap中指定的成员，返回值为布尔类型，标识是否删除成功。
- has(key)检测WeakMap中是否存在指定的成员，返回值为布尔类型，标识成员是否存在。

# 五、数据转换

## 1.Map 转为数组

Map 转为数组最方便的方法，就是使用扩展运算符（`...`）。

```js
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
```

## 2.数组 转为 Map

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

## 3.Map 转为对象

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

## 4.对象转为 Map

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

## 5.JSON 转为 Map

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