# 数组

## 什么是数组？

​		Array简称arr，数组是js中最常用的数据集合，引用类型之一，它的作用非常简单，就是用来装多个数据，数组的长度可以动态的调整，其内置有很多方法，熟练掌握这些方法，可以提高我们的工作效率和代码质量。

## 如何创建数组？

### 1、使用数字字面量表示法

```js
var arr4 = [];   //创建一个空数组
var arr5 = [20];   // 创建一个包含1项数据为20的数组
var arr6 = ["lily","lucy","Tom"];   // 创建一个包含3个字符串的数组
```

### 2、使用Array构造函数

#### 2.1、无参构造

```js
var arr1 = new Array();   //创建一个空数组
```

#### 2.2、带参构造

- 如果只传一个数值参数，则表示创建一个初始长度为指定数值的空数组

```js
var arr2 = new Array(n) // 创建一个长度为n的空数组 注：n为Number
```

- 如果传入一个非数值的参数或者参数个数大于 1，则表示创建一个包含指定元素的数组

```js
var arr3 = new Array('1','2','3')  //创建一个包含3个字符串的数组
var array4 = new Array('23'); // ["23"]
```

#### 2.3、Array.of 方法创建数组(es6 新增)

Array.of()方法总会创建一个包含所有传入参数的数组，而不管参数的数量与类型

```js
let arr = Array.of(1, 2);
console.log(arr.length);//2

let arr1 = Array.of(3);
console.log(arr1.length);//1
console.log(arr1[0]);//3

let arr2 = Array.of('2');
console.log(arr2.length);//1
console.log(arr2[0]);//'2'
```

#### 2.4、Array.from 方法创建数组(es6 新增)

在 js 中将**非数组对象转换为真正的数组**是非常麻烦的。在 ES6 中，将可迭代对象或者类数组对象作为第一个参数传入，Array.from()就能返回一个数组。

```js
function arga(...args) {  //...args剩余参数数组,由传递给函数的实际参数提供
    let arg = Array.from(args);
    console.log(arg);
}

arga('1', 2, '3'); // ['1','2','3']
```

- 映射转换

​		如果你想实行进一步的数组转换，你可以向 Array.from()方法传递一个映射用的函数作为第二个参数。此函数会将数组对象的每一个值转换为目标形式，并将其存储在目标数组的对应位置上。

```js
function arga(...args) {  
     return Array.from(args, value => value + 1);
}

let arr = arga('arr', 26, 'p');
console.log(arr);//['arr1',27,'p1']

```

​		如果映射函数需要在对象上工作，你可以手动传递第三个参数给 Array.from()方法，从而指定映射函数内部的 this 值

```js
const helper = {
  diff: 1,
  add(value) {
    return value + this.diff;
  }
}

function translate() {
 //arguments 是一个对应于传递给函数的参数的类数组对象
  return Array.from(arguments, helper.add, helper); 
}

let arr = translate('liu', 26, 'man');
console.log(arr); // ["liu1", 27, "man1"]
```

## 数组方法

### 1、数组原型方法

- **join()**：用指定的分隔符将数组每一项拼接为字符串 
- **push()** ：向数组的末尾添加新元素
- **pop()**：删除数组的最后一项
- **shift()**：删除数组的第一项
- **unshift()**：向数组首位添加新元素
- **slice()**：按照条件查找出其中的部分元素
- **splice()**：对数组进行增删改，**改变原数组**
- **fill()**: 方法能使用特定值填充数组中的一个或多个元素
- **filter()**:“过滤”功能，**不改变原数组**
- **concat()**：用于连接两个或多个数组，
- **indexOf()**：检测当前值在数组中第一次出现的位置索引
- **lastIndexOf()**：检测当前值在数组中最后一次出现的位置索引
- **every()**：判断数组中每一项都是否满足条件
- **some()**：判断数组中是否存在满足条件的项
- **includes()**：判断一个数组是否包含一个指定的值
- **sort()**：对数组的元素进行排序，**改变原数组**
- **reverse()**：对数组进行倒序，会**改变原数组**
- **forEach()**：ES5 及以下循环遍历数组每一项
- **map()**：ES6 循环遍历数组每一项
- **find()**：返回匹配的值
- **findIndex()**：返回匹配位置的索引
- **reduce()和reduceRight()**：实现迭代数组的所有项(即累加器)，然后构建一个最终返回的值。
- **toString()**：将数组转换为字符串
- **entries() 、keys() 、values()**：遍历数组
- **isArray()**：判断传入的值，是不是Array类型
- **flat()**：按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

### 2、各个方法详解

#### 2.1、join()

**join()**方法用于把数组中的所有元素转换一个字符串，元素是通过指定的分隔符进行分隔的。默认使用逗号作为分隔符，注：分割符是字符串型

```js
var arr = [1,2,3];
console.log(arr.join());   // 1,2,3
console.log(arr.join("-"));   // 1-2-3
console.log(arr);   // [1, 2, 3]（原数组不变）
```

#### 2.2、push()和pop()

**push()**方法**从数组末尾向数组添加元素**，可以添加一个或多个元素

**pop()**方法用于**删除数组的最后一个元素**并返回删除的元素。

```js
var arr = ["one","two","three"];
var count = arr.push("four","five");
console.log(count);  // 5
console.log(arr);   // ["one", "two", "three", "four", "five"]
var item = arr.pop();
console.log(item);   // 'five'
console.log(arr);   // ["one", "two", "three", "four"]
```

#### 2.3、shift()和unshift()

**shift()** 方法用于**把数组的第一个元素从其中删除**，并返回第一个元素的值。

**unshift()** 方法可**向数组的开头添加一个或更多元素**，并返回新的长度。

```js
var arr = ["one","two","three"];
var count = arr.unshift("four","five");
console.log(count);   // 5
console.log(arr);   //["one", "two", "three", "four", "five"]
var item = arr.shift();
console.log(item);   // 'five'
console.log(arr);   // ["one", "two", "three", "four"]

```

#### 2.4、sort()

sort() 方法用于对数组的元素进行排序。

默认排序顺序为字母或数字升序

```js
var arr1 = ["a", "d", "c", "b"];
console.log(arr1.sort());   // ["a", "b", "c", "d"]
arr2 = [13, 24, 51, 3];
console.log(arr2.sort());   // [13, 24, 3, 51]
console.log(arr2);   // [13, 24, 3, 51](元数组被改变)
```

sort()可以接收一个比较函数作为参数，从而设置排序规则

```js
function compare(value1, value2) {
    if (value1 < value2) {
    	return -1;
    } else if (value1 > value2) {
   		return 1;
    } else {
    	return 0;
    }
}
arr2 = [10, 20, 50, 0];
console.log(arr2.sort(compare));   // [0, 10, 20, 50]
```

#### 2.5、reverse()

**reverse()**用于颠倒数组中元素的顺序

```js
var arr = [13, 24, 51, 3];
console.log(arr.reverse());   //[3, 51, 24, 13]
console.log(arr);   //[3, 51, 24, 13](原数组改变)
```

#### 2.6、concat()

concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

```js
var a = [1,2,3];
a.concat(4, 5);         // 返回 [1,2,3,4,5]
a.concat([4,5]);        // 返回 [1,2,3,4,5]
a.concat([4,5], [6,5]); // 返回 [1,2,3,4,5,6,7]
a.concat(4, [5,[6,7]]); // 返回 [1,2,3,4,5,[6,7]]
console.log(a) //返回[1,2,3] 原数组未修改
```

#### 2.7、slice()

slice()：返回从原数组中指定开始下标到结束下标之间的项组成的新数组，不改变原数组。

slice()方法可以接受一或两个参数，即要返回项的起始和结束位置。

- **只有一个参数**的情况下， slice()方法返回从该参数指定位置开始到当前数组末尾的所有项
- **有两个参数**，该方法返回起始和结束位置之间的项，但不包括结束位置的项
- **当出现负数时，将负数加上数组长度的值（6）来替换该位置的数**

```js
var arr = [1,3,5,7,9,11];
var arrCopy = arr.slice(1);
var arrCopy2 = arr.slice(1,4);
var arrCopy3 = arr.slice(1,-2);//相当于arr.slice(1,4)
var arrCopy4 = arr.slice(-4,-1);//相当于arr.slice(2,5)
console.log(arr);   //[1, 3, 5, 7, 9, 11](原数组没变)
console.log(arrCopy);   //[3, 5, 7, 9, 11]
console.log(arrCopy2);   //[3, 5, 7]
console.log(arrCopy3);   //[3, 5, 7]
console.log(arrCopy4);   //[5, 7, 9]
```

#### 2.8、splice()

**splice()**：很强大的数组方法，它有很多种用法，可以**实现删除、插入和替换**。

- #### 删除元素,并返回删除的元素

​		可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。

```js
var arr = [1,3,5,7,9,11];
var arrRemoved = arr.splice(0,2);
console.log(arr);   //[5, 7, 9, 11]
console.log(arrRemoved);   //[1, 3]
```

- #### 向指定索引处添加元素

​		可以向指定位置插入任意数量的项，只需提供 3 个参数:起始位置、 0（要删除的项数）和要插入的项。

```js
var array1 = [22, 3, 31, 12];
array1.splice(1, 0, 12, 35);  //[]

console.log(array1); // [22, 12, 35, 3, 31, 12]
```

- #### 替换指定索引位置的元素

​		可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等

```js
const array1 = [22, 3, 31, 12];
array1.splice(1, 1, 8);   //[3]

console.log(array1);  // [22, 8, 31, 12]
```

#### 2.9、indexOf()和 lastIndexOf()

**接收两个参数**：要查找的项和（可选的）表示查找起点位置的索引。

**indexOf()**： 从数组的开头（位置 0）开始向后查找。

**lastIndexOf**： 从数组的末尾开始向前查找。

这两个方法都返回要查找的项在数组中的位置，或者在**没找到的情况下返回-1**。在比较第一个参数与数组中的每一项时，会**使用全等操作符**。

```js
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5));   //2
console.log(arr.lastIndexOf(5));   //5
console.log(arr.indexOf(5,2));   //2
console.log(arr.lastIndexOf(5,4));   //2
console.log(arr.indexOf("5"));   //-1
```

#### 2.10、forEach()

forEach 接受一个参数，这个参数应该是一个函数,在这个方法里面能调用数组的每个元素，并将元素传递给函数做运算，forEach函数接受的这个函数，它有三个参数：

- 第一个参数（**item必写**）是正在被访问的item特定元素（遍历的数组内容）
- 第二个参数（**index 选写**）是该元素的索引
- 第三个参数（**Arr 选写**）是数组本身（改变数组中的值会影响原数组）

```js
var arr1 = [11, 22, 33, 44, 55];
arr1.forEach(function(item, index, arr){
	console.log(item + '|' + index + '|' + (arr === arr1));
});
输出为：
 11|0|true
 22|1|true
 33|2|true
 44|3|true
 55|4|true
```

#### 2.11、map()

**map()** 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值（不改变原数组）。

**map()** 方法按照原始数组元素顺序依次处理元素。

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item,index,array){
	return item*item;
});
console.log(arr2);  //[1, 4, 9, 16, 25]
```

#### 2.12、filter()

filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组（不改变原数组）。

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter(function(x, index) {
	return index % 3 === 0 || x >= 8;
});
console.log(arr2);  //[1, 4, 7, 8, 9, 10]
```

#### 2.13、fill() es6新增

**fill()** 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
let arr = [3, 2, 3, 'cc', 5];
// 一个参数改变全部元素
arr.fill(1);
console.log(arr);//[1,1,1,1,1];
//两个参数：用来填充数组元素的值，起始索引（默认值为 0）。
arr.fill(1, 2);
console.log(arr);//[3,2,1,1,1]
//三个参数：用来填充数组元素的值，起始索引（默认值为 0），终止索引（默认值为 arr.length）
arr.fill(0, 1, 3);
console.log(arr);//[1,0,0,1,1];
```

#### 2.14、every()

**every()**：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true。

注意：若收到一个空数组，此方法在任何情况下都会返回 `true`。

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
	return x < 10;
});
console.log(arr2);  //true
var arr3 = arr.every(function(x) {
	return x < 3;
});
console.log(arr3);  // false
```

#### 2.15、some()

**some()**：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true

```js
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
	return x < 3;
});
console.log(arr2);  //true
var arr3 = arr.some(function(x) {
	return x < 1;
});
console.log(arr3);  // false
```

#### 2.16、includes()

**includes()** 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false。

**参数有两个**，其中第一个是（必填）需要查找的元素值，第二个是（可选）开始查找元素的位置

注意：includes**使用===运算符**来进行值比较，仅有一个例外：**NaN 被认为与自身相等**。

```js
const array1 = [22, 3, 31, 12, 'arr'];
const includes = array1.includes(31);
console.log(includes); // true

const includes1 = array1.includes(31, 3); // 从索引3开始查找31是否存在
console.log(includes1); // false
```

#### 2.17、reduce()和 reduceRight()

这两个方法都会实现迭代数组的所有项(即累加器)，然后构建一个最终返回的值。

**reduce()**方法从数组的第一项开始，逐个遍历到最后。

**reduceRight()**则从数组的最后一项开始，向前遍历到第一项。

**4 个参数**：前一个值、当前值、项的索引和数组对象

```js
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev, cur, index, array){
	return prev + cur;
},10);   //数组一开始加了一个初始值10,可以不设默认0
console.log(sum);  //25
```

#### 2.18、toString()

将数组转换为字符串

```js
const array1 = [22, 3, 31, 12];
const str = array1.toString();

console.log(str); // 22,3,31,12
```

#### 2.19、find()和findIndex()

find()与 findIndex()方法均接受两个参数：一个回调函数，一个可选值用于指定回调函数内部的 this。

该回调函数可接受三个参数：数组的某个元素，该元素对应的索引位置，以及该数组本身。

该回调函数应当在给定的元素满足你定义的条件时返回 true，而 find()和 findIndex()方法均会在回调函数**第一次返回 true 时停止查找**。

**二者的区别是**：find()方法返回匹配的值，而 findIndex()返回匹配位置的索引。

```js
let arr = [1, 2, 3, 'arr', 5, 1, 9];

console.log(arr.find((value, keys, arr) => {
    return value > 2;
})); // 3 返回匹配的值

console.log(arr.findIndex((value, keys, arr) => {
    return value > 2;
})); // 2 返回匹配位置的索引
```

#### 2.20、entries(),keys() 和 values() 【ES6】

entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历

区别是**keys()是对键名的遍历**、**values()是对键值的遍历**，**entries()是对键值对的遍历**

```js
for (let index of ['a', 'b'].keys()) {  
console.log(index);  
}  
// 0  
// 1  
for (let elem of ['a', 'b'].values()) {  
console.log(elem);  
}  
// 'a'  
// 'b'  
for (let [index, elem] of ['a', 'b'].entries()) {  
console.log(index, elem);  
} 
// 0 "a"  
// 1 "b" 
```

如果不使用for...of循环，可以手动调用遍历器对象的**next方法**，进行遍历。

```js
let letter = ['a', 'b', 'c'];  
let entries = letter.entries();  
console.log(entries.next().value); // [0, 'a']  
console.log(entries.next().value); // [1, 'b']  
console.log(entries.next().value); // [2, 'c'] 
```

#### 2.21、flat()

将嵌套的数组“拉平”，变成一维数组。该方法返回一个新数组，对原数据没有影响。

格式：

```js
flat()
flat(depth)
```

参数depth:

- 指定要提取嵌套数组的结构深度，默认值为 1。
- Infinity关键字表示不管有多少层嵌套都要转成一维数组

## 数组的遍历

### 1、循环遍历

```js
for(var i = 0; i<arr.length; i++) {

	arr是要遍历的数组，arr[i]是遍历的元素，i是数组的元素对应的下标（索引号）

}
```

### 2、for of方法

```js
for(var item of arr) {

	item 遍历的数组元素

}
```

### 3、forEach遍历

```js
arrObj.forEach(function(item,index,self){
    item 遍历出的每一个元素
    index 元素对应的下标
    self 数组本身
    无返回值
})
```

### 4、map映射

```js
arrObj.map(function(item,index,self){
    item 遍历出的每一个元素
    index 元素对应的下标
    self 数组本身
    有返回值
    数组元素个数，但按照一定的条件转换
})
```

### 5、fillter过滤

```js
arrObj.filter(function(item,index,self){
    item 遍历出的每一个元素
    index 元素对应的下标
    self 数组本身
    有返回值
    返回满足某个条件的元素构成的数组
})
```

### 6、reduce高阶函数（迭代（累加器））

```js
arrObj.reduce(function(total,item,index,self){
    total 初始值或计算结束后的返回值
    item 遍历出的每一个元素
    index 元素对应的下标
    self 数组本身
    有返回值
    返回计算结束后的total值
}，初始值)
```

### 7、every

```js
arrObj.every(function(item,index,self){
    item 遍历出的每一个元素
    index 元素对应的下标
    self 数组本身
    有返回值
    检测数组里的每一个值是否满足指定条件，如果有一个值不满足，返回false，剩余的值不再进行检测
    如果所有的值都满足，则返回true
})
```

### 8、some

```js
arrObj.some(function(item,index,self){
    item 遍历出的每一个元素
    index 元素对应的下标
    self 数组本身
    有返回值
 	检测数组里的每一个值是否满足指定条件，如果有一个值满足，返回true，剩余的值不再进行检测
    如果所有的值都不满足，则返回false
})
```

