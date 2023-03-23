# 一、JSON是什么？

- JSON，全称是 JavaScript Object Notation，即 JavaScript对象标记法。
- JSON是一种轻量级（Light-Meight)、基于文本的(Text-Based)、可读的(Human-Readable)格式。
- JSON 的名称中虽然带有JavaScript，但这是指其语法规则是参考JavaScript对象的，而不是指只能用于JavaScript 语言。
- JSON无论对于人，还是对于机器来说，都是十分便于阅读和书写的，而且相比 XML(另一种常见的数据交换格式)，文件更小，因此迅速成为网络上十分流行的交换格式。
- 近年来JavaScript已经成为浏览器上事实上的标准语言，JavaScript 的风靡，与JSON 的流行也有密切的关系。
- 因为JSON本身就是参考JavaScript 对象的规则定义的，其语法与JavaScript定义对象的语法几乎完全相同。
- JSON格式的创始人声称此格式永远不升级，这就表示这种格式具有长时间的稳定性，10 年前写的文件，10年后也能用,没有任何兼容性问题。

# 二、JSON 的语法规则是怎样的？

JSON 的语法规则十分简单，可称得上“优雅完美”，总结起来有：

- 数组（Array）用方括号(“`[]`”)表示。
- 对象（0bject）用大括号(“`{}`”)表示。
- 名称/值对(`name/value`）组合成数组和对象。
- 名称(`name`）置于**双引号**中，值（`value`）有**字符串、数值、布尔值、null、对象和数组**。
- 并列的数据之间用逗号(“`,`”）分隔

```json
{
	"name": "xdr630",
	"favorite": "programming"
}
```

# 三、JSON 和 XML

​		JSON常被拿来与XML做比较，因为JSON 的诞生本来就多多少少要有取代XNL的意思。相比 XML，JSON的优势如下:

- 没有结束标签,长度更短,读写更快
- 能够直接被JavaScript解释器解析
- 可以使用数组

两者比较

- JSON：

  ```json
  {
  	"name":"兮动人",
  	"age":22,
  	"fruits":["apple","pear","grape"]
  }
  ```

- XML：

  ```xml
  <root>
  	<name>兮动人</name>
  	<age>22</age>
  	<fruits>apple</fruits>
  	<fruits>pear</fruits>
  	<fruits>grape</fruits>
  </root>
  ```

# 四、JSON的解析和生成（JSON 和 JS 对象互转）

- 在JavaScript中，有两个方法与此相关: JSON.parse和 JSON.stringify 。

JSON 和 JS 对象互转

- 要实现从**JSON字符串**转换为**JS对象**，使用 **JSON.parse()** 方法
- 要实现从**JS对象**转换为**JSON字符串**，使用 **JSON.stringify()** 方法：

# 五、JSON格式规定

对象（0bject)

- 对象用大括号(“`{}`”）括起来，大括号里是一系列的“`名称/值对`”。
- 两个并列的数据之间用逗号(“`,`”）隔开，注意两点:
  - 使用英文的逗号（“`,`”)，不要用中文的逗号(“`，`”)
  - 最后一个“`名称/值对`“之后不要加逗号

数组（Array）

- 数组表示一系列有序的值，用方括号(“`[]`”)包围起来，并列的值之间用**逗号**分隔。

名称/值对（Name/Value）

- 名称（Name）是一个字符串，要用双引号括起来，不能用单引号，也不能没有引号，这一点与JavaScript不同。
- 值的类型只有七种:字符串（string)、数值(number)、对象（object)、数组（array), 布尔值、null。不能有这之外的类型，例如undefined、函数等。

字符串（`string`）的规则如下:

- 英文双引号括起来,不能用单引号，也不能没有。
- 字符串中不能单独出现双引号（`”`）和右斜杠（“`\`")。
- 如果要打双引号或右斜杠，需要使用“`右斜杠+字符`”的形式，例如`\”`和`\\`，其它的转义字符也是如此。

数值类型，可以使用科学计数法表示