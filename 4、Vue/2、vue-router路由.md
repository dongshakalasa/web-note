# 一、路由的理解

## 1、什么是路由

- 一个路由就是一组映射关系（key-value）
- key为路径，value可能是function或component

## 2、路由分类

- 后端路由
  1. 理解：value是function，用于处理客户端提交的请求。
  2. 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据。
- 前端路由
  1. 理解：value是component，用于展示页面内容。
  2. 工作过程：当浏览器的路径改变时，对应的组件就会显示。

# 二、vue-router

## 1、vue-router的模式

### 1.1、简介

​		vue-router在实现单页面前端路由时，提供了两种方式：Hash模式和History模式；根据mode参数来决定采用哪一种方式。

1. #### Hash模式

   - vue-router 默认 hash 模式 ——使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。 hash（#）是URL 的锚点，代表的是网页中的一个位置，单单改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页，也就是说 #是用来指导浏览器动作的，对服务器端完全无用，HTTP请求中也不会不包括#；同时每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用”后退”按钮，就可以回到上一个位置；所以说Hash模式通过锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据
   - 简单来说就是：Hash即地址栏URL中的 # 符号 hash虽然出现在URL中，但不会被包括在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面

2. #### History模式

   - 由于hash模式会在url中自带#，如果不想要很丑的 hash，我们可以用路由的 history 模式，只需要在配置路由规则时，加入"mode: ‘history’",这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面
   - 当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，比较好看
   - 不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了
   - 所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面

### 1.2、实现

vue-router可以设置两种模式：hash和history

```js
const router = new VueRouter({
  mode: "hash",
  // mode: "history",
  routes
});
```

​		如果使用hash模式，一般无需特殊配置，但如果要使用history模式，则前端和服务端要做一定的设置

​		使用history模式通常本地调试没有什么问题，但是一旦发布到测试或生产环境，则会出现页面白屏或刷新页面白屏的现象，这种问题的出现是因为前端和服务端没有做相应配置。

**实现history模式**

**前端配置**

1、设置路由的mode和base两个值

```js
const routes = [...]
 
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,  // 如果使用history模式，必须设置base参数
  routes
});
 
export default router;
```

2、设置vue.config.js里的publicPath

```js
module.exports = {
  // publicPath默认值是'/'，即你的应用是被部署在一个域名的根路径上
  // 设置为'./'，可以避免打包后的静态页面空白
  // 当在非本地环境时，这里以项目test-daily为例，即打包后的h5项目部署服务器的test-daily目录下
  // 那么这里就要把publicPath设置为/test-daily/，表示所有的静态资源都在/test-daily/里
  // 打包部署后，会发现index.html引用的静态资源都添加了路径/test-daily/
  publicPath: process.env.NODE_ENV == 'development' ? './' : '/test-daily/',
  
  ......
 
}
```

**服务端配置**(这里以nginx为例)

官网其实有介绍，只是不太详细，这里直接上代码

![img](截图\使用history模式的ngix配置)



location /test-daily表示项目部署在了 /test-daily目录下，这里要跟vue.config.js里的publicpath的值保持一致。

之所以刷新页面白屏，其实是因为路由资源不存在，以本项目为例(home为首页路由的参数)：

https://test.xxx.yy/test-daily/home

当访问上述路由时，其实根本就不存在相应的资源，当然会404了，为了避免这种情况的发生，可以让所有的路由都指向index.html就可以解决问题

在nginx上进行设置： try_files $uri $uri/ /test-daily/index.html        即可。

## 2、基本使用

- 安装vue-router

  命令：npm i vue-router（默认安装的是4版本适配的vue3，vue2使用3版本）

- 创建router文件夹，并创建index.js文件

```js
/ 该文件是专门用于创建整个应用的路由器
 
// 第一步引入插件(本质是一个构造函数)
import VueRouter from 'vue-router'
 
// 引入一下用到的组件 
import About from '../components/About'
 
// 第二步创建router实例对象并暴露
export default new VueRouter({
    routes: [
        {
            // path是路径
            path: "/about",
            //跳转的组件
            component: About
        },       
    ]
})
// 然后去main.js中引入router实例
```

