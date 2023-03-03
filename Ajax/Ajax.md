# 一、服务器的基本概念与初识Ajax

## 1、客户机和服务器

### 1.1 上网的目的

​	上网的本质目的：通过互联网的形式来获取和消费资源

### 1.2 服务器

上网过程中，负责存放和对外提供资源的电脑，叫服务器

### 1.3 客户端

上网过程中，负责获取和消费资源的电脑，叫客户端

## 2、URL地址的概念

### 2.1 URL地址概念

URL（全程是UniformResourceLocator）中文叫统一资源定位符，用于标识互联网上每个资源的唯一存放位置。浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源。

### 2.3 URL地址的组成部分

URL地址一般由三部分组成：

- 客户端和服务器之间的通信协议
- 存有该资源的服务器名称
- 资源在服务器上的具体位置

```js
http://www.baidu.com/abc/p/1.html
协议： http
服务器名称：www.baidu.com
资源在服务器中的具体位置：abc/p/1.html
```

## 3 、客户端与服务器的通信过程

### 3.1 客户端与服务器的通信过程

- 客户端请求服务器
- 服务器处理这次请求
- 服务器响应客户端

注意：

- 客户端与服务器之间的通信过程，分为请求-处理-响应三个步骤
- 网页中每一个资源，都是通过请求-处理-响应的方式从服务器获取回来的

## 4、服务器对外提供了哪些资源

数据也是资源

数据是网页的灵魂

### 4.1 网页中如何请求数据

如果要在网页中请求服务器上的数据资源，则需要用到XMLHttpRequest对象

XMLHttpRequest（简称 xhr）是浏览器提供的js成员，通过它，可以请求服务器上的数据资源

```js
最简单的用法 var xhrObj = new XMLHttpRequest();
```

### 4.2 资源的请求方式

客户端请求服务器时，请求的方式有很多种，最常见的两种请求方式分别为get和post请求

- get请求通常用于获取服务端资源（向服务器要资源）

  例如：根据URL地址，从服务器获取HTMl文件、css文件、js文件、图片文件、数据资源等。 

## 5、了解Ajax

### 5.1 什么是Ajax

Ajax的全称是Asynchronous JavaScript And XML（异步的JavaScript和XML）

通俗的理解：在网页中利用XMLHttpRequest对象和服务器进行数据交互的方式，就是Ajax

### 5.2 为什么要学Ajax

实现网页和服务器之间的数据交互

## 6、jQuery中的Ajax

### 6.1 了解jQuery中的Ajax

jQuery中发起Ajax请求最常用的三种方法如下：

- $.get()
- $.post()
- $.ajax()

### 6.2 $.get()函数的语法

jQuery中$.get()函数的功能单一，专门用来发起get请求，从而将服务器上的资源请求到客户端来进行使用。

$.get()函数的语法如下：

```
$.get(url,[data],[callback]);
```

| 参数名   | 参数类型 | 是否必选 | 说明                     |
| -------- | -------- | -------- | ------------------------ |
| url      | string   | 是       | 要请求的资源地址         |
| data     | object   | 否       | 请求资源期间要携带的参数 |
| callback | function | 否       | 请求成功时的回调函数     |

###  6.3 $.post()函数的语法

jQuery中的$.post()的功能单一，专门用来发起post请求，从而向服务器提交数据

$.post()函数的语法如下：

```js
$.post(url,[data],[callback]);
```

| 参数名   | 参数类型 | 是否必选 | 说明                     |
| -------- | -------- | -------- | ------------------------ |
| url      | string   | 是       | 提交数据的地址           |
| data     | object   | 否       | 提交的数据               |
| callback | function | 否       | 数据提交成功后的回调函数 |

###  6.4 $.ajax函数的语法

相对于$.get()和$.post()函数，jQuery中提供的$.ajax()函数，是一个功能比较综合的函数，它允许我们对Ajax请求进行更详细的配置

$.ajax()函数的基本语法如下：

```
$.ajax({
	type: '',  		//请求方式	例如GET OR POST
	url: '',		//请求的URL地址
	data: { },		//这次请求要携带的数据
	success: function(res) { } // 请求成功之后的回调函数
})
```

## 7、接口

### 7.1 接口的概念

使用Ajax请求数据时，被请求的URL地址，就叫做数据接口(简称接口)，同时，每个接口必须有请求方式

### 7.2 接口文档

#### 7.2.1 接口文档

接口文档，顾名思义就是接口的说明文档，它是我们调用接口的依据。好的接口文档包含了对接口URL，参数以及输出内容的说明，我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用。

#### 7.2.2 接口文档的组成部分

接口文档可以包含很多信息，也可以按需求进行精简，不过，一个合格的接口文档，应该包含一下6项的内容，从而为接口的调用提供依据：

