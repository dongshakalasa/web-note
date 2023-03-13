# 一、声明变量的方式

var、function、let、const、import、class

ES5 只有两种声明变量的方法：`var`命令和`function`命令。ES6 除了添加`let`和`const`命令，后面章节还会提到，另外两种声明变量的方法：`import`命令和`class`命令。所以，ES6 一共有 6 种声明变量的方法

注：

- DOM 的顶层对象是 document，BOM 的顶层对象是 window，Node 的全局对象是 global。
- ES5 中顶层对象的属性等价于全局变量。
- 在ES6中，用let、const、import、class定义的全局变量并没有作为全局对象的属性，所以通过window获取时，如果window存在和变量同名的属性，则获取的是window中该属性的原始值，否则为undefined。

# 二、let

1. let所声明的变量，只在let命令所在的代码块内有效，而 var 命令在全局范围内都有效。
2. let命令不存在变量提升，var 命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。
3. 暂时性死区（temporal dead zone，简称 TDZ）
4. let命令不允许在相同作用域内，重复声明同一个变量。

# 三、const

1. const命令声明一个只读的常量。一旦声明，常量的值就不能改变。

   const命令声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

2. const命令的作用域与let命令相同：只在声明所在的块级作用域内有效

3. const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

4. const命令声明的常量，也与let一样不可重复声明。

注：使用const声明引用类型的数据，其内部值可以改变