- 在main.js文件下进行配置

```js
// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'
// 第一步: 引入router 插件
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 第二步: 创建router文件夹 引入实例
import router from './router'
 
// 关闭生产提示
Vue.config.productionTip = false
 
 
// 创建vm
new Vue({
    // 指定容器
    el: '#app',
    // 解析App模板
    render: h => h(App),
    // 使用路由
    router
})
```

## 3、详细配置信息

```js
// 1、导入路由，导入vue进行挂在
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

// 2、导入路由组件进行路由懒加载
//     *可能会出现首页白屏问题
//     *造成很大的性能问题
//     *量大的话写个js文件写好路由 然后类似模块一样进行导入进来

// 3、写路由规则配置项
const router = new Router({
    mode:'history', 			// 配置路由模式
    base:'/' 					// 打包路径，默认为'/'，可修改
    routes: [
    	{
    		path:'/home'，      // 路径
    		name:'home' ，      // 名称
    		hidden: true，      // 自定义的属性不过this.$route时查看不到 只能点语法点出来
    		component: ()=>import('@/layout/login')      //记载组件（懒加载）
			// 异步组件 异步加载 component:(resolve)=>require(['组件路径'],reslove)
			props: { default: true, sidebar: false }, // 路由传参，不习惯使用
            meta: { title: '标题', id: '001', show: false } //路由元信息，可以通过meta写标识 保存变量等操作
			children: [
                // 多级路由
                // 通过url:'/home/era'访问
                {
                    path:'/era',
                    name:'era',
                    component:()=>import('@/views/era/index')
                }
            ]
		}，
        // 默认重定向
        {
           path: '/',
           redirect:'/home'
        }
		// 默认404，一定要放在下面 因为先走上面的代码 如果没有匹配到，则渲染 * 号，进入404
		{
            path:'*',
            name:'error',
            commponent: ()=>import('@/loayout/404')
        }
    ]
})

// 4、导出
export default router;
```

## 4、路由导航

1. 声明式导航写在template中标签里，通过<router-link\></router-link\>标签来触发

   - 基本使用

   ```vue
   <router-linke to="/home/News"></router-linke>
   ```

   - <router-linke\>的replace属性
     1. 作用：控制跳转时操作浏览器历史记录的模式
     2. 浏览器的历史记录有两种记录方式：分别是push和replace，push是追加历史记录，replace是替换当前记录。路由跳转时默认为push
     3. 如何开启replace模式：<router-link replace ....></router-link\>

2. 编程式导航通过组件实例在method方法里使用this.$router.push(xxx)，然后通过元素一定操作来调用该方法触发路径实现路由跳转

   1. this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)  ==>> 队列的方式（先进先出）
   2. this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)    ==>> 栈的方式（先进后出）
   3. this.$router.back(): 请求(返回)上一个记录路由
   4. this.$router.go(-1): 请求(返回)上一个记录路由
   5. this.$router.go(1): 请求下一个记录路由

## 5、路由传参

vue的路由传参共有三种方式

1. query传参：不管使用path还是name来匹配路由都可以，然后通过query来传递参数，这种情况下query传递的参数会显示在url后面

   ```vue
   // 使用标签
   <router-link :to='{path:"test_path",query:{id:1}}'>传1</router-link>
   <router-link :to='{path:"/test_path",query:{id:2}}'>传2</router-link>
   <router-link :to='{name:"test_path",query:{id:3}}'>传3</router-link>
   
   
   // js
   <button @click="btn1()">传1</button>
   <button @click="btn2()">传2</button>
   
   btn1(){
         this.$router.push({path:'about',query:{id:1}})
   },
   btn2(){
         this.$router.push({name:'about',query:{id:2}})
   },
   ```

2. params传参：通过路由属性中name来匹配的路由，通过params来传递参数

   ```vue
   <!-- 传递params参数时，是通过指定路由名称进行传递的 -->
   <router-link :to='{ name: "test_path", params: { id: 3 } }'>传3</router-link>
    
   //js
   <button @click="btn2()">传2</button>
   btn2(){
         this.$router.push({name:'test_path',params:{id:2}})
   },
   ```