1、接口名称

2、接口URL

3、调用方式

4、参数格式

5、响应格式

6、返回示例（可选）

# 二、form表单的与模板引擎

## 1、form表单的基本使用

### 1.1、什么是表单

表单在网页中主要负责数据采集功能。HTML中的<form>标签，就是用于采集用户输入的信息，并通过<form>标签的提交操作，把采集到的信息提交到服务器端进行处理

### 1.2、表单的组成部分 	

- 表单标签
- 表单域
- 表单按钮

### 1.3、<form>标签的属性



- action

  用来规定当提交表单时，向何处发送表单数据

  值是一个URL地址，这个URL地址专门负责接受表单提交过来的数据

  当<form>表单在未指定action属性值得情况下，action的默认值为当前页面的URL地址

- target

  target属性用来规定在何处打开action URL

  | 值        | 描述                           |
  | --------- | ------------------------------ |
  | _blank    | 在新窗口中打开                 |
  | self      | 默认。在相同的框架中打开       |
  | _parent   | 在父框架集中打开。（很少用）   |
  | _top      | 在整个窗口中打开。（很少用）   |
  | framename | 在指定的框架中打开。（很少用） |

- method

  method属性用来规定以何种方式把表单数据提交到action URL。

  可选值有两个，分别是get和post。

  默认是get

- enctype

  enctype属性用来规定在发送表单数据之前如何对数据进行编码

  | 值                                | 描述                                                     |
  | --------------------------------- | -------------------------------------------------------- |
  | application/x-www.form-urlencoded | 在发送前编码所有字符（默认）                             |
  | multipart/form-data               | 不对字符编码。在使用包含文件上传控件的表单时，必须使该值 |
  | text/plain                        | 空格转换为“+”加号，但不对特殊字符编码(很少用)            |

### 1.4、表单的同步提交及缺点

#### 1、什么是表单的同步提交

通过点击submit按钮，触发表单提交的操作，从而使页面跳转到action URL的行为，叫做表单的同步提交

#### 2、表单同步提交的缺点

1. 表单同步提交后，整个页面会发生跳转，跳转到action URL所指向的地址，用户体验很差
2. 表单提交后，页面之前的状态和数据会丢失

#### 3、解决方案

表单只负责采集数据，Ajax负责将数据提交到服务器

## 2、通过Ajax提交表单数据

### 2.1、监听表单提交事件

在jQuery中，可以使用如下两种方式，监听到表单的提交事件

```js
$.('#form1').submit(function() {
	alert('监听到了表单的提交事件');
})

$.('#form1').on('submit',function() {
    alert('监听到了表单的提交事件');
})
```

### 2.2、阻止表单的默认提交行为

当监听到表单的提交事件以后，可以调用事件对象的event.preventDefault()函数，来阻止表单的提交和页面的跳转

```
$.('#form1').submit(function(e) {
	e.preventDefault();
})
```

### 2.3、快速获取表单中的数据

- serialize()函数

  为了简化表单中数据的获取操作，jQuery提供了serialize()函数，语法如下

  ```js
  $.(selector).serialize();
  serialize()函数的好处：可以一次性获取到表单中的所有数据。
  注意，使用serialize获取表单数据时，必须为每个表单元素添加name值 	
  ```

  ![image-20220601203124167](截图\image-20220601203124167.png)

### 2.4、重置表单

```js
$.('form1')[].reset();
把jQuery对象转换为doument对象,调用reset()函数
```

## 3、模板引擎的基本概念

### 3.1、渲染UI结构时遇到的问题

通过字符串拼接的形式，渲染UI结构，如果UI结构比较复杂，则拼接字符串的时候需要格外注意引号之间的嵌套。且一旦需求发生变化，修改也比较麻烦。

### 3.2、什么是模板引擎

模板引擎，顾名思义，它可以根据程序员指定的模板结构和数据，自动生成一个完整的HTML页面

### 3.3、模板引擎的好处

1. 减少了字符串的拼接操作
2. 使代码结构更清晰
3. 使代码更易于阅读与维护

## 4、art-template模板引擎

### 4.1、art-template的使用步骤

1. 导入art-template
2. 定义数据
3. 定义模板
4. 调用template函数
5. 渲染HMTL结构

### 4.2、art-template标准语法

1、什么是标准语法

art-template提供了{{}}这种语法格式，在{{}}内可以进行变量的输出，或循环数组等操作，{{}}语法就是art-template中的标准语法。

2、标准语法 - 输出

在{{}}语法中，可以进行变量的输出、对象的输出、三元表达式的输出、逻辑或输出、加减乘除等表达式的输出

