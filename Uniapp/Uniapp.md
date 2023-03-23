# 1、uni-app的优缺点

优点:

1. 一套代码可以生成多端
2. 学习成本低,语法是vue的,组件是小程序的
3. 拓展能力强
4. 使用HBuilderX开发,支持vue语法
5. 突破了系统对H5调用原生能力的限制

缺点：

1. 问世时间短,很多地方不完善
2.  社区不大
3.  官方对问题的反馈不及时
4.  在Android平台上比微信小程序和iOS差
5. 文件命名受限

# 二、 uni-app的配置文件

# 三、uni-app数据缓存

## （1）uni.setStorage(OBJECT)

OBJECT参数：

| 参数名   | 类型     | 必填 | 说明                                                         |
| -------- | -------- | ---- | ------------------------------------------------------------ |
| key      | String   | 是   | 本地缓存中的指定的 key                                       |
| data     | Any      | 是   | 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象 |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

**注意：**

​		`uni-`、`uni_`、`dcloud-`、`dcloud_`为前缀的key，为系统保留关键前缀。如`uni_deviceId`、`uni_id_token`，请开发者为key命名时避开这些前缀

**示例：**

```js
uni.setStorage({
	key:'storage_key',
	data:'hello',
	success:function(){
		consloe.log('success')
	}
})
```

## （2）uni.setStorageSync(KEY,DATA)

将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。

**参数说明：**

| 参数 | 类型   | 必填 | 说明                                                         |
| :--- | :----- | :--- | :----------------------------------------------------------- |
| key  | String | 是   | 本地缓存中的指定的 key                                       |
| data | Any    | 是   | 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象 |

##  （3）uni.getStorage(OBJECT)

从本地缓存中异步获取指定 key 对应的内容。

**OBJECT 参数：**

| 参数名   | 类型     | 必填 | 说明                                             |
| :------- | :------- | :--- | :----------------------------------------------- |
| key      | String   | 是   | 本地缓存中的指定的 key                           |
| success  | Function | 是   | 接口调用的回调函数，res = {data: key对应的内容}  |
| fail     | Function | 否   | 接口调用失败的回调函数                           |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success 返回参数：**

| 参数 | 类型   | 必填 | 说明                  |
| :--- | :----- | :--- | :-------------------- |
| key  | String | 是   | 本地缓存中的指定的 ke |

**示例**：

```javascript
try {
	const value = uni.getStorageSync('storage_key');
	if (value) {
		console.log(value);
	}
} catch (e) {
	// error
}
```

## （4）uni.getStorageSync(KEY)

从本地缓存中同步获取指定 key 对应的内容

**参数：**

| 参数 | 类型   | 必填 | 说明                   |
| :--- | :----- | :--- | :--------------------- |
| key  | String | 是   | 本地缓存中的指定的 key |

## （5）uni.getStorageInfo(OBJECT)

异步获取当前 storage 的相关信息。

**OBJECT 参数：**

| 参数名   | 类型     | 必填 | 说明                                             |
| :------- | :------- | :--- | :----------------------------------------------- |
| success  | Function | 是   | 接口调用的回调函数，详见返回参数说明             |
| fail     | Function | 否   | 接口调用失败的回调函数                           |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**success 返回参数：**

| 参数        | 类型            | 说明                         |
| :---------- | :-------------- | :--------------------------- |
| keys        | Array＜String＞ | 当前 storage 中所有的 key    |
| currentSize | Number          | 当前占用的空间大小, 单位：kb |
| limitSize   | Number          | 限制的空间大小, 单位：kb     |

**示例：**

```js
uni.getStorageInfo({
	success: function (res) {
		console.log(res.keys);
		console.log(res.currentSize);
		console.log(res.limitSize);
	}
});
```

##  （6）uni.getStorageInfoSync()

同步获取当前 storage 的相关信息。

**示例**

```javascript
try {
	const res = uni.getStorageInfoSync();
	console.log(res.keys);
	console.log(res.currentSize);
	console.log(res.limitSize);
} catch (e) {
	// error
}
```

## （7）uni.removeStorage(OBJECT)

从本地缓存中异步移除指定 key。

**OBJECT 参数：**

| 参数名   | 类型     | 必填 | 说明                                             |
| :------- | :------- | :--- | :----------------------------------------------- |
| key      | String   | 是   | 本地缓存中的指定的 key                           |
| success  | Function | 是   | 接口调用的回调函数                               |
| fail     | Function | 否   | 接口调用失败的回调函数                           |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

