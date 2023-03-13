# 观察者模式

​		只涉及两个关键角色，发布者与订阅者。观察者模式定义了一种**一对多**的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。

![在这里插入图片描述](截图\观察者模式)

## 发布者的行为：

1. 增加订阅者
2. 移除订阅者
3. 通知所有订阅者

代码实现如下：

```js
/ 定义发布者类
class Publisher {
  constructor() {
    // 创建订阅者
    this.observers = []
  }
  // 增加订阅者
  add(observer) {
    this.observers.push(observer)
  }
  // 移除订阅者
  remove(observer) {
    this.observers.map((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    })
  }
  // 通知所有订阅者
  notify() {
    this.observers.map((observer) => {
      observer.update(this)
    })
  }
}
```

## 订阅者行为： 

1. 被通知
2. 去执行

```js
 // 定义订阅者类  
 class Observer {
    constructor() {
        console.log('创建订阅者')
    }

    update() {
        console.log('订阅者更新')
    }
}
```

# 发布订阅模式

​		与观察者模式类似，但是在这种模式下发布者完全不用感知订阅者，不用关心它怎么实现回调方法，**事件的注册和触发都发生在独立于双方的第三方平台（事件总线）上**。发布-订阅模式下，实现了完全地解耦。

![在这里插入图片描述](截图\发布订阅模式)

# vue2.x响应式原理探究

## 响应式实现过程官方解释

1. 在Vue data中存入对象数据
2. Vue遍历此对象每个property，通过Object.defineProperty()方法进行数据劫持，给每一个property加上getter/setter
3. 每个组件实例都对应一个Watcher实例，会收集所有接触过的property依赖，如果数据有变化，将会收到通知，watcher会使其关联的组件实例改变

![在这里插入图片描述](截图\vue2.x原理)

## 发布订阅模式在vue响应式原理中的具体运用

### 初始化过程

```js
class Vue {  
  constructor(options) {  
    this.$options = options;  
    this.$data = options.data;  
        
    // 对data选项做响应式处理  
    observe(this.$data);  
        
    // 代理data到vm上  
    proxy(this);  
        
    // 执行编译  
    new Compile(options.el, this);  
  }  
}  
```

### 发布者/伪订阅者：Observe

​		observe在前文中代表了订阅者，但这里他更多的是一个发布者，执行了发布者的权利，增加了订阅者，并且在改变时通知了订阅者。

```js
function observe(obj) {  
  if (typeof obj !== "object" || obj == null) {  
    return;  
  }  
  new Observer(obj);  
}  
  
class Observer {  
  constructor(value) {  
    this.value = value;
    Object.keys(value).forEach((key) => {  
      defineReactive(value, key, value[key]);  
    }); 
  }
}
```

`defineReactive`是一个非常重要的方法，为每⼀个`key`创建⼀个`Dep`实例

```js
function defineReactive(obj, key, val) {  
  // 递归遍历 确保深层次key也能够响应
  this.observe(val);  
  // 对每个key都建立一个Dep管家
  const dep = new Dep();  
  // 使用defineProperty对每个key建立getter/setter
  Object.defineProperty(obj, key, {  
    get() {  
      Dep.target && dep.addDep(Dep.target);// Dep.target也就是Watcher实例  
      return val;  
    },  
    // 监听变化
    set(newVal) {  
      if (newVal === val) return;  
      // 通知dep执行更新方法 
      dep.notify(); 
    },  
  });  
} 
```

### 事件中心：Dep管家，管理真实订阅者Wacther

Dep收集了组件实例中同一个key对应的所有订阅者Wacther

```js
// 发布者
class Dep {  
  constructor() {  
    this.deps = [];  // 依赖管理  
  }  
  addDep(dep) {  
    this.deps.push(dep);  
  }  
  notify() {   
    // 实际上是调用的watcher中的更新事件
    this.deps.forEach((dep) => dep.update());  
  }  
}  
```

### 实际的订阅者：Watcher

```js
// 订阅者 负责更新视图  
class Watcher {  
  constructor(vm, key, updater) {  
    this.vm = vm  
    this.key = key  
    this.updaterFn = updater  
    // 创建实例时，把当前实例指定到Dep.target静态属性上  
    Dep.target = this  
    // 读一下key，触发get 便将watcher添加到key对应的Dep中  
    vm[key]  
    // 置空  
    Dep.target = null  
  }  
  
  // 未来执行dom更新函数，由dep调用的
  update() {  
    this.updaterFn.call(this.vm, this.vm[this.key])  
  }  
} 
```

### VUE2.X响应式的局限性

​		由于js的限制，Vue 不能检测数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。

#### 对象

​		Vue 无法检测 property 的添加或移除，因为Vue 会在**初始化实例**时对 property 执行 getter/setter 转化，所以只有在初始化实例时就存在于data的property才是响应式的。

对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property。但是，可以使用 `Vue.set(object, propertyName, value)` 方法或者其别名`vm.$set`向嵌套对象添加响应式 property。例如:

```js
Vue.set(vm.someObject, 'b', 2)

this.$set(this.someObject,'b',2)
```