```js
{{value}}
{{obj.key}}
{{a?b:c}}
{{a||b}}
{{a+b}}
```

3、标准语法-原文输出

如果要输出的value值，包含了HTML标签的结构，则需要使用原文输出语法，才能表征HTML标签正常渲染

```js
{{@ value}}
```

4、标准语法 - 条件输出

如果要实现条件输出，则可以在{{}}中使用if...else if .../if的方式，进行按需求输出。

```js
{{if value}} 按需求输出的内容 {{/if}}
{{if vl}} 按需求输出的内容 {{else if v2}} 按需求输出的内容 {{/if}}
```

5、标准语法 - 循环输出

如果要实现循环输出，则可以在{{}}内，通过each语法循环数组，当前循环的索引使用$index进行访问，当前循环项使用$value进行访问

```js
{{each arr}} 
{{$index}}{{$value}}
{{each}}
```

6、标准语法 - 过滤器

过滤器的本质，就是一个function处理函数

```js
{{value | filterName}
过滤器语法类似管道操作符，它的上一个输出作为下一个输入
```

定义过滤器的基本语法

```
template.defaults.imports.filterName = function(value){}
```

## 5、模板引擎的实现原理

### 5.1、正则与字符串操作

1、基本语法

exec()函数用于检索字符串的正则表达式的匹配

如果字符串中有匹配到的值，则返回该匹配值，否则返回null.

```js
RegExpObject.exec(string)

示例代码：
var str = 'hello'
var pattern = /o/
// 输出的结果["0",index: 4,input: "hello",groups: undefined]
```

2、分组

正则表达式中（）包起来的内容表示一个分组，可以通过分组来提取自己想要的内容 

3、字符串的replace函数

replace()函数用于在字符串中用一些字符替换另一些字符，语法格式		

```js
var result = '123456'.replace('123','abc')
```

4、字符串多次replace操作

```js
		var str = '<div>{{name}}今年{{age}}岁了<div>'
        var pattern = /{{([a-zA-Z]+)}}/
        console.log(pattern.exec(str));
运行结果如下：
```

![image-20220602095108301](H:\图片\image-20220602095108301.png)

```js
 示例
  		var str = '<div>{{name}}今年{{age}}岁了<div>'
        var pattern = /{{([a-zA-Z]+)}}/
        console.log(pattern.exec(str));

        var result = pattern.exec(str)
        var str = str.replace(result[0], result[1])
        var result = pattern.exec(str)
        var str = str.replace(result[0], result[1])
        console.log(str);
```

5、使用while循环replace

![image-20220602110257128](截图\image-20220602110257128.png)

6、replace替换为真值

![image-20220602113738465](截图\Ajax\image-20220602113738465.png)

# 三、Ajax加强

## 1、XMLHttpRequest的基本使用

### 1.1、什么XMLHttpRequest

XMLHttpRequest(简称xhr) 是浏览器提供的Javascript对象，通过它，可以请求服务器上的数据资源，之前所学的jQuery中的Ajax函数，就是基于xhr对象封装出来的

### 1.2、使用xhr发起GET请求

步骤

1. 创建xhr对象
2. 调用xhr.open()函数
3. 调用xhr.send()函数
4. 监听xhr.onreadystatechange事件

```
var xhr = new XMLHttpRequest()
xhr.open('GET','http://www.baidu.com')
xhr.send()
xhr.onreadystatechange = function() {
	if(xhr.readystat === 4 && xhr.status === 200) {
    	console.log(xhr.responseText)
	}
}
```

### 1.3了解xhr对象的readState属性

XMLHttpRequest对象的readState属性，用来表示当前Ajax请求所处的状态，每个Ajax请求必然处于以下状态中的一个：

| 值   | 状态    | 描述                                             |
| ---- | ------- | ------------------------------------------------ |
| 0    | UNSENT  | XMLHttpRequest对象已被创建，但尚未调用open方法   |
| 1    | OPENED  | open()方法已经被调用                             |
| 2    | HEADING | send()方法已经被调用，响应头也已经被接收         |
| 3    | LOADING | 数据接受中，此时response属性中已经包含部分数据   |
| 4    | DONE    | Ajax请求完成，这意味着数据传输已经彻底完成或失败 |

### 1.4使用xhr发送带参数的GET请求

使用xhr对象发送带参数的GET请求时，只需要在调用xhr.open期间，为URL地址参数后边拼接参数

```js
xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks?id=1')
```

这个在URL地址后面拼接的参数，叫做查询字符串

### 1.5、查询字符串

1、什么是查询字符串

定义：查询字符串（URL参数）是指在URL的末尾加上用于向服务器发送信息的字符串（变量）。

