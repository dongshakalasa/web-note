# 1 Ajax 概述

## 1.1 什么是 Ajax

AJAX 全称：Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。

通俗理解：在网页中利用 XMLHttpRequest 对象和服务器进行数据交互的方式，就是 Ajax。

通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

## 1.2 jQuery 中的 Ajax

浏览器中提供的 XMLHttpRequest 用法比较复杂，所以 jQuery 对 XMLHttprequest 进行了封装，提供了一系列 Ajax 相关的函数，极大地降低了 Ajax 的使用难度。

jQuery 详解：[ jQuery 学习笔记（超详细）](https://blog.csdn.net/Y2ANGAO/article/details/124200974)

在 jQuery 中发起 Ajax 请求最常用的三种方式：

① $.get()

- 语法规范

```javascript
$.get(url, [data], [callback], [type])
```

- 参数含义

  - `url`:待载入页面的URL地址

  - `data`:待发送 key/value 参数。

  - `callback`:载入成功时回调函数。

  - `type`:返回内容格式，xml, html, script, json, text, _default。

- 示例

```javascript
// 不带参数的请求
$.get('请求的 url 地址', function(res) {
    console.log(res) // res 是服务器返回的数据
})
// 带参数的请求
$.get('请求的 url 地址', { key: value }, function(res) {
    console.log(res) // res 是服务器返回的数据
})
```

② $.post()

- 语法规范

```javascript
$.post(url, [data], [callback], [type])
```

- 参数含义

  - `url`:发送请求地址。

  - `data`:待发送 Key/value 参数。

  - `callback`:发送成功时回调函数。

  - `type`:返回内容格式，xml, html, script, json, text, _default。

- 示例

```javascript
$.post(
    '请求的 url 地址',
    { key: value },
    function(res) {
    	console.log(res) // res 是服务器返回的数据
    }
)
```

③ $.ajax()

- 示例

```javascript
$.ajax({
    type: '',  // 请求的方式，有 GET 或 POST
    url: '',  // 请求的 url 地址
    data: {},  // 请求所要携带的数据
    success: function(res) {}  // 请求成功之后的回调函数
})
```

## 1.3 接口

概念：使用 Ajax 请求数据时，被请求的 URL 地址，就叫做数据接口（简称接口）。同时，每个接口必须有请求方式。

## 1.4 接口文档

### 1.4.1 什么是接口文档

接口文档，顾名思义就是**接口说明文档**，它是我们调用接口的依据。好的接口文档包含了对**接口 URL**，参数以及**输出内容**的说明，我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用。

### 1.4.2 接口文档的组成部分

一个合格的接口文档应该包含以下6个方面：

1. **接口名称**：用来标识各个接口的简单说明，如登录接口，获取信息接口等。
2. **接口 URL**：接口的调用地址。
3. **调用方式**：接口的调用方式。如 GET 或 POST。
4. **参数格式**：接口需要传递的参数，每个参数必须包含**参数名称**、**参数类型**、**是否必选**、**参数说明**这4项内容。
5. **响应格式**：接口的返回值的详细描述，一般包含**数据名称**、**数据类型**、**说明**3项内容。
6. **返回实例**（可选）：通过对象的形式，例举服务器返回数据的结构。

# 2 form 表单与模板引擎

## 2.1 form 表单的基本使用

### 2.1.1 什么是表单

表单在网页中主要负责**数据采集功能**。HTML 中的 <form> 标签，就是用于采集用户输入的信息，并通过 <form> 标签的提交操作，把采集到的信息提交到服务器端进行处理。

```javascript
<form>
    <input type="text" name="username" />
    <input type="password" name="password" />
    <input type="checkbox" name="rememberMe" checked />
    <button type="submit">提交</button>
</form>
```

### 2.1.2 <form> 标签的属性

| 属性    | 值                                                           | 描述                                                         |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| action  | URL 地址                                                     | 规定当提交表单时，向何处发送表单数据                         |
| method  | get 或 post                                                  | 规定以何种方式把表单数据提交到 action URL                    |
| enctype | application/x-www-form-urlencoded<br />multipart/form-data<br />text/plain | application...：在发送前编码所有的字符（默认）<br />multipart/form-data：不对字符编码<br />text/plain：空格转换为"+"加号，但不对特殊字符编码 |
| terget  | \_blank<br />\_self<br />\_parent<br />\_top<br />framename  | \_blank：在新窗口中打开。<br />\_self：默认。在相同的框架中打开。<br />\_parent：再父框架集中打开。<br />\_top：在整个窗口中打开。<br />framename：在指定的框架中打开。 |

> 注意：当涉及文件上传的操作时，必须将 enctype 的值设置为 multipart/form-data

## 2.2 通过 Ajax 提交表单数据

### 2.2.1 监听表单提交事件

在 jQuery 中，监听表单提交事件有以下两种：

```javascript
$('form').submit(function(e) {
    alert('监听到了表单的提交事件！')
})
$('form').on('submit', function(e) {
    alert('监听到了表单的提交事件！')
})
```

### 2.2.2 阻止表单默认提交行为

当监听到表单的提交事件后，可以调用事件对象的 e.preventDefault() 函数，来阻止表单的提交和页面的跳转。

```javascript
$('form').submit(function(e) {
    // 阻止表单的提交和页面的跳转
    e.preventDefault()
})
$('form').on('submit', function(e) {
    // 阻止表单的提交和页面的跳转
    e.preventDefault()
})
```

### 2.2.3 快速获取表单中的数据

1. serialize() 函数

jQuery 中的 serialize() 函数用来简化表单中获取数据的操作，格式如下：

```javascript
$(selector).serialize()
```

> 可以一次性获取表单中的所有数据。

2. 示例

```javascript
// html
<form id="form1">
    <input type="text" name="username" />
    <input type="password" name="password" />
    <button type="submit">提交</button>
</form>
// js
$("#form1").serialize()  // 结果：username=用户名值&password=密码值
```

> 注意：在用 serialize() 函数获取表单数据时，必须为每个表单元素添加 name 属性。

## 2.3 模板引擎基本概念

### 2.3.1 什么是模板引擎？

通俗地说，模板引擎就是你需要根据**不同数据**，重复生成**结构相同的** html 的时候，模板可以大大**节省你的代码量**，以及**提高可维护性**。

### 2.3.2 为什么要用模板引擎？

1. 节省代码量。
2. 减少拼接 HTML 的麻烦。
3. 开发效率高。
4. 代码更易于阅读与维护。
5. 有利于前后端分离。

## 2.4 art-template 模板引擎

### 2.4.1 art-template 简介

art- template 是一个简约、超快的模板引擎。官网：[art-template (aui.github.io)](http://aui.github.io/art-template/zh-cn/)

![image-20220417100716261](https://gitee.com/yang-1219/imgs/raw/master/img/image-20220417100716261.png)

### 2.4.2 art-template 安装

下载地址：[安装 - art-template (aui.github.io)](http://aui.github.io/art-template/zh-cn/docs/installation.html)

步骤：找到下载链接，直接右键，选择“将链接另存为”，即可下载到本地，如下图：

![image-20220417100446531](https://gitee.com/yang-1219/imgs/raw/master/img/image-20220417100446531.png)

使用：通过 <script> 标签接在到页面上使用。

### 2.4.3 art-template 简单使用

```javascript
<!-- 1.导入模板引擎 -->
<script src="./js/template-web.js"></script>
<!-- 导入 jQuery ,方便 DOM 操作-->
<script src="./js/jquery.min.js"></script>

<body>
  <div class="container"></div>

  <!-- 3.定义模板 -->
  <!-- 模板的 HTML 结构,必须定义到 script 中 -->
  <script type="text/html" id="tpl-test">
    <p>姓名:{{ name }}</p>
    <p>性别:{{ sex }}</p>
    <p>年龄:{{ age }}</p>
  </script>

  <script>
    // 2.定义需要渲染的数据
    let data = {name: '张三', sex: '男', age: '18'}

    // 4.调用 template 函数
    let str = template('tpl-test', data)
    
    // 5.渲染页面结构
    $('.container').html(str)
  </script>
</body>
```

### 2.4.4 art-template 标准语法

1. 什么是标准语法

art-template 提供了`{{ }}`这种语法格式，在`{{ }}`内可以进行**变量输出**，或**循环数组**等操作，这种`{{ }}`语法在 art-template 中被称为标准语法。

2. 标准输出

```javascript
{{ value }}
{{ obj.key }}
{{ obj['key'] }}
{{ a ? b : c }}
{{ a || b }}
{{ a + b }}
```

3. 原文输出

```javascript
{{ @ value }} // 如果输出的 value 值中，包含了 HTML 标签结构，则需要使用原文输出语法，才能保证 HTML 标签被正常渲染。
```

4. 条件输出

如果要实现条件输出，则可以在 {{}} 中使用 if ... else if ... /if 的方式，进行按需输出。

```javascript
{{ if value }} 输出的内容 {{ /if }}
{{ if value1 }} 输出的内容 {{ else if value2 }} 输出的内容 {{ /if }}
```

5. 循环输出

如果要实现循环输出，则可以在 {{}} 内，通过 each 语法循环数组，**当前循环**的索引使用 $index 进行访问，**当前的循环项**使用 $value 进行访问。

```javascript
{{ each arr }}
	{{ $index }} {{ $value }}
{{ /each }}
```

6. 过滤器

```javascript
{{ value | filterName }}
```

过滤器语法类似**管道操作符**，它的上一个输出作为下一个输入。

定义过滤器的基本语法如下：

```javascript
template.defaults.imports.filterName = function(valur) { /*return处理的结果*/ }
```

> 注意：过滤器最后一定要 return 一个值。

## 2.5 模板引擎的实现原理

### 2.5.1 正则与字符串操作

1. 基本语法

exec() 函数用于**检索字符串**中的正则表达式的匹配。

如果字符串中有匹配的值，**则返回该匹配值**，否则返回 **null**。

```javascript
regExpObject.exec(string)  // 语法

// 示例
let str = 'hello world!'
let pattern = /!/  // 表示匹配 ！
console.log(pattern.exec(str))
// 输出结果 ['!', index: 11, input: 'hello world!', groups: undefined]
```

2. 分组

正则表达式中用 () 括起来的内容表示一个分组，可以通过分组提取自己想要的内容。

```javascript
// 示例
let str = 'hello world! {{666}}'
let pattern = /{{([a-zA-Z0-9]+)}}/  // 表示匹配所有英文字母和数字
console.log(pattern.exec(str))
// 输出结果
0: "{{666}}"
1: "666"
groups: undefined
index: 13
input: "hello world! {{666}}"
length: 2
```

3. 字符串的 replace 函数

replace() 函数用于在字符串中用一些字符串替换另一些字符，或替换一个与正则表达式匹配的子串。

```javascript
let str = '676767'
console.log(str2.replace('7','6')) // 输出：'666767' 此处只会替换第一个与之匹配的字符
// 示例
let str = 'hello world! {{666}}'
let pattern = /{{([a-zA-Z0-9]+)}}/  // 表示匹配所有英文字母和数字
let patternResult = pattern.exec(str)
str = str.replace(patternResult[0], patternResult[1])
console.log(str)  // 输出：hello world! 666
```

4. 使用 while 循环 replace

```javascript
let str = 'hello world! {{666}}{{ yyds }}' // 定义字符串
let pattern = /{{\s*([a-zA-Z0-9]+)\s*}}/  // 定义正则，表示匹配所有字母和数字，以及前后空格

let patternResult = null
// 当 pattern.exec(str) 为 null 时，循环结束
while(patternResult = pattern.exec(str)){
    str = str.replace(patternResult[0], patternResult[1])
}
console.log(str)  // 输出：hello world! 666yyds
```

5. replace 真值操作

```javascript
let data = {one: '666', two: 'yyds'}  // 定义数据
let str = 'hello world! {{one}}{{ two }}' // 定义字符串
let pattern = /{{\s*([a-zA-Z0-9]+)\s*}}/  // 定义正则，表示匹配所有字母和数字，以及前后空格

let patternResult = null
// 当 pattern.exec(str) 为 null 时，循环结束
while(patternResult = pattern.exec(str)){
    str = str.replace(patternResult[0], data[patternResult[1]])
}
console.log(str)  // 输出：hello world! 666yyds
```

6. 实现简易模板引擎

```javascript
<body>
  <div class="container"></div>

  <!-- 1.定义模板 -->
  <!-- 模板的 HTML 结构,必须定义到 script 中 -->
  <script type="text/html" id="tpl-test">
    <p>姓名:{{ name }}</p>
    <p>性别:{{ sex }}</p>
    <p>年龄:{{ age }}</p>
  </script>

  <script>
    // 2.定义需要渲染的数据
    let data = {name: '张三', sex: '男', age: '18'}

    // 3.封装自己的模板引擎
    function MyTemplate(id, data) {
      let str = document.getElementById(id).innerHTML
      let pattern = /{{\s*([a-zA-Z0-9]+)\s*}}/  // 定义正则，表示匹配所有字母和数字，以及前后空格
      let patternResult = null
      // 当 pattern.exec(str) 为 null 时，循环结束
      while (patternResult = pattern.exec(str)) {
        str = str.replace(patternResult[0], data[patternResult[1]])
      }
      return str // 返回处理结果
    }
    // 4.调用自己封装的模板引擎
    str = MyTemplate('tpl-test', data)
    // 5.渲染页面结构
    document.querySelector('.container').innerHTML = str

  </script>
</body>
```

# 3 Ajax 进阶

## 3.1 XMLHttpRequest 的基本使用

### 3.1.1 什么是 XMLHttpRequest

XMLHttpRequest （简称 xhr）是客户端的一个 API，它为浏览器与服务器通信提供了一个便捷通道。通过它，可以请求服务器上的数据资源。上文的 jQuery 中的 Ajax 函数，就是基于 xhr 对象封装出来的，当然我们也可以直接使用 xhr 对象发起 Ajax 请求。

### 3.1.2 使用 xhr 发起 GET 请求

```javascript
// 1.创建 xhr 对象
let xhr = new XMLHttpRequest()
// 2.调用 open 函数，指定 请求方式 和 URL地址
// 不带参数的 GET 请求
xhr.open('GET', '请求的 URL地址')
// 带参数的 GET 请求，多个参数中间用 & 隔开
// xhr.open('GET', '请求的 URL地址?key=value&key=value')
// 3.调用 send 函数，发起 Ajax 请求
xhr.send()
// 4.监听 onreadystatechange 事件
xhr.onreadystatechange = function () {
    // 监听 xhr 对象的请求状态 readyState 与 服务器响应的状态 status
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        // 打印服务器响应数据
        console.log(xhr.responseText)
    }
}
```

> 注意：不论是 jQuery 中的 Ajax 发起 GET 请求，还是直接使用 xhr 对象发起 GET 请求，当需要携带参数时，本质上，都是直接将参数以查询字符串的形式，追加到 URL地址的后面，发送到服务器的。

### 3.1.3 xhr 对象 的readyState 属性

在 JavaScript 中，使用 readyState 属性可以实时跟踪异步响应状态。当该属性值发生变化时，会触发 readystatechange 事件，调用绑定的回调函数。readyState 属性值说明如表所示。

| 值   | 状态             | 说明                                                         |
| ---- | ---------------- | ------------------------------------------------------------ |
| 0    | unsent           | 未初始化。表示对象已经建立，但是尚未初始化，尚未调用 open() 方法 |
| 1    | opened           | 初始化。表示对象已经建立，尚未调用 send() 方法               |
| 2    | headers_received | 发送数据。表示 send() 方法已经调用，但是当前的状态及 HTTP 头未知 |
| 3    | loading          | 数据传送中。已经接收部分数据，因为响应及 HTTP 头不安全，这时通过 responseBody 和 responseText 获取部分数据会出现错误 |
| 4    | done             | 完成。数据接收完毕，此时可以通过 responseBody 和 responseText 获取完整的响应数据 |

如果 readyState 属性值为 4，则说明响应完毕，那么就可以安全的读取响应的数据。

> 考虑到各种特殊情况，更安全的方法是同时监测 HTTP 状态码，只有当 HTTP 状态码为 200 时，才说明 HTTP 响应顺利完成。

### 3.1.4 URL 编码与解码

1. 什么是 URL 编码

URL 地址中，不允许出现中文字符，只允许出现英文相关的字母、标点符号、数字。

那么，如果 URL 地址中需要包含中文字符，就必须对中文字符进行**编码**（转义）。

**编码原则**：使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。

2. 如何进行 URL 编码与解码

```javascript
// 编码
console.log(encodeURI("你好啊"));
// 输出：%E4%BD%A0%E5%A5%BD%E5%95%8A

// 解码
console.log(decodeURI("%E4%BD%A0%E5%A5%BD%E5%95%8A"));
// 输出：你好啊
```

> 注意：由于浏览器会自动对 URL 地址进行编码，所以，一般情况下我们不需要关心 URL 的编码与解码操作。

详细解释请移步：[URL 的编码和解码](https://blog.csdn.net/Y2ANGAO/article/details/124279862)

### 3.1.5 使用 xhr 发起 POST 请求

```javascript
// 1.创建 xhr 对象
let xhr = new XMLHttpRequest()
// 2.调用 open 函数，指定 请求方式 和 URL 地址
xhr.open('POST', '请求的 URL地址')
// 3.设置 Content-Type 属性（固定写法）
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 4.调用 send 函数，发起 Ajax 请求，同时将数据以查询字符串的方式，提交给服务器
xhr.send('key=value&key1=value1')
// 5.监听 onreadystatechange 事件
xhr.onreadystatechange = function () {
    // 监听 xhr 对象的请求状态 readyState 与 服务器响应的状态 status
    if (xhr.readyState === 4 && xhr.status === 200) {
        // 打印服务器响应数据
        console.log(xhr.responseText)
    }
}
```

## 3.2 数据交换格式

### 3.2.1 什么是数据交换格式

数据交换格式，就是服务器端与客户端之间进行数据传输与交换的格式。前端领域，经常提及的两种数据交换格式分别是`XML`和`JSON`。 

其中 XML 用的非常少，因为传输比较耗费资源(宽带)，比较重量级。所以一般情况下，银行项目使用`http`协议+`XML`居多。

相对来说，`JSON`就是一种轻量级的数据交换格式，结构清晰易于使用，相比`XML`重量级的数据交换格式更加的好用，所以客户端和服务器端采用`JSON`的方式进行数据交换格式进行通讯。

### 3.2.2 XML

1. 什么是 XML？

   XML 指可扩展标记语言（EXtensible Markup Language），它是一种**标记语言**，因此与 HTML 相似。

```java
<note>
    <to>张三</to>
    <from>李四</from>
    <heading>喊</heading>
    <body>一起吃饭！</body>
</note>
// 李四喊张三一起吃饭！
```

2. XML 和 HTML 的区别

- XML 和 HTML 都是标记语言，但是他们之间没有任何关系。

- XML 被设计为传输和存储数据，其焦点是数据的内容。

- HTML 被设计用来显示数据，其焦点是数据的外观。

- HTML 旨在显示信息，而 XML 旨在传输信息。

3. 缺点

- 格式臃肿，与数据无关的代码太多，体积大，传输效率低。
- 在 js 中解析 XML 比较麻烦。

### 3.2.3 JSON

1. 什么是 JSON？

JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation），JSON 就是 **JavaScript 对象**和**数组**的字符串表示法，它使用文本表示一个 JS 对象或数组的信息，因此，JSON 的本质是**字符串**。

JSON 是一种**轻量级的文本数据交换格式**，在作用上类似于 XML，专门用于存储和传输数据，但是 JSON 比 XML 更小、更快、更易解析。

2. JSON 的两种结构

**对象结构**：对象结构在 JSON 中表示为 {} 括起来的内容。数据结构为{key:value,key:value,...}的键值对结构。其中，key 必须是使用英文的双引号包裹的字符串，value 的数据类型可以是数字、字符串、布尔值、null、数组、对象6种类型。

```javascript
{
    "name": "张三",
    "sex": "男",
    "age": 18,
    "address": null,
    "hobby":["吃","喝","玩","乐"]
}
```

**数组结构**：数组结构在 JSON 中表示为 [] 括起来的内容。数据结构为["a","b","c",1,true...]。数组中的数据可以是数字、字符串、布尔值、null、数组、对象6种类型。

```javascript
[1,2,3]
["a","b","c"]
[true,false,null]
[{"name": "ns", "sex": "n"}, {"name": "nss", "sex": "nn"}]
```

3. JSON 语法注意事项
   1. 属性名必须使用双引号包裹。
   2. 字符串类型的值必须使用双引号包裹。
   3. JSON 中不允许使用单引号表示字符串。
   4. JSON 中不能写注释。
   5. JSON 的最外层必须是对象或数组格式。
   6. 不能使用 undefined 或函数作为 JSON 的值。

> JSON 的作用：在计算机与网络之间传输数据。
>
> JSON 的本质：用字符串来表示 JavaScript 对象数据或数组数据。

4. JSON 和 JS 对象的关系

JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。如下：

```javascript
// 对象
let obj = { name: '张三', sex: '男' }
// JSON 字符串，本质是一个字符串
let json = '{ "name": "张三", "sex": "男" }'
```

5. JSON 和 JS 对象之间的互相转换

```javascript
// JSON 字符串 转为 JS 对象，使用 JSON.parse() 方法
let json = '{ "name": "张三", "sex": "男" }'
console.log(JSON.parse(json))
// 输出：{name: '张三', sex: '男'}

// JS 对象 转为 JSON 字符串，使用 JSON.stringify() 方法
let obj = { name: '张三', sex: '男' }
console.log(JSON.stringify(obj))
// 输出：'{"name":"张三","sex":"男"}'
```

6. 序列化和反序列化

把**数据对象**转化为**字符串**的过程，叫做**序列化**，例如：调用 JSON.stringify() 方法的操作，叫做 JSON 序列化。

把**字符串**转化为**数据对象**的过程，叫做**反序列化**，例如：调用 JSON.parse() 方法的操作，叫做 JSON 反序列化。

## 3.3 封装自己的 Ajax 函数

### 3.3.1 效果

```javascript
<!-- 1 导入自己封装的 Ajax -->
<script src="./js/myAjax.js"></script>
// 2 调用自定义函数，发起 ajax 请求
<script>
    // 2 调用自定义函数，发起 ajax 请求
    sendAjax({
    type: '请求类型',
    url: '请求地址',
    data: {
        // 请求参数
    },
    success: function (resolve) { // 成功回调
        console.log(resolve)
    }
})
</script>
```

### 3.3.2 实现过程

```javascript
// 1.新建 myAjax.js 文件
// 2.定义处理 data 参数函数
function resolve(data) {
  let arr = []
  for (let key in data) {
    // 对值进行编码
    arr.push(key + '=' + encodeURIComponent(data[key]))
  }
  return arr.join('&')
}
// 3.定义发 Ajax 函数
function sendAjax(options) {
  let xhr = new XMLHttpRequest()

  // 拼接查询字符串
  let str = resolve(options.data)

  // 判断请求类型
  if (options.type.toUpperCase() === 'GET') {
    // 发 GET 请求
    xhr.open('GET', options.url + '?' + str)
    xhr.send()
  } else if (options.type.toUpperCase() === 'POST') {
    // 发 POST 请求
    xhr.open('POST', options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(str)
  }

  // 监听请求状态改变的事件
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 将响应回来的数据转换为对象
      let result = JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}
```

## 3.4 XMLHttpRequest Level2新特性

### 3.4.1 XMLHttpRequest Level2

1. 旧版 XMLHttpRequest 的缺点

- 只支持文本数据的传输，无法用来读取和上传文件。
- 传送和接受数据时，没有进度信息，只能提示有没有完成。

2. XMLHttpRequest Level2 新功能

- 可以设置 HTTP 请求的时限。
- 可以使用 Form Data 对象管理表单数据。
- 可以上传文件。
- 可以获得数据传输的进度信息。

### 3.4.2 设置 HTTP 的请求时限

设置请求时限，当超过设定的时间就停止请求。

```javascript
// 设置请求时间
xhr.timeout = 200
// 也可以设置停止请求后的回调
xhr.ontimeout = function(event) {
    alert('请求超时！')
}
```

### 3.4.3 FormData 对象管理表单数据

可以用来模拟表单操作。

```javascript
// 1.新建 FormData 对象
let fd = new FormData()
// 2.为 FormData 添加表单项
fd.append('name', '张三')
fd.append('sex', '男')
// 3.创建 xhr 对象
let xhr = new XMLHttpRequest()
// 4.调用 open 函数，指定 请求方式 和 URL地址
xhr.open('POST', '请求的 URL地址')
// 5.调用 send 函数，发起 Ajax 请求
xhr.send(fd)
// 6.监听 onreadystatechange 事件
xhr.onreadystatechange = function () {
    // 监听 xhr 对象的请求状态 readyState 与 服务器响应的状态 status
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        // 打印服务器响应数据
        console.log(xhr.responseText)
    }
}
```

也可以用来获取表单值。

```javascript
// 或取表单元素
let form = document.querySelect('form')
// 绑定表单提交事件
form.addEventListener('submit', function() {
    let fd = new FormData(form)
    // 进行 ajax 操作
})
```

### 3.4.4 上传文件

```javascript
<body>
  <!-- 1.上传文件 UI 结构 -->
  <input type="file" name="file" id="file">
  <button id="btn">上传</button>
  <br>
  <!-- 图片显示区域 -->
  <img src="" alt="" width="800">

  <!-- 2.验证是否选择了文件 -->
  <script>
    let btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
      let files = document.querySelector('#file').files
      if (files.length <= 0) {
        // 无数据
        return alert('请选择要上传的文件~')
      }
      // 有数据
      let fd = new FormData()
      fd.append('avatar', files[0])
      // 发 ajax
      let xhr = new XMLHttpRequest()

      // 监听文件上传进度
      xhr.onprogress = function (e) {
        if (e.lengthComputable) {
          // 已传输的字节 / 需要传输的字节 * 100
          let length = Math.ceil(e.loaded / e.total * 100)
          // 打印输出，可以自己设置进度条
          console.log(length)
        }
      }
      xhr.open('POST', '请求的 url 地址')
      xhr.send(fd)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let data = JSON.parse(xhr.responseText)
          if (data.status === 200) {
            document.querySelector('img').src = '请求的 url 地址' + data.url
          } else {
            console.log(data.message)
          }
        }
      }
    })
  </script>
</body>
```

## 3.5 使用 axios 发 Ajax 请求

### 3.5.1 什么是 axios？

Axios 是一个基于 *[promise](https://javascript.info/promise-basics)* 网络请求库，作用于[`node.js`](https://nodejs.org/) 和浏览器中。 它是 *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js `http` 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。

Axios 相比于原生的 Ajax 更简单易用，比 jQuery 更加轻量化，只专注于网络数据请求。

### 3.5.2 axios 发 GET 请求

```javascript
<!-- 1.导入 axios -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    // 2.调用 axios.get() 发起 GET 请求
    axios.get(
    '请求的 URL 地址',
    {
        params: {
            // 所需要传入的参数
        }
    }).then(function (res) {
        // res.data 为服务器返回的数据
        console.log(res.data)
	})
</script>
```

### 3.5.3 axios 发 POST 请求

```javascript
<!-- 1.导入 axios -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    // 2.调用 axios.post() 发起 POST 请求
    axios.post(
    '请求的 URL 地址',
    {
        // 所需要传入的参数
    }).then(function (res) {
    // res.data 为服务器返回的数据
    console.log(res.data)
})
</script>
```

### 3.5.4 直接用 axios 发起请求

```javascript
<!-- 1.导入 axios -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    // 2.直接用 axios 发起 GET 请求
    axios({
      method: 'GET',
      url: '请求的 URL 地址',
      params: {
        // 所需要传入的参数
      }
    }).then(function (res) {
      console.log(res.data)
    })
    // 3.直接用 axios 发起 POST 请求
    axios({
        method: 'POST',
        url: '请求的 URL 地址',
        data: {
		 // 所需要传入的参数
        }
      }).then(function (res) {
        console.log(res.data)
      })
  </script>
```

> 注意：get 请求参数需要用到 params 属性，post 请求参数需要用到 data 属性。

# 4 同源与 JSONP

## 4.1 同源策略和跨域

1. 什么是同源？

如果两个 URL 的**协议**、**域名**和**端口**都相同的话，则这两个 URL 是同源。

下表给出了与 URL `http://www.company.com/page.html` 的源进行对比的示例:

| URL                                      | 结果 | 原因                               |
| :--------------------------------------- | :--- | :--------------------------------- |
| `http://www.company.com/other.html`      | 同源 | 只有路径不同                       |
| `http://www.company.com/inner/page.html` | 同源 | 只有路径不同                       |
| `https://www.company.com/page.html`      | 失败 | 协议不同                           |
| `http://www.company.com:81/page.html`    | 失败 | 端口不同 ( `http://` 默认端口是80) |
| `http://news.company.com/page.html`      | 失败 | 主机不同                           |

2. 什么是同源策略？

**同源策略**（Same origin policy）是浏览器提供的一个安全功能。

**官方定义**：**同源策略**是一个重要的安全策略，它用于限制一个[origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

**通俗理解**：浏览器规定，A 网站的 JavaScript，不允许和非同源的网站 C 之间，进行资源的交互，例如：

- 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。
- 无法接触非同源网页的 DOM。
- 无法向非同源地址发送 Ajax 请求。

3. 什么是跨域？

非同源即为**跨域**。

出现跨域的根本原因：浏览器的同源策略不允许非同源的 URL 之间进行资源的交互。

> 注意：浏览器可以发起跨域请求，但是请求回来的数据会被浏览器的同源策略拦截，无法被页面获取。

4. 如何实现跨域数据请求？

主要有两种：

- JSONP：非官方提供，兼容性好，但只支持 GET 请求。
- CORS：官方提供，支持 GET 和 POST，但是不兼容某些低版本浏览器。

## 4.2 JSONP

### 4.2.2 什么是 JSONP？

JSONP(JSON with Padding) 是 JSON 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

### 4.2.3 实现原理

由于**浏览器同源策略**的限制，网页中**无法通过 Ajax 请求非同源的接口数据**。但是 <script> 标签不受浏览器同源策略的影响，可以通过 src 属性，请求非同源的 js 脚本。

其实现原理就是通过<script>标签的 src 属性，请求跨域的数据接口，并通过函数调用的形式，接收跨域接口响应回来的数据。

## 4.3 防抖

### 4.3.1 什么是防抖？

**防抖策略**（debounce）是当事件被触发后，**延迟 n 秒**后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。

### 4.3.2 简单实现

```javascript
// 1.定义timer
var timer = null
// 2.定义防抖函数
function debounce(input) {
    timer = setTimeout(() => {
    // 需要执行的操作
    }, 500)
}
// 3.比如输入框的 keyup 事件被触发时，立即清空 timer
$('input').on('keyup', function () {
    // 清空 timer
    clearTimeout(timer)

    // 执行操作

    // 再次开启 timer
    debounce($(this).val().trim())
})
```

## 4.4 节流

### 4.4.1 什么是节流？

**节流策略**（throttle）就是可以减少一段时间内事件的触发频率。

### 4.4.2 简单实现

```javascript
function throttle(fn,wait){
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                fn.apply(context,args);
                timer = null;
            },wait)
        }
    }
}

function handle(){
    console.log(Math.random());
}

window.addEventListener("mousemove",throttle(handle,1000));
```

## 4.5 防抖和节流的区别

- 防抖：如果事件被频繁触发，防抖能保证**只有最后一次**触发生效！前面 N 多次的触发都会被忽略！
- 节流：如果事件被频繁触发，节流能够**减少事件的触发频率**，是**有选择性的**执行一部分事件！

# 5 HTTP 协议

## 5.1 HTTP 协议简介

### 5.1.1 什么是通信？

通信是人与人之间通过某种媒体进行的信息交流与传递。

例如：张三把明天出去玩的消息通过 QQ 告诉李四。

其中：

通信主体是张三和李四。

通信内容是明天出去玩。

通信方式是 QQ。

### 5.1.2 什么是通信协议？

通信协议（Communication Protocol）是指双方实体完成通信或服务所必须遵循的规则和约定。

通俗理解就是：通信双方采用约定好的格式来发送和接收消息，这种事先约定好的通信格式，就叫做通信协议。

互联网中的通信协议：

客户端与服务器之间要实现**网页内容**的传输，则通信双方必须遵守网页内容的传输协议。

网页内容又叫做超文本，因此网页内容的传输协议又叫做超文本传输协议（HyperText Transfer Protocol），简称 HTTP 协议。

### 5.1.3 什么是 HTTP 协议？

HTTP 即超文本传输协议（HyperText Transfer Protocol），它规定了客户端与服务器进行网页内容传输时，所必须遵守的传输格式。

> **注意**：客户端与服务器的角色不是固定的，一端充当客户端，也可能在某次请求中充当服务器。这取决与请求的发起端。

**交互模型**：请求/响应。

## 5.2 HTTP 请求消息

### 5.2.1 什么是 HTTP 请求消息？

由于 HTTP 协议属于客户端和服务器之间的通信协议。因此，客户端发起的请求叫做 HTTP 请求，客户端发送到服务器的消息，叫做 HTTP 请求消息。

> 注意：HTTP 请求消息又叫做 HTTP 请求报文。

### 5.2.2 HTTP 请求消息的组成

客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。

![image-20220429202914199](https://gitee.com/yang-1219/imgs/raw/master/img/image-20220429202914199.png)

## 5.3 HTTP 响应消息

### 5.3.1 什么是 HTTP 响应消息

响应消息就是服务器响应给客户端的消息内容，也叫做响应报文。

### 5.3.2 HTTP 响应消息的组成

HTTP响应消息由四个部分组成，分别是：状态行、消息报头、空行和响应正文。

![image-20220429204629049](https://gitee.com/yang-1219/imgs/raw/master/img/image-20220429204629049.png)

## 5.4 HTTP 请求方法

| 序号 | 方法     | 描述                                                         |
| ---- | -------- | :----------------------------------------------------------- |
| 1    | **GET**  | 请求指定的页面信息，并返回实体主体。                         |
| 2    | HEAD     | 类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头 |
| 3    | **POST** | 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。<br>数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。 |
| 4    | PUT      | 从客户端向服务器传送的数据取代指定的文档的内容。             |
| 5    | DELETE   | 请求服务器删除指定的页面。                                   |
| 6    | CONNECT  | HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。    |
| 7    | OPTIONS  | 允许客户端查看服务器的性能。                                 |
| 8    | TRACE    | 回显服务器收到的请求，主要用于测试或诊断。                   |
| 9    | PATCH    | 是对 PUT 方法的补充，用来对已知资源进行局部更新 。           |

## 5.5 HTTP 响应状态码

**常见的状态码**：

- 200 - 请求成功。
- 301 - 资源（网页等）被永久转移到其它URL。
- 404 - 请求的资源（网页等）不存在。
- 500 - 内部服务器错误。

**分类**：

HTTP 状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型。响应分为五类：信息响应(100–199)，成功响应(200–299)，重定向(300–399)，客户端错误(400–499)和服务器错误 (500–599)：

| 分类 | 分类描述                                       |
| ---- | ---------------------------------------------- |
| 1**  | 信息，服务器收到请求，需要请求者继续执行操作   |
| 2**  | 成功，操作被成功接收并处理                     |
| 3**  | 重定向，需要进一步的操作以完成请求             |
| 4**  | 客户端错误，请求包含语法错误或无法完成请求     |
| 5**  | 服务器错误，服务器在处理请求的过程中发生了错误 |

详细请看：[HTTP 状态码 ](https://www.runoob.com/http/http-status-codes.html)
