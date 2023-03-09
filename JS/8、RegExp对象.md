# 一、RegExp(正则表达式)

正则表达式用于定义一些字符串的规则，计算机可以根据正则表达式，来检查一个字符串是否符合规则，获取将字符串中符合规则的内容提取出来。

使用typeof检查正则对象，会返回object。

# 二、创建方式

## 1、字面量

由斜杠 (/) 包围而不是引号包围。

```js
var 变量名 = /正则表达式/匹配模式;
```

匹配模式：

- i：忽略大小写
- g：全局匹配模式
- m：执行多行匹配

## 2、构造函数的字符串参数

由引号而不是斜杠包围。

```js
var 变量名 = new RegExp("正则表达式","匹配模式");
```

匹配模式：

- i：忽略大小写
- g：全局匹配模式
- ig：忽略大小写且全局匹配模式

注意：可以为一个正则表达式设置多个匹配模式，且顺序无所谓

# 三、正则表达式常用方法

## 1、正则表达式.test(字符串)

​		测试字符是否满足正则表达式规则，如果测试到有，则返回true；没有则返回flase
语法：正则表达式.test(字符串） 正则表达式提供的方法

例：

```js
var reg=/[123]/
var str='1'
var result=reg.test(str)
console.log(result)//flase
```

## 2、字符串.search(正则表达式）

search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。

```js
var reg=/\d/   //匹配阿拉伯数字
var str="abcdefg3sgbh"
var res=str.search(reg) 
console.log(res) //7
//验证方法 找到返回下标 找不到返回-1
//在字符串中找到满足正则表达式的那一部分
```

## 3、正则表达式.exec(字符串）

exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。 正则表达式提供的方法

```js
var reg=/\d/  
var str="abcd456efg"
var res=reg.exec(str)
console.log(res)//返回一个数组，内容是4
//字符串中满足正则表达式的部分提取出来
//遇到满足条件的就返回，所以只返回4
```

## 4、字符串.match(正则表达式)

match() 方法检索返回一个字符串匹配正则表达式的结果。 字符串提供的方法

```js
var reg=/\d/
var str="abcd456efg"
var res=str.match(reg) //字符串中满足表达式的部分提取出来
console.log(res) //返回一个数组，内容是4
```

## 5、字符串.replace(正则表达式，新的内容）

​		replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。字符串提供的方法

```js
var reg=/\d/
var str="11123bcd"
var res=str.replace(reg,"a") //将数字换为a
console.log(res)//a1123bcd 只要匹配到符合规则的就返回
```

# 四、常用规则讲解

## 1、断言

| 符号 | 注解       |
| ---- | ---------- |
| ^    | 以xxx开始  |
| $    | 以xxx结束  |
| \b   | 单词边界   |
| \B   | 非单词边界 |

## 2、范围类

在[]组成的类内部是可以连写的

例：

```js
let text = 'a1B2d3X4Z5'
let reg=/[a-zA-Z]/
text.replace(reg,'Q')//Q1Q3Q4Q5
```

## 3、字符类

| 字符 | 注解                                                |
| ---- | --------------------------------------------------- |
| .    | 除了回车符和换行符以外的所有字符                    |
| \d   | 匹配任何数字（阿拉伯数字）。相当于[0-9]             |
| \D   | 匹配任何非数字（阿拉伯数字）。相当于\[^0-9]         |
| \w   | 单词字符（字母、数字、下划线）                      |
| \W   | 非单词字符                                          |
| \s   | 匹配任何Unicode空白字符，包括空格、制表符、换页符等 |
| \S   | 非空白字符                                          |

【\u4e00-\u9fa5】匹配任意一个中文字符

## 4、字符类取反

不想匹配某些字符，其他都匹配。此时，可以使用字符类取反——使用元字符^，创建反向类，即不属于某类的内容。

例：

```js
[^abc]表示不是字符a或b或c的内容
```

```js
let reg=/[^abc]/g
let text='a1b2c3d4e5'
console.log(text.replace(reg,'X')) //输出aXbXcXdXeX
```

## 5、修饰符

在正常情况下，正则匹配到第一个匹配项则停止，并且默认大小写敏感，如果想修改默认选项，则需要修饰符。

### g：global全文搜索

例：

```js
var reg=new RegExp('l');
var a='hello'.replace(reg,'f')
console.log(a)//输出结果为:heflo

var reg=new RegExp('l','g');//加上g标签表示全文搜索
var a='hello'.replace(reg,'f')
console.log(a)//输出结果为:heffo （所有的 l 都换成了 f ）
```

### i：ignore case 忽略大小写

例：

```js
var reg=new RegExp('l','g');
var a='helloHELLO'.replace(reg,'f')
console.log(a)//输出结果为:heffoHELLO

var reg=new RegExp('l','gi');//加上i标签表示忽略大小写
var a='helloHELLO'.replace(reg,'f')
console.log(a)//输出结果为:heffoHEffO （大写和小写的l都被替换了）
```

### m：multiple lines 多行搜索

例：

```js
var reg=new RegExp('od')
var str='so good\n so good'
var result=str.replace(reg,'hi')
console.log(result)
//结果为：
 so gohi
 so good
 //只给第一行匹配了


var reg=new RegExp('od','gm')//加上m标签表示多行匹配
var str='so good\n so good'
var result=str.replace(reg,'hi')
console.log(result)
//结果为：
 so gohi
 so gohi
```

### 其他标志符

- s：允许 . 匹配换行符。
- u：使用unicode码的模式进行匹配。
- y：执行“粘性(sticky)”搜索,匹配从目标字符串的当前位置开始。

## 6、量词符

| 字符  | 含义                           |
| ----- | ------------------------------ |
| ？    | 出现零次或一次（最多出现一次） |
| +     | 出现一次或多次（至少出现一次） |
| *     | 出现零次或多次（任意次）       |
| {n}   | 出现n次                        |
| {n,m} | 出现n次到m次                   |
| {n,}  | 至少出现n次                    |

## 7、贪婪模式

正则表达式的量词，但量词会带来一个到底匹配哪个的问题

```js
var str="12345678"
var reg=/\d{3,6}/g
str.replace(reg,'X')  //X78
```

## 8、非贪婪模式

一但成功匹配不再继续尝试，这就是非贪婪模式。
只需要在量词后加上?即可

```js
var str="12345678"
var reg=/\d{3,6}?/g
str.replace(reg,'X')  //X45678
```

## 9、分组

在使用正则表达式的时候会想要匹配一串字符串连续出现多次的情况，使用（）可以达到分组的功能

例：

```js
var str='12341235'
let reg=/123(4|5)/g
//1234 1235二选一
```

## 10、反向引用

将一种格式的时间字符串：yyyy-MM-DD转为MM/DD/yyyy类型格式字符串。
由于年月日是不固定的，没法直接转换为固定数值。这时我们可以使用反向引用解决这个问题。
利用$n,n代表着分组的序号，序号是从1开始的。

```js
let text='2022-02-23'
let reg=/(\d{4})-(\d{2})-(\d{2})/
let res=text.replace(reg,'$3/$2/$1')//将yyyy-MM-DD转换为MM/DD/yyyy
console.log(res)
```

# 五、常见案例

## 1、检查手机号

```js
var phoneStr = "15131494600";
var phoneReg = /^1[3-9][0-9]{9}$/;
console.log(phoneReg.test(phoneStr)); //true
```

## 2、检查邮箱号

```js
var emailStr = "abc.def@163.com";
var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
console.log(emailReg.test(emailStr)); //true
```