格式：将英文的？放在URL的末尾，然后在加上参数 = 值，想加上多个参数的话，使用&符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到URL中

### 1.6、URL编码与解码

1、什么是URL编码

URL地址中，只允许出现英文相关的字母、标点符号、数组，因此，在URL地址中不允许出现中文字符。

如果URL中需要包含中文这样的字符，则必须对中文字符进行编码（转义）。

URL编码的原则：使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。

URL编码原则的通俗理解：使用英文去表示非英文

2、如何对URL进行编码与解码

浏览器提供了URL编码与解码的API，分别是：

- encodeURL()编码的函数
- decodeURL()解码的函数

3、URL编码的注意事项

由于浏览器会自动对URL地址进行编码操作，因此，大多数情况下，程序员不需要关心URL地址的编码与解码操作。

### 1.7、使用xhr发起POST请求

1. 创建xhr对象
2. 调用xhr.open()函数
3. 设置Content-Type属性（固定写法）
4. 调用xhr.send()函数，同时指定要发送的数据
5. 监听xhr.onreadystatechange事件

```
1、创建xhr对象
var xhr = new XMLHttpRequest()
2、调用open()
xhr.open('GET','http://www.baidu.com')
3、设置Content-Type属性(属性)
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
4、调用send()，同时将数据以查询字符串的形式，提交给服务器
xhr.send('bookname=水浒传&author=施耐庵&publisher=天津图书出版社')
5、监听onreadystatechange事件
xhr.onreadystatechange = function() {
	if(xhr.readystat === 4 && xhr.status === 200) {
    	console.log(xhr.responseText)
	}
}
```

## 2、什么是数据交换格式

数据交换格式，就是服务器端与客户端之间进行数据传输与交换的格式

前端领域，经常提及的两种数据交换格式分别是XML和JSON。其中XML用的非常少。

### 2.2、XML

1、什么是XML

XML的英文全称是EXtensible Markup Language,即可扩展标记语言。因此，XML和HTMl类似，也是一种标记语言

2、XML和HTML的区别

XML和HTML虽然都是标记语言，但是，它们两者之间没有任何的关系

- HTML被设计用来描述网页上的内容，是网页内容的载体
- XML被设计用来传输和存储数据，是数据的载体

3、XML的缺点

1. XML格式臃肿，和数据无关的代码多，体积大，传输效率低
2. 在Javascript中解析XML比较麻烦

### 2.3、JSON

1、什么是JSON

概念：JSON的英文全称是JavaScript Object Notation，即“JavaScript对象表示法”。简单讲JSON就是JavaScript对象和数组的字符串表示法，它使用文本表示一个JS对象或数组的信息，因此JSON的本质就是字符串。

作用：JSON是一种轻量级的文本数据交换格式，在作用上类似于XML，专门用于存储和传输数据，但是JSON比XML更小，更快，更易解析。

现状：JSON是在2001年开始被推广和使用的数据格式，到现在为止，JSON已经成为了主流的数据交换格式。

2、JSON的两种结构

JSON就是用字符串表示JavaScript的对象和数组。所以，JSON中包含对象和数组的两种结构，通过两种结构的互相嵌套，可以表示各种复杂的数据结构。

- 对象结构：对象结构在JSON中表示{}括号起来的内容。数据结构为{key:value,key value,...}的键值对结构。其中，key必须是使用英文的双引号包裹的字符串，value的数据类型可以是数字、字符串、布尔值、null、数组、对象6种类型

- 数组结构：数组结构在JSON中表示为[]括起来的内容。数据结构为["java","javascript",30,true,...].数组中数据的类型可以是数字、字符串、布尔值、null、数组、对象6种类型。

3、JSON语法注意事项

1. 属性名必须使用双引号包裹
2. 字符串类型的值必须使用双引号包裹
3. JSON中不允许使用单引号表示字符串
4. JSON中不能写注释
5. JSON的最外层必须是对象或数组格式
6. 不能使用undefined或函数作为JSON值

JSON的作用：在计算机与网路之间存储和传输数据

JSON的本质：用字符串来表示Javascript对象数据或数组数据

4、JSON和JS对象的关系

JSON是JS对象的字符串表示法，它使用文本表示JS对象的信息，本质是一个字符串

```
//这是个对象
var obj = {a:'hello',b:'world'}
//这是一个JSON字符串，本质是一个字符串
var json = '{"a":"hello","b":"world"}'
```

5、JSON和JS对象的互转

要实现JSON字符串转换为JS对象，使用JSON.parse()方法：

```
var obj = JSON.parse('{"a":"hello","b":"world"}')
// 结果是 {a:'hello',b:'world'}
```

要实现从JS对象转化为JSON字符串，使用JSON.stringify()方法：