3. 路径传参：直接通过path，直接携带参数进行路由传参，使用该方式传值的时候，需要子路由提前配置好参数，接收时也是通过this.$route.params.id获取

   **配置如下**

   ```js
   {
     path: '/test_path/:id',
     name: 'test_path',
     component: test_path
   }
   ```

   ```vue
   
   <router-link to='/test_path/1'>传1</router-link>
    
   //js
   <button @click="btn1()">传1</button>
   btn1(){
         this.$router.push({path:'/about/1'})
       },
   ```

## 6、缓存组件

### 6.1、简介

​	keep-alive是 Vue 的内置组件，当它包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
和 transition 相似，keep-alive 是一个抽象组件：它自身不会渲染成一个 DOM 元素，也不会出现在父组件链中。

**作用**：在组件切换过程中将状态保留在内存中，防止重复渲染DOM，减少加载时间及性能消耗，提高用户体验性

**原理**：在 created 函数调用时将需要缓存的 VNode 节点保存在 this.cache 中／在 render（页面渲染） 时，如果 VNode 的 name 符合缓存条件（可以用 include 以及 exclude 控制），则会从 this.cache 中取出之前缓存的 VNode 实例进行渲染。（VNode：虚拟DOM，其实就是一个JS对象）

### 6.2、使用

参数：

| 参数名  | 值                 | 描述                           |
| ------- | ------------------ | ------------------------------ |
| include | 字符串或正则表达式 | 只有名称匹配的组件会被缓存     |
| exclude | 字符串或正则表达式 | 任何名称匹配的组件都不会被缓存 |
| max     | 数字               | 最多可以缓存多少组件实例       |

注意: include/exclude 值是组件中的 name 命名，而不是路由中的组件 name 命名；

**例**：

- 缓存一个路由组件

  ```vue
  <keep-alive include="News">  // News组件名
  	<router-view></router-view>
  </keep-alive>
  ```

- 缓存多个路由组件

  ```vue
  <keep-alive :include="['News','Message']">
      <router-view></router-view>
  </keep-alive>
  ```

### 6.3、生命周期函数

| 名称        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| activated   | 在 keep-alive 组件激活时调用， 该钩子函数在服务器端渲染期间不被调用。 |
| deactivated | 在 keep-alive 组件停用时调用，该钩子在服务器端渲染期间不被调用。 |

​		使用< keep-alive > 会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，需要在 activated阶段获取数据，承担原来created钩子中获取数据的任务。

​		被包含在 < keep-alive > 中创建的组件，会多出两个生命周期的钩子: activated 与 deactivated

- activated：在组件被激活时调用，在组件第一次渲染时也会被调用，之后每次keep-alive激活时被调用。
- deactivated：在组件被停用时调用。

**注意**：只有组件被 keep-alive 包裹时，这两个生命周期才会被调用，如果作为正常组件使用，是不会被调用，以及在 2.1.0 版本之后，使用 exclude 排除之后，就算被包裹在 keep-alive 中，这两个钩子依然不会被调用！另外在服务端渲染时此钩子也不会被调用的。

**什么时候获取数据**？

​		当引入keep-alive 的时候，页面第一次进入，钩子的触发顺序 created -> mounted -> activated，退出时触发 deactivated。
​		当再次进入（前进或者后退）时，只触发 activated。

​		我们知道 keep-alive 之后页面模板第一次初始化解析变成 HTML 片段后，再次进入就不在重新解析而是读取内存中的数据。只有当数据变化时，才使用 VirtualDOM 进行 diff 更新。所以，页面进入的数据获取应该在 activated 中也放一份。

​		数据下载完毕手动操作 DOM 的部分也应该在activated中执行才会生效。

​		所以，应该 activated 中留一份数据获取的代码，或者不要 created 部分，直接将 created 中的代码转移到 activated 中

## 7、路由守卫

vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。这里有很多方式植入路由导航中：

- 全局守卫
  - 全局前置守卫：beforeEach
  - 全局解析守卫：beforeResolve
  - 全局后置钩子：afterEach
- 路由独享守卫
  - 路由独享守卫：beforeEnter
- 路由组件内的守卫
  - 进入组件之前：beforeRouteEnter
  - 复用同一个组件：beforeRouteUpdate
  - 离开当前组件：beforeRouteLeave

### 1、全局守卫

- 全局前置守卫：beforeEach
- 全局解析守卫：beforeResolve
- 全局后置钩子：afterEach

```js
// main.js 入口文件
    import router from './router'; // 引入路由
    router.beforeEach((to, from, next) => { 
      next();
    });
    router.beforeResolve((to, from, next) => {
      next();
    });
    router.afterEach((to, from) => {
      console.log('afterEach 全局后置钩子');
    });
```

to,from,next 这三个参数

- to和from是将要进入和将要离开的路由对象,路由对象指的是平时通过this.$route获取到的路由对象。

- next:Function 这个参数是个函数，且必须调用，否则不能进入路由(页面空白)

  - next() 进入该路由。

  - next(false): 取消进入路由，url地址重置为from路由地址(也就是将要离开的路由地址)。

  - next 跳转新路由，当前的导航被中断，重新开始一个新的导航

    >   我们可以这样跳转：next('path地址')或者next({path:''})或者next({name:''})  且允许设置诸如 replace: true、name: 'home' 之类的选项  以及你用在router-link或router.push的对象选项。

### 2、路由独享守卫

如果你不想全局配置守卫的话，你可以为某些路由单独配置守卫：beforeEnter：(to,from,next)=>{}

```js
const router = new VueRouter({
      routes: [
        {
          path: '/foo',
          component: Foo,
          beforeEnter: (to, from, next) => { 
            // 参数用法什么的都一样,调用顺序在全局前置守卫后面，所以不会被全局守卫覆盖
            // ...
          }
        }
      ]
})
```

### 3、路由组件内的守卫

1. beforeRouteEnter进入路由前
2. beforeRouteUpdate（2.2）路由复用同一个组件时
3. beforeRouteLeave离开当前路由时

3.1、到达这个组件时，beforeRouteEnter：(to,from,next)=>{}

- to，from参数与上面使用方法一致。next回调函数略有不同

- 如下例data 组件内守卫有特殊情况，如果我们直接以
  beforeRouteEnter:(to,from,next)=>{ alert("hello" + this.name);}进行访问admin页面，会发现alert输出hello undefined。这是因为，现在访问不到我们的data属性，执行顺序是不一致，这与的声明周期有关。在执行完之前，data数据还未渲染。所以这里，next()会给一个对应的回调，帮助完成

  ```vue
  
  <script>
  export default {
      data(){
          return{
              name:"Arya"
          }
      },
      beforeRouteEnter:(to,from,next)=>{
          next(vm=>{
              alert("hello" + vm.name);
          })
      }
  }
  </script>
  ```

3.2、离开这个组件时，beforeRouteLeave:(to,from,next)=>{}

- 点击其他组件时，判断是否确认离开。确认执行next()；取消执行next(false)，留在当前页面。

```vue
beforeRouteLeave:(to,from,next)=>{
        if(confirm("确定离开此页面吗？") == true){
            next();
        }else{
            next(false);
        }
}
```



## 8、完整的路由导航解析流程(不包括其他生命周期)：

1. 触发进入其他路由。
2. 调用要离开路由的组件守卫`beforeRouteLeave`
3. 调用全局前置守卫：`beforeEach`
4. 在重用的组件里调用 `beforeRouteUpdate`
5. 调用路由独享守卫 `beforeEnter`。
6. 解析异步路由组件。
7. 在将要进入的路由组件中调用`beforeRouteEnter`
8. 调用全局解析守卫 `beforeResolve`
9. 导航被确认。
10. 调用全局后置钩子的 `afterEach` 钩子。
11. 触发DOM更新(`mounted`)。
12. 执行`beforeRouteEnter` 守卫中传给 next 的回调函数

# 三、动态路由配置