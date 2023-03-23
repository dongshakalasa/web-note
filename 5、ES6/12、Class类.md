# 一、面向对象和面向过程

## 1 - 面向过程

​		面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步的实现，使用的时候再一个一个的一次调用就可以了。

## 2 - 面向对象

1. 面向对象是把事务分解成为一个个对象，然后对象之间分工与合作。
2. 面向对象是以功能来划分问题，而不是步骤。
3. 面向对象的特性：封装性、继承性、多态性

## 3 - 面向过程优缺点

- 优点：性能相对较高，适合跟硬件联系很紧密的东西，比如单片机。
-  缺点：没有面向对象容易维护，复用，扩展等

## 4 - 面向对象优缺点

- 优点：容易维护，复用，扩展，由于面向对象有封装，继承，多态的特性，可以设计出低耦合的系统，是系统更加灵活，更加易于维护
- 缺点：性能比面向过程低。

# 二、class类基本使用

## 1 - class创建

```js
// 1、创建类 class
class Start {
    
}
// 利用类创建对象 new
new Start()
```

## 2 - constructor构造函数

​		constructor()方法是类的构造函数(默认方法)，用于传递参数，返回实例对象，通过new命令生成对象实例时，自动调用该方法。如果没有显示定义，类内部会自动给我们创建一个constructor(）

```js

class Start{
    //类的构造函数(默认方法)
    //用于传递参数，返回实例对象，通过new命令生成对象实例时，自动调用该方法
    constructor(name){
        this.name=name;
    }
}
//调用的时候一定要加new，一调用就会自动执行constructor构造函数
let str=new Start("小刘");
console.log(str.name);//小刘
 
 let p=class Father{
     constructor(name,age){
         this.name=name;
         this.age=age;
     }
     sing(){
         console.log(111);
     }
 }
let obj1=new p();
console.log(p.name);//Father
// console.log(p.sing());//报错
obj1.sing();//11
```

**注**：

1. constructor会默认存在，并调用
2. constructor**中**写入的都是实例属性和方法，属于非共享内容
3. constructor**同级**写入的都是原型方法，属于共享内容

## 3 - 类中添加方法

1. 类中的所有函数都不需要加function

2. 多个函数方法之间不需要逗号分隔，不然要报错

3.  方法还可以传递参数，类中的公有属性是放到constructor里面的，调用的时候一定要加new，一调用就会自动执行constructor构造函数

**示例**：

```js
class Start{
    constructor(name){
        this.name=name;
    }
    sing(list){
        console.log("...唱歌");
        console.log( this.name + list);//鱼鱼----冬天
    }
}
let str1=new Start("鱼鱼");
str1.sing("----冬天");
```

## 4 - 类的继承

（1）写法

```js
class Father{   //父类
}
class Son extends Father{   //子类继承父类
}
```

（2）用法

```js
class Father{   //父类
    constructor(){

    }
    fish(){
        console.log("鱼鱼鱼");
    }
}
class Son extends Father{   //子类继承父类
}
 //给子类实例化
let son=new Son();
son.fish();//鱼鱼鱼
```

#  	 三、new一个类发生了什么

1. 在堆空间创建一个对象
2. 对象的[[Prototype]]指向其构造函数的prototype的
3. constructor 中this被赋值为这个对象
4. 执行 constructor构造器函数 给对象创建属性
5. 最后一点 如果constructor函数内返回了一个对象，则实例就是该对象，反之实例就是刚刚在堆内存中创建的对象

# 四、类的静态属性和实例属性

**实例属性**：所有的实例都可以访问的属性

**静态属性**：只有类本身才能访问的，静态属性通过static关键字来定义，或直接Person.xxx定义

**示例：**

```js
class Person {
    // 静态属性
    static name = '人'
    // 实例属性
    constructor(name,sex) { 
        this.name = name;
        this.sex = sex;
    }
    // 实例属性
    getName(){
        return this.name
    }
    // 实例属性
    setSex(sex) {
        this.sex = sex
    }
    // 静态属性
    static sleep(){
        console.log('睡觉中。。。')
    }
}
console.dir(Person);
console.log(new Person());
Person.sleep() // 睡觉中。。。
console.log(Person.name); // 人
```

**注**：

- static关键字设置的静态属性直接挂在Person类对象上
- 实例属性都是挂在prototype上

# 五、类的私有属性

**作用：**

提供一些只能自己调用的属性和方法，防止被外部篡改（只允许类在内部自己调用，实例无法调用）

**定义：**

在普通属性和方法前面加上#号即可，#属于私有属性、方法的一部分，所以调用也需要加入#号

**示例**：

```js
class Man {
    #name = '张'
    #setName(name){
        this.#name = name
    }
    init(name){
        console.log(this.#name); // 张
        this.#setName(name)
        console.log(this.#name); // 飞
    }
}
let m = new Man()
m.init('飞')
```

# 六、Class常用案例