```
var obj = JSON.stringify({a:'hello',b:'world'})
// 结果是 '{"a":"hello","b":"world"}'
```

6、序列化和反序列化

把数据对象转换为字符串的过程，叫做序列化，例如：调用JOSN.stringify()函数的操作

把字符串转换为数据对象的过程，叫做反序列化，例如：调用JOSN.parse()函数的操作

## 3、封装自己的Ajax函数

### 3.1、定义options参数选项

自定义Ajax函数，它接收一个配置对象作为参数，配置对象中可以配置如下属性：

- method 请求类型
- url          请求的URL地址
- data       请求携带的数据
- success 请求成功之后的回调函数

### 3.2、处理data参数

需要把data对象，转化成查询字符串的格式，从而提交给服务器，因此提前定义resolveData函数

```
function resolveData(data) {
	var arr = []
	for(let k in data){
		arr.push(k + '=' + data[k])
	}
	return arr.join('&')
}
```

### 3.3、定义myAjax函数

```
function myAjax(options) {
	var xhr = new XMLHttpRequest()
	var qs = resolveData(options.data)
	xhr.onreadystattechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
		}
	}
}
```

判断请求的类型

不同的请求类型，对应xhr对象的不同操作，因此需要对请求类型进行if...else..判断

```
if(options.method.toUpperCase() === 'GET') {
	xhr.open(options.method,options.url + '?' + qs)
	xhr.send()
}else if(options.method.toUpperCase() === 'POST') {
	xhr.open(options.method,options.url)
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
	xhr.send(qs)
}
```

## 4、XMLHttpRequest Level2的新特性

### 4.1、认识XMLHttpRequest Level2

1、认识XMLHttpRequest的缺点

1. 只支持文本数据的传输，无法用来读取和上传文件
2. 传送和接收数据时，没有进度信息，只能提示有没有完成

2、XMLHttpRequest Level2的新功能

1. 可以设置HTTP请求的时限
2. 可以使用FormData对象管理表单数据
3. 可以上传文件
4. 可以获得数据传输的进度信息

### 4.2、设置HTTP请求时限

有时，Ajax操作很耗时，而且无法预知要花多少时间。如果网速很慢，用户可能要等很久。新版本的XMLHttpRequest对象，增加了timeout属性，可以设置HTTP请求的时限：

```js
xhr.timeout = 3000  //设置请求的最大时间
```

timeout事件，用来指定回调函数

```js
xhr.ontimeout = function(event) {
	alert('请求超时！')
}
```

### 4.3、FormData对象管理表单数据

Ajax操作往往用来提交表单数据。为了方便表单处理，HTML5新增了一个FormData对象，可以模拟表单操作：

```js
var fd = new FormData()
fd.append('uname','zs')
fd.append('upwd','123456')
var xhr = new XMLHttpRequest()
xhr.open('POST','http://www.liulongbin.top:3006/api/fornata')
xhr.send(fd)
```

FormData对象也可以用来获取网页表单的值，示例代码：

![image-20220603082722128](截图\image-20220603082722128.png)

### 4.4、上传文件

新版的XMLHttpRequest对象，不仅可以发送文本信息，还可以上传文件

实现步骤：

1. 定义UI结构
2. 验证是否选择了文件
3. 想FormData中追加文件
4. 使用xhr发起上传文件的请求
5. 监听onreadystatechange事件

①、定义UI结构

```js
<input type="file" id="file1">
<button id="btnUpload">上传文件</button>
```

②、验证是否选择文件

```js
var btnUpload = document.querySelector('#btnUpload')
        btnUpload.addEventListener('click', function() {
            var files = document.querySelector('#file1').files
            if (files.length <= 0) {
                return alert('请选择要上传的文件！')
            }
        })
```

③、向FormData中追加文件

```js
var fd = new FormData()
fd.append('avatar',files[0])
```

④、使用xhr发起上传文件的请求

```js
var xhr = new XMLHttpRequest()
xhr.open('POST','http://www.')
xhr.send(fd)
```

⑤监听onreadystatechange事件

![image-20220603085357647](截图\image-20220603085357647.png)

### 4.5、显示文件上传进度

新版本的XMLHttpRequest对象中，可以监听xhr.upload.onprogress事件，来获取到文件的上传进度。语法格式：

```js
var xhr = new XMLHttpRequest()
xhr.upload.onprogress = function() {
	if(e.lengthComputable) {
		var precentComplete = Math.ceil((e.loaded / e.total) *100) 
	}
}
```

## 5、jQuery高级用法

### 5.1、使用jQuery实现文件上传

1、定义UI结构

同上

2、验证是否选择了文件