**示例：**

```javascript
uni.removeStorage({
	key: 'storage_key',
	success: function (res) {
		console.log('success');
	}
});
```

## （8）uni.removeStorageSync(KEY)

从本地缓存中同步移除指定 key。

**参数：**

| 参数名 | 类型   | 必填 | 说明                   |
| :----- | :----- | :--- | :--------------------- |
| key    | String | 是   | 本地缓存中的指定的 key |

**示例：**

```javascript
try {
	uni.removeStorageSync('storage_key');
} catch (e) {
	// error
}
```

## （9）uni.clearStorage()

清理本地数据缓存。

**示例：**

```javascript
uni.clearStorage();
```

## （10）uni.clearStorageSync()

同步清理本地数据缓存

**示例：**

```javascript
try {
	uni.clearStorageSync();
} catch (e) {
	// error
}
```

# 四、uni-app页面和路由

## （1）uni.navigateTo()

保留当前页面，跳转到应用内的某个页面，使用`uni.navigateBack`可以返回到原页面。

**OBJECT参数：**

| 参数              | 类型     | 必填 | 默认值 | 说明                                                         | 平台差异 |
| ----------------- | -------- | ---- | ------ | ------------------------------------------------------------ | -------- |
| url               | String   | 是   |        | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数 |          |
| animationType     | Number   | 否   | pop-in | 窗口显示的动画效果，详见：窗口动画                           | App      |
| animationDuration | Number   | 否   | 300    | 窗口动画持续时间，单位为 ms                                  | App      |
| events            | Object   | 否   |        | 页面间通信接口，用于监听被打开页面发送到当前页面的数据。2.8.9+ 开始支持。 |          |
| success           | Function | 否   |        | 接口调用成功的回调函数                                       |          |
| fail              | Function | 否   |        | 接口调用失败的回调函数                                       |          |
| complete          | Function | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行）             |          |

**object.success 回调函数**

**参数**

**Object res**

| 属性         | 类型         | 说明                 |
| :----------- | :----------- | :------------------- |
| eventChannel | EventChannel | 和被打开页面进行通信 |

**示例：**

```javascript
//在起始页面跳转到test.vue页面并传递参数
uni.navigateTo({
	url: 'test?id=1&name=uni-app'
});
```

```javascript
// 在test.vue页面接受参数
export default {
	onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		console.log(option.id); //打印出上个页面传递的参数。
		console.log(option.name); //打印出上个页面传递的参数。
	}
}
```

```js
// 在起始页面跳转到test.vue页面，并监听test.vue发送过来的事件数据
uni.navigateTo({
  url: 'pages/test?id=1',
  events: {
    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    }
    ...
  },
  success: function(res) {
    // 通过eventChannel向被打开页面传送数据
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'data from starter page' })
  }
})

// 在test.vue页面，向起始页通过事件传递数据
onLoad: function(option) {
  const eventChannel = this.getOpenerEventChannel();
  eventChannel.emit('acceptDataFromOpenedPage', {data: 'data from test page'});
  eventChannel.emit('someEvent', {data: 'data from test page for someEvent'});
  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
  eventChannel.on('acceptDataFromOpenerPage', function(data) {
    console.log(data)
  })
}
```

url有长度限制，太长的字符串会传递失败，可改用窗体通信、全局变量，另外参数中出现空格等特殊字符时需要对参数进行编码，如下为使用`encodeURIComponent`对参数进行编码的示例。

```html
<navigator :url="'/pages/test/test?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>
```

