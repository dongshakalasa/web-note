# 对象

## 什么是对象？

​		js中的对象也可以看成是一个变量，但这个变量中可以继续包含变量，并把里面的变量称为属性，通常属性和对应属性的值是以键值对（key:value)的形式显示的。此外，对象中可以放入函数，放在对象中的函数也可以叫做方法。js中几乎所有事物都被看成是对象，但注意基本数据类型并非对象。

## 如何创建对象

### 1、使用字面量创建

```js
var person1 = {} //创建一个空对象
var person = {
	name:"张三",
	age:30,
	gender:'male',
	sayName:function(){
		console.log("my name is ",this.name);
	}
};
```

### 2、使用new Object()创建

```js
var person = new Object()
```

### 3、使用构造函数创建对象

```js
//创建
function 构造函数名(属性值) {
    this.属性 = 属性值;
    this.方法 = function () {
    }
}
//调用
new 构造函数名();
```

注意：

- 构造函数首字母必须大写
- 构造函数不需要return就可以返回结果
- 我们调用构造函数 必须使用 new
- 只要new 构造函数就创建一个对象
- 构造函数是泛指的某一大类（class），类似于Java语言里面的类；对象特指一个具体的事物
- 利用构造函数创建对象的过程是对象实例化
- 当构造函数遇到 new 时，首先，它会在我们内存中创建了一个空的对象；其次，this就会指向刚才创建的空对象；然后，开始执行构造函数里面的代码，给这个空对象添加属性和方法；最后，返回这个对象。

### 4、使用Object.create(proto)

使用**`Object.create()`** 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）

```js
const person = {
                isHuman: false,
                printIntroduction: function () {
                    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
                }
            };

            const me = Object.create(person);
            console.log(me.isHuman); //false
            me.printIntroduction(); // My name is undefined. Am I human? false
```

## 如何访问对象

### 1、访问属性

- 对象.属性名

  点后面直接跟的是对象的属性，如果属性存在可以访问到，如果属性不存在，得到undefined。

```js
person.name 
```

- 对象["属性名"]

  中括号中放的是变量，中括号可以将该变量进行解析。并且变量要用双引号包起来。

### 2、访问方法

方法的访问主要是为了执行该对象中的方法，需要按照**函数调用的方式**去使用。

```js
对象.方法名 // 不执行方法
对象.方法名() //执行方法
```

```js
var name = '李四'
var person = {
    name:'张三',
    getName:function(){
        console.log(this.name);
    }
}
var getName = person.getName
getName() //window
person.getName() //person
```

## 对象常用方法

### 1、assign()

 Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

**语法**：Object.assign(target，... sources)

**target**：目标对象

**sources**：源对象

注：

- 源对象身上的所有属性名和属性值会被复制到目标对象
- 目标对象和源对象重复的属性名，前面相同属性名的属性值会被后边的覆盖掉

案例：

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
```

### 2、defineProperties()

在一个对象上定义一个(多个)新的属性或修改原有属性，修改的目标对象obj。

**语法**： Object.defineProperties (obj, props)

**obj**：在其上定义或修改属性的对象。

**props**：属性描述符

- configurable：可操作/删除，默认为 false
- enumerable：可枚举，默认为false
- writable：可修改，默认为false
- value：属性值。可以是任何有效的 JavaScript 值（数字，对象，函数等）。 默认为 undefined
- get：作为该属性的 getter 函数，如果没有 getter则为undefined。函数返回值将被用作属性的值。 默认为undefined
- set：作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。 默认为 undefined

```js
var obj={firstName:"zhang",lastName:'san'};
	
	var obj1=Object.defineProperties(obj,{fullName:{
		//设置内部属性相关特性
		//configurable:true,
		get:function(){
			return this.firstName+this.lastName;
		},set:function(data){
			str=data.split(" ")
			this.firstName=str[0];
			this.lastName=str[1];
		},
	}});
	
	obj.fullName="li si";
	console.log(obj.fullName); //lisi
	console.log(obj); //{firstName:'li',lastName:'san'}
  	console.log(obj===obj1);   // true
```

### 3、defineProperty()

直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

**语法**：Object.defineProperty(obj, prop, descriptor)

**obj**：在其上定义或修改属性的对象。

**prop**：要定义或修改的属性的名称或 Symbol 。

**descriptor**：属性描述符

- configurable：可操作/删除，默认为 false
- enumerable：可枚举，默认为false
- writable：可修改，默认为false
- value：属性值。可以是任何有效的 JavaScript 值（数字，对象，函数等）。 默认为 undefined
- get：作为该属性的 getter 函数，如果没有 getter则为undefined。函数返回值将被用作属性的值。 默认为undefined
- set：作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。 默认为 undefined