```
$('#btnUpload').on('click',function() {
	var files = $('#file1')[0].files
	if(files.length <= 0) { 
		return alert('请选择图片后再上传！')
	}
})
```

3、向FormData中追加文件

![image-20220603111541323](截图\image-20220603111541323.png)

4、使用jQuery发送上传文件的请求

![image-20220603111627357](截图\image-20220603111627357.png)

### 5.2、jQuery实现loading效果

1、AjaxStart(callback)

Ajax请求开始时，执行ajaxStart函数。可以在ajaxStart的callback中显示loading效果，示例代码：

```
$(document).ajaxStart(function() {
	$('#loading').show()
})
注意：$(document).ajaxStart(函数会监听当前文档内所有Ajax请求 )
```

2、ajaxStop(callback)

Ajax请求结束时，执行ajaxStop函数。可以在ajaxStop的callback中隐藏loading效果，示例

```
$(document).ajaxStop(function() {
	$('loading').hide()
})
```

## 6、什么是axios

**Axios**是专注于**网络数据请求的库**。

相比于原生的XMLHttpRequest对象，axios简单易用

相比于jQuery，axios更加轻量化，只专注于网络数据请求。

### 6.2、axios发送GET请求

①、**axios发起get请求的语法：**

```js
axios.get('url',{ params: { /*参数*/ } }).then(callback)
```

具体请求示例：

![image-20220603113907586](截图\image-20220603113907586.png)

②、**axios发起post请求的语法：**

```js
axios.post(’url',{ /*参数*/ }.then(callback)
```

具体请求示例：

![image-20220603115108339](截图\image-20220603115108339.png)

③、**直接使用axios发送请求**

语法：![image-20220603115358926](截图\image-20220603115358926.png)

# 四、跨域和JSONP

## 1、了解同源策略和跨域

### 1.1、同源策略

①、**什么是同源**

如果这两个页面的**协议，域名，端口**都相同，则两个页面具有相同的源

例如，下表给出了相对于http://www.test.com/index.html页面的同源检测

![image-20220603135544886](截图\image-20220603135544886.png)

②、**什么是同源策略**

**同源策略**是浏览器提供的一个安全功能

MDN官方给定的概念：同源策略限制了从同一个源加载的文档或脚本如何与俩字另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制

通俗的理解：浏览器规定，A网站的JavaScript，不允许和非同源的网站C之间进行资源的交互

1. 无法读取非同源网页的Cookie、LocalStorage和IndexedDB
2. 无法接触非同源网页的DOM
3. 无法向非同源地址发送Ajax请求

### 1.2、跨域

①、**什么是跨域**

同源指的是两个URL的协议、域名、端口一致，反之，则是跨域

出现跨域的根本原因：浏览器的同源策略不允许非同源的URL之间进行资源的交互

②、**浏览器对跨域请求的拦截**

![image-20220603142014595](截图\image-20220603142014595.png)

③、**如何实现跨域数据请求**

现如今，实现跨域数据请求，最主要的两种解决方案，分别是JSONP和CORS

**JSONP**：出现的早，兼容性好（兼容低版本IE）。是前端程序员为了解决跨域问题，被迫想出来的一种临时解决方案。缺点是只支持GET请求，不支持POST请求。

**CORS**：出现的较晚，它是W3C标准，属于跨域AJax请求的根本解决方案。支持GET和POST请求。缺点是不兼容某些低版本的浏览器。

## 2、JSONP

### 2.1、什么是JSONP

**JSONP**是JSON的一种“使用模式”，可以解决主流浏览器的跨域访问的问题

### 2.2、JSONP的实现原理

由于浏览器同源策略的限制，网页中无法通过Ajax请求非同源的接口资源。但是<script>标签不受浏览器同源策略的影响，可以通过src属性，请求非同源的js脚本

因此，JSONP的实现原理，就是通过<script>标签的src属性，请求跨域的数据接口，并通过函数调用的形式，接受跨域端口响应回来的数据。

### 2.3、自己实现一个简单的JSONP

定义一个success回调函数：

```
<script>
	function success(data) {
		console.log('后渠道了data数据')
		console.log(data)
	}
</script>
```

通过<script>标签，请求接口数据：

```
<script src = "http://ajax.frontend.itheima.net:3006/api/jsonp?callback=success&name=zs&age=20"></script>
```

### 2.4、JSONP的缺点

由于JSONP是通过<script>标签的src属性，来实现跨域数据获取的所以，JSONP只支持GET数据请求，不支持POST请求。

注意：JSONP和Ajax之间没有任何关系，不能把JSONP请求数据的方式叫做Ajax，因为JSONP没有用到XMLHttpRequest这个对象。

### 2.5、jQuery中的JSONP

jQuery提供的$.ajax()函数，除了可以发起真正的Ajax数据请求之外，还能狗发起JSONP数据请求，例如：

```js
$.ajax({
	url: 'http://ajax'
	dataType: 'jsonp'
	success: function() {
		consloe.log(res)
	}
})
```

默认情况下，使用jQuery发起JSONP请求，会自动携带一个callback=jQueryxxx的参数，jQueryxxx是随机生成的一个回调函数名称。

### 2.6、自定义参数及回调函数名称

在使用jQuery发起JSON请求时，如果想要自定义JSONP的参数以及回到函数名称，可以通过如两个参数来指定：

![image-20220603161306865](截图\image-20220603161306865.png)

### 2.7、jQuery中JSONP的实现过程

jQuery中的JSONP，也是通过<script>标签的src属性来实现跨域数据访问的，只不过，jQuery采用的是动态创建和移除<script>标签的方式，来发起的JSONP数据请求。

- 在发起JSONP请求的时候，动态向<header>中append一个<script>标签
- 在JSONP请求成功以后，动态从<header>中移除刚才append进去的<script>标签

## 3、输入框的优化

### 3.1、输入框的防抖

①、**什么是防抖**

防抖策略（debounce）是当事件被触发后，延迟n秒后在执行回调函数，如果在这n秒内事件又被触发，则重新计时

②、**防抖的应用场景** 

用户在输入框中连续输入一串字符串时，可以通过防抖策略，只在输入完后，才执行查询的请求，这样就有效的减少了请求次数，节约资源；

③、**实现输入框的防抖**

![image-20220603185431936](截图\image-20220603185431936.png)

### 3.2、缓存搜索的建议列表

①、**定义全局缓存对象**

```js
var cacheObj = {}
```

②、**将搜索的结果保存到缓存对象中**

<img src="截图\image-20220603190805030.png" alt="image-20220603190805030" style="zoom:67%;" />

③、**把用户输入的数据当做键**，**获取的数据当做值存储在缓存对象中**

## 4、防抖和节流

### 4.1、什么是节流

**节流策略**（throttle)，顾名思义，可以减少一段时间内事件的触发频率，防止事件无限制的被触发

![image-20220603204805742](截图\Ajax\image-20220603204805742.png)

### 4.2、节流的应用场景

1. 鼠标连续不断地被触发事件（如点击），只在单位时间内制出发一次
2. 懒加载时要监听计算滚动条的位置，但不必每次滑动都触发，可以降低计算的频率，而不必去浪费CPU资源

### 4.3、节流阀的概念

①、**节流阀的案例**

高铁卫生间是否被占用，由红绿灯控制，红灯表示被占用，绿灯表示可使用。

假设每个人上卫生间都需要花费5分钟，则5分钟内，被占用的卫生间无法被其他人使用。

上一个人使用完毕后，需要将红灯重置为绿灯，表示下一个人可以使用卫生间。

下一个人在上卫生间之前，需要先判断控制灯是否为绿色，来知晓能否上卫生间。



总结：

节流阀为空，表示可以执行下次操作；不为空，表示不能执行下次操作。

当前操作执行完，必须将节流阀重置为空，表示可以执行下次操作了。

每次执行操作前，必须先判断节流阀是否为空。

②、**使用节流阀的示例**

![image-20220603210656223](截图\Ajax\image-20220603210656223.png)

### 4.4、总结防抖和节流的区别

- **防抖**：如果事件被频繁触发，防抖能保证只执行最后一次触发生效！前面的N多次触发会被忽略掉
- **节流**：如果事件被频繁触发，节流能够减少事件触发的频率，因此，节流是有选择地执行一部分事件

# 五、HTTP协议的加强

## 1、HTTP协议的简介

### 1,1、什么是通信

①、**现实生活中的通信**

案例：张三要把自己考上清华大学的好消息写信告诉自己的好朋友李四

其中：

通信的主体是张三和李四

通信的内容是考上清华大学

通信的方式是写信

②、**互联网中的通信**

案例：服务器要把北京大学的简介通过响应的方式发送给客户端浏览器

其中：

通信的主体是：服务器和客户端浏览器；

通信的内容是：北京大学的简介；

通信的方式是：响应；

### 1.2、什么是通信协议

**通信协议**：是指通信的双方完成通信所必须遵循的规则和约定

**通俗的理解**：通信双方采用约定好的格式来发送和接收信息，这种事先约定好的通信格式，就叫做通信协议

①、**现实生活中的通信协议**

张三和李四采用写信的方式进行通信，在填写信封时，写信的双方需要遵循固定的规则。信封填写规则就是一种通信协议。

②、**互联网中的通信协议**

客户端和服务器之间要实现网页内容的传输，则通信的双方必须遵循网页内容的传输协议。

网页内容又叫做超文本，因此网页内容的传输协议又叫做超文本传输协议（Hyper Transfer Protocol），简称HTTP协议。

### 1.3、HTTP

①、**什么是HTTP协议**

HTTP协议即超文本传输协议，它规定客户端和服务器之间进行网页内容传输时所必须遵守的传输格式。

例如：

- 客户端要以HTTP协议要求的格式把数据提交到服务器
- 服务器要以HTTP协议要求的格式把内容响应给客户端

②、**HTTP协议的交互模型**

HTTP协议采用了请求/响应的交互模型

![image-20220604073936149](截图\image-20220604073936149.png)

## 2、HTTP请求消息

### 2.1、什么是HTTP请求消息

由于**HTTP协议**属于**客户端浏览器**和**服务器**之间的通信协议。因此，**客户端发起的请求叫做HTTP请求**，**客户端发送到服务器的消息，叫做HTTP请求消息**

注意：HTTP请求消息又叫做HTTP请求报文

### 2.2、HTTP请求消息的组成部分 

HTTP请求消息由**请求行**、**请求头部**、**空行**和**请求体**4个部分组成

![image-20220604074433978](截图\image-20220604074433978.png)

①、**请求行**

请求行由请求方式、URL、HTTP协议版本3部分组成，他们之间使用空格隔开

![image-20220604074649702](截图\image-20220604074649702.png)

![image-20220604074719239](截图\image-20220604074719239.png)

②、**请求头部**

**请求头部**用来描述**客户端的基本信息**，从而**把客户端相关的信息告知服务器**。比如：**User-Agent**用来说明当前是什么类型的浏览器；**Content-Type**用来描述发送到服务器的数据格式；**Accept**用来描述客户端能够接收什么类型的返回内容；**Accept-Language**用来描述客户端期望接收那种人类语言的文本内容。

请求头部是由多行**键/值对**组成，每行的键和值之间用英文的冒号分割。

![image-20220604160040944](截图\image-20220604160040944.png)

常见的请求头字段

![image-20220604160325234](截图\image-20220604160325234.png)

![image-20220604160450371](截图\image-20220604160450371.png)

③、**空行**

最后一个请求头字段的后面是一个空行，通知服务器请求头部至此结束

请求消息中的空行，用来分隔请求头部与请求体

![image-20220604161514460](截图\image-20220604161514460.png)

④、**请求体**

请求体中存放的，是要通过POST方式提交到服务器的数据。

![image-20220604161637190](截图\image-20220604161637190.png)

**注意**：只有POST请求才有请求体，GET请求没有请求体 

## 3、HTTP响应消息

### 3.1、什么是HTTP响应消息

相应消息就是服务器响应给客户端的消息内容，也叫做**响应报文**。

### 3.2、HTTP响应消息的组成部分

HTTP响应消息由**状态行**、**响应头部**、**空行**和**响应体**4部分组成，如下图所示：

![image-20220604170705215](截图\image-20220604170705215.png)

①、**状态行**	

状态行由**HTT协议版本**、**状态码**和**状态码的描述文本**3各部分组成，他们之间使用空格隔开

![image-20220604171413981](截图\image-20220604171413981.png)

②、**响应头部**

**响应头部**用来描述**服务器的基本信息**。响应头部有多行**键/值对**组成，每行的键和值之间用英文冒号分隔。

关于更多响应头字段的描述，可以查看MDN官方文档：https://developer.mozilla.org/zh-CN/docs/Web/HTTP

③、**空行**

在最后一个响应头部字段结束之后，会紧跟一个**空行**，用来通知客户端**响应头部至此结束**。

相应消息中的空行，用来分隔响应头部和响应体。

![image-20220604173227052](截图\image-20220604173227052.png)

④、**响应体**

响应体中存放的，是服务器响应给客户端的资源内容

![image-20220604173347679](截图\image-20220604173347679.png)

## 4、HTTP请求方法

#### 4.1、什么是HTTP请求方法

**HTTP请求方法**，属于HTTP协议的一部分，请求方法的作用是：用来表示要对服务器上的资源执行的操作。最常用的请求方法是：**GET和POST**。

### 4.2、HTTP的请求方法

![image-20220604173928416]( 截图\image-20220604173928416.png)

## 5、HTTP响应状态代码

### 5.1、什么是HTTP响应状态码

**HTTP响应状态码**（HTTP Status Code），也属于HTTP协议的一部分，**用来标识响应的状态**。

响应状态码会随着相应消息一起被发送至客户端浏览器，浏览器根据服务器返回的响应状态码，就能知道这次HTTP请求的结果是成功还是失败了。

![image-20220604174749193](截图\image-20220604174749193.png)