```javascript
// 在test.vue页面接受参数
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

**注：**

- 页面跳转路径有层级限制，不能无限制跳转新页面
- 跳转到 tabBar 页面只能使用 switchTab 跳转
- 路由API的目标页面必须是在pages.json里注册的vue页面。如果想打开web url，在App平台可以使用 plus.runtime.openURL或web-view组件；H5平台使用 window.open；小程序平台使用web-view组件（url需在小程序的联网白名单中）

##  （2）uni.redirectTo(OBJECT)

关闭当前页面，跳转到应用内的某个页面。

**OBJECT参数：**

| 参数     | 类型     | 必填 | 说明                                                         |
| :------- | :------- | :--- | :----------------------------------------------------------- |
| url      | String   | 是   | 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

## （3）uni.reLaunch(OBJECT)

关闭所有页面，打开到应用内的某个页面。

**注意：** 

- 如果调用了 uni.preloadPage(OBJECT) 不会关闭，仅触发生命周期 `onHide`
- H5端调用`uni.reLaunch`之后之前页面栈会销毁，但是无法清空浏览器之前的历史记录，此时`navigateBack`不能返回，如果存在历史记录的话点击浏览器的返回按钮或者调用`history.back()`仍然可以导航到浏览器的其他历史记录。

**OBJECT参数：**

| 参数     | 类型     | 必填 | 说明                                                         |
| :------- | :------- | :--- | :----------------------------------------------------------- |
| url      | String   | 是   | 需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数 |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

**示例：**

```javascript
uni.reLaunch({
	url: 'test?id=1'
});
```

```javascript
export default {
	onLoad: function (option) {
		console.log(option.id);
	}
}
```

## （4）uni.switchTab(OBJECT)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。

**注意：** 如果调用了 uni.preloadPage(OBJECT) 不会关闭，仅触发生命周期 `onHide`

**OBJECT参数：**

| 参数     | 类型     | 必填 | 说明                                                         |
| :------- | :------- | :--- | :----------------------------------------------------------- |
| url      | String   | 是   | 需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数 |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

## （5）uni.navigateBack(OBJECT)

关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。

**OBJECT参数：**

| 参数              | 类型     | 必填 | 默认值                                           | 说明                                                    | 平台差异说明 |
| :---------------- | :------- | :--- | :----------------------------------------------- | :------------------------------------------------------ | :----------- |
| delta             | Number   | 否   | 1                                                | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 |              |
| animationType     | String   | 否   | pop-out                                          | 窗口关闭的动画效果，详见：窗口动画                      | App          |
| animationDuration | Number   | 否   | 300                                              | 窗口关闭动画的持续时间，单位为 ms                       | App          |
| success           | Function | 否   | 接口调用成功的回调函数                           |                                                         |              |
| fail              | Function | 否   | 接口调用失败的回调函数                           |                                                         |              |
| complete          | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |                                                         |              |

**示例：**

```javascript
// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

// 此处是A页面
uni.navigateTo({
	url: 'B?id=1'
});

// 此处是B页面
uni.navigateTo({
	url: 'C?id=1'
});

// 在C页面内 navigateBack，将返回A页面
uni.navigateBack({
	delta: 2
});
```

## （6）EventChannel

2.8.9+ 支持 页面间事件通信通道

### 1、理论

如果一个页面由另一个页面通过 `wx.navigateTo` 打开，这两个页面间将建立一条数据通道：

- 被打开的页面可以通过 `this.getOpenerEventChannel()` 方法来获得一个 `EventChannel` 对象；
- wx.navigateTo 的 `success` 回调中也包含一个 EventChannel 对象。
- 这两个 EventChannel 对象间可以使用 `emit` 和 `on` 方法相互发送、监听事件。

### 2、方法

#### 2.1、EventChannel.emit（）

**格式**：

```js
EventChannel.emit(string eventName, any args)
```

触发一个事件

**参数**：

- eventName（string）事件名称
- args（any）事件参数

#### 2.2、EventChannel.off（）

**格式**：

```js
EventChannel.off(string eventName, function fn)
```

取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数

**参数**：

- eventName（string）事件名称
- fn（function）事件监听函数

#### 2.3、 EventChannel.on（）

**格式**：

```
EventChannel.on(string eventName, function fn)
```

持续监听一个事件

**参数**：

- eventName（string）事件名称
- fn（function）事件监听函数

#### 2.4、EventChannel.once（）

**格式**：

```
EventChannel.once(string eventName, function fn)
```

监听一个事件一次，触发后失效

**参数**：

- eventName（string）事件名称
- fn（function）事件监听函数

##  （7）uni.preloadPage(OBJECT)

预加载页面，是一种性能优化技术。被预载的页面，在打开时速度更快。

**平台差异说明**

|  App-nvue  |     H5     | 微信小程序 | 支付宝小程序 | 百度小程序 | 字节跳动小程序、飞书小程序 | QQ小程序 |
| :--------: | :--------: | :--------: | :----------: | :--------: | :------------------------: | :------: |
| √(2.7.12+) | √(2.7.12+) |     x      |      x       |     x      |             x              |  **x**   |

**OBJECT参数**：

|   属性   |   类型   | 必填 |                       说明                       |
| :------: | :------: | :--: | :----------------------------------------------: |
|   url    |  string  |  是  |                  预加载页面url                   |
| success  | Function |  否  |                预加载成功完成回调                |
|   fail   | Function |  否  |                  预加载失败回调                  |
| complete | Function |  否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

#### H5 平台

预加载 /pages/test/test 对应的js文件，不执行页面预渲染逻辑

```js
uni.preloadPage({url: "/pages/test/test"});
```

复制代码

#### App-nvue 平台

预加载nvue页面 /pages/test/test

```js
uni.preloadPage({url: "/pages/test/test"});
```

注意事项

1. App平台仅支持预加载 nvue 页面，执行页面预渲染，预载时触发生命周期 `onLoad`，`onReady`，不触发 `onShow`
2. 打开新页面时，url 完全相同（包含参数）时，优先使用预加载页面，触发生命周期 onShow
3. tabbar页面，仅支持预加载尚未显示过的页面，否则返回 fail，提示 already exists
4. 同一时间，相同 url 仅 preloadPage 一次
5. 当同一个预载页面已被打开(在路由栈)，再次打开相同url时，不再使用该预加载页面，而是打开新的非预载页面
6. `uni.reLanuch`, `uni.switchTab`, `uni.navigateBack`(含Android返回键) 切换页面时，预加载页面不会被销毁，仅触发生命周期 `onHide`
7. 在预载页面使用 `uni.redirectTo` 时，预加载页面会被销毁，触发生命周期 `onUnload`

## （8）窗口动画

# 五、uni-app的声明周期

uni-app 的生命周期主要分为：

- 应用生命周期
- 页面生命周期
- 组件生命周期三种

## 应用生命周期

**注**：仅在App.vue中有效，在其他页面监听无效

| 事件名称             | 说明                                                      |
| -------------------- | --------------------------------------------------------- |
| onLaunch             | 当uni-app初始化完成时触发（全局只触发一次）               |
| onShow               | 当uni-app启动，或从后台进入前台显示（显示页面的时候触发） |
| onHide               | 当uni-app从前台进入后台（隐藏/退出页面的时候触发）        |
| onError              | 当uni-app报错时触发                                       |
| onUniNViewMessage    | 对nvue页面发送的数据进行监视                              |
| onUnhandledRejection | 对未处理的Promise拒绝事件监听函数                         |
| onPageNotFound       | 页面不存在监听函数                                        |
| onThemeChange        | 监听系统主题变化                                          |

## 页面声明周期

| 事件名称                            | 说明                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| onInit                              | 监听页面初始化，其参数同onLoad参数，触发时机早于onLoad       |
| onLoad                              | 监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参） |
| onShow                              | 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回当前页面 |
| onReady                             | 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发 |
| onHide                              | 监听页面隐藏                                                 |
| onUnload                            | 监听页面卸载                                                 |
| onResize                            | 监听页面尺寸变化                                             |
| onPullDownRefresh                   | 监听用户下拉动作，一般用于下拉刷新                           |
| onReachBottom                       | 页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据 |
| onTabItemTap                        | 点击tab时触发，参数为Object                                  |
| onShareAppMessage                   | 用户点击右上角分享                                           |
| onPageScroll                        | 监听页面滚动，参数为Object                                   |
| onNavigationBarButtonTap            | 监听原生标题栏按钮点击事件，参数为Object                     |
| onBackPress                         | 监听页面返回                                                 |
| onNavigationBarSearchInputChanged   | 监听原生标题栏搜索输入框输入内容变化                         |
| onNavigationBarSearchInputConfirmed | 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发 |
| onNavigationBarSearchInputClicked   | 监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发） |
| onShareTimeline                     | 监听用户点击右上角转发到朋友圈                               |
| onAddToFavorites                    | 监听用户点击右上角收藏                                       |

## 组件生命周期

| 事件名称      | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 在实例初始化之后被调用                                       |
| created       | 在实例创建完成后被立即调用                                   |
| beforeMount   | 在挂载开始之前被调用                                         |
| mounted       | 挂载到实例上去之后调用                                       |
| beforeUpdate  | 数据更新时调用                                               |
| updated       | 数据更新之后时调用                                           |
| beforeDestroy | 实例销毁之前调用。在这一步，实例仍然完全可用                 |
| destroyed     | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁 |

