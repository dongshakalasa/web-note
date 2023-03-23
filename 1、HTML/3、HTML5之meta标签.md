# 前言

meta 元素用于指定页面的信息和部分行为。通常用于指定网页的描述，关键字等元数据。

可以被使用浏览器、搜索引擎或其他 Web 服务调用。

```html
<meta name="" http-equip="" content="" charset="">
```

# 一、charset

`charset`规定`HTML`文档的字符编码。

```html
<meta charset="utf-8">
```

`charset`是`HTML 5`的新属性，替换了`HTML 4.01`的指定字符编码的方式，可以减少部分代码量。

```html
<meta http-equiv="content-type" content="text/html; charset=utf-8">
```

# 二、name

## 1.1、keywords：页面关键字

指定页面关键字。

```html
<meta name="keywords" content="html,css">
```

## 1.2、description：页面描述信息

指定页面描述信息。

```html
<meta name="description" content="html description">
```

## 1.3、author：页面作者

标注页面作者。

```html
<meta name="author" content="xx">
```

## 1.4、copyright：页面版权信息

标注页面版权信息。

```html
<meta name="copyright" content="Baidu">
```

## 1.5、generator：开发网页的工具或软件

标注开发网页的工具或软件。

```html
<meta name="generator" content="VS Code">
```

## 1.6、robots：搜索引擎抓取页面的方式

告知搜索引擎抓取页面的方式。

其中`content`参数如下。

- `index`：搜索引擎可以索引此页面，默认属性，不设置`meta`标签，搜索引擎也会默认索引此页面
- noindex：搜索引擎不可索引此页面
- noimageindex：搜索引擎不可索引此页面的图片
- follow：爬虫可以爬取此页面的链接
- nofollow：爬虫不可爬取此页面的链接
- all：index和follow的简写，搜索引擎可以索引此页面，爬虫可以爬取此页面的链接
- none：noindex和nofollow的简写，搜索引擎不可索引此页面，爬虫不可爬取此页面的链接
- noarchive：阻止搜索引擎在搜索结果中显示此页面的缓存版本，即网页快照
- nocache：功能同noarchive一致，适用于MSN/Live引擎
- nosnippet：搜索引擎的搜索结果中将显示一部分搜索文字上下文的内容，此属性即搜索引擎不可显示该内容，另外搜索引擎也不会保存该页面的快照
- noodp：搜索引擎的搜索结果中将显示一部分搜索文字上下文的内容，阻止使用DMOZ信息做为此内容
- noydir：搜索引擎的搜索结果中将显示一部分搜索文字上下文的内容，阻止Yahoo directory信息作为此内容

```
<meta name="robots" content="index, follow">
```

## 1.7、renderer：指定浏览器渲染页面内核

指定浏览器以哪种浏览器内核渲染页面，其中`content`参数包括`webkit`（`webkit`内核，极速模式）、`ie-comp`（`IE`兼容模式，即`IE6`、`IE7`、`IE8`的渲染模式）、`ie-stand`（`IE`标准模式，即以`IE9`及以上版本渲染）。

```html
<meta name="renderer" content="">
```

## 1.8、format-detection：是否识别电话号码等

移动端浏览器中，用于识别电话号码、电子邮箱和地理位置的格式。其中`content`参数为`yes`（开启，默认值）、`no`（关闭）。

```html
<meta name="format-detection"  content="telephone=no">
<meta name="format-detection"  content="email=no">
<meta name="format-detection"  content="address=no">
```

## 1.9、revisit-after：告知浏览器访问一次页面间隔时间

​		告知搜索引擎每隔多少天访问一次此页面。

​		一般情况下，网站不需要此属性来限制搜索引擎的访问频率。只有网站数据量非常大时，被搜索引擎频繁抓取，会占用过多的服务器资源，影响网站的反应速度，这种情况一般设置每隔`5-7`天来访问抓取一次网页即可。

​		网站抓取时间取决于此属性和搜索引擎的重访时间，假设revisit-after设置为5天，若搜索引擎每隔10天访问一次，revisit-after不会生效，而最终搜索引擎按照10天访问一次。搜索引擎每隔3天访问一次，revisit-after设置的5天则会生效，最终搜索引擎每隔5天访问一次页面。

```html
<meta name="revisit-after"  content="5 days">
```

## 1.10、referrer：是否包含来源页面

​		`referrer`有来源页面的意思，即表示当前页面是由哪个页面跳转过来的，具体则是跳转至当前页面的`http`请求的请求头中的`Referer`字段包含了上一个页面的`URL`地址。

​		可能会发现拼写少了一个`r`，正确的拼写其实是`Referrer`，但是由于`http`标准发布时没有发现拼写错误，所以就一直沿用至今。

**示例**：

当前页面的`URL`地址为`http://127.0.0.1:5500/`。

```html
<!DOCTYPE html>
<html lang="zh-CN">

<body>
  <a href="http://www.baidu.com">百度</a>
</body>

</html>
```

点击跳转至百度页面，查看页面请求的请求头。

![在这里插入图片描述](图片\meta示例图)

​		服务端可以统计用户来源，并以此进行统计分析、日志记录以及缓存优化等

​		但是注意`Referer`可能会暴露用户的浏览历史 ，并且很多时候当前页面的`URL`是会包含用户的个人信息的（例如`token`），所以某些时候需要移除、禁用或者修改策略。

```html
<meta name="referrer" content="">
```

**cont~ent**属性值如下。

- no-referrer：不发送Referer信息
- no-referrer-when-downgrade：默认值，安全级别下降时不发送Referer信息，目前仅一种情况安全级别下降，即https网页跳转至http网页，其它情况发送Referer完整信息
- origin：会发送Referer信息，但是仅发送源信息，包括协议、域名和端口号
- same-origin：仅同源链接发送Referer完整信息
- strict-origin：即origin与no-referrer-when-downgrade合并，安全级别下降时不发送Referer信息，安全级别未下降时发送 Referer源信息
- origin-when-cross-origin：跨域时发送Referer源信息，非跨域时即同源情况发送Referer完整信息
- strict-origin-when-cross-origin：同源链接发送Referer完整信息，安全级别下降时不发送Referer信息，其它情况发送Referer源信息
- unsafe-url：最不安全的策略，无论什么情况都发送 Referer完整信息

`meta`标签指定`content`是修改全局策略。

单个`a`标签可通过`referrerpolicy`属性修改局部策略，更多 [详细参考](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy)。

```html
<a href="http://www.baidu.com" referrerpolicy="no-referrer">百度</a>
```

# 三、http-equiv

## 1.1、content-type：`HTML`文档的字符编码

规定`HTML`文档的字符编码。

```html
<meta http-equiv="content-type" content="text/html; charset=utf-8">
```

## 1.2、content-language：当前页面存在的原因

标注页面的目标受众或者标注当前页面存在的语言

```html
<meta http-equiv="content-language" content="en">
```

## 1.3、content-script-type：页面脚本的类型

标注页面中脚本的类型。

```html
<meta http-equiv="content-script-type" content="text/javascript">
```

## 1.4、refresh：刷新/跳转（重定向）页面

刷新或跳转（重定向）页面，`content`表示刷新或跳转的时间与跳转的网址。

​		`3s`后刷新页面。

```html
<meta http-equiv="refresh" content="3">
```

​		`3s`后页面跳转至百度，跳转方式为当前窗口下跳转。

```html
<meta http-equiv="refresh" content="3; url=http://www.baidu.com">
```



## 1.5、expires：页面的缓存过期时间

指定网页在缓存中的过期时间，一旦网页过期，必须到服务器上重新加载到本地缓存才能访问。

指定网页在未来的某个时间过期，注意时间格式为`GMT`（格林尼治标准时间）

```html
<meta http-equiv="expires" content="Mon, 31 May 3021 06:00:00 GMT">
```

指定网页可在本地缓存的时间（秒），指定`0`或负数，则每次访问网页都需要从服务器重新加载内容。

```html
<meta http-equiv="expires" content="2000">
```

## 1.6、pragma：是否禁止从本地缓存总获取内容

禁止浏览器从本地缓存中访问页面的内容，即用户无法脱机浏览。

注意仅`IE`浏览器能识别此段`meta`标签含义，其它主流浏览器仅能识别`cache-control`属性的`meta`标签。为了网页兼容性，最好`pragma`和`cache-control`两者一起使用。

```html
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
```

## 1.7、window-target：页面显示窗口方式

设置页面显示的窗口方式，`content`参数如下，[详细参考](https://blog.csdn.net/Don_GW/article/details/109067049#target)。

- `_top`：页面以当前整个窗口的方式显示，可用于防止页面被其他网页嵌套
- `_black`：页面以新打开的方式显示
- `_self`：页面以当前容器或窗口显示
- `_parent`：页面以父容器或窗口显示

```html
<meta http-equiv="window-target" content="_top">
```

## 1.8、pics-label：网页等级评定

网页等级评定，`IE`浏览器可以根据网页的限制等级来过滤网页。

```html
<meta http-equiv="pics-label" content="">
```

## 1.9、page-enter / page-exit：页面过渡效果

设置网页退出和进入的过渡效果。

其中包括`blendTrans`淡入淡出过渡效果，此效果只能设置过渡持续时间（秒）。

另一种`revealTrans`，可以设置过渡效果类型和过渡持续时间（秒）。

​		淡入持续`5`秒。

```html
<meta http-equiv="page-enter" content="blendTrans(duration=5)">
```

​		矩形扩大持续`2`秒。

```html
<meta http-equiv="page-enter" content="revealTrans(duration=2, transition=1)">
```

其中transition过渡效果有24种，包括0（矩形缩小）、1（矩形扩大）、2（圆形缩小）、3（圆形扩大）、4（下到上刷新）、5（上到下刷新）、6（左到右刷新）、7（右到左刷新）、8（竖百叶窗）、9（横百叶窗）、10（错位横百叶窗）、11（错位竖百叶窗）、12（点扩散）、13（左右到中间刷新）、14（中间到左右刷新）、15（中间到上下）、16（上下到中间）、17（右下到左上）、18（右上到左下）、19（左上到右下）、20（左下到右上）、21（横条）、22（竖条）、23（以上22种随机选择一种）。

## 1.10、X-UA-compatible：设置浏览器渲染版本

​		针对IE8的特殊属性，指定在IE8浏览器内以哪种IE版本的模式来渲染页面内容，以此来解决IE浏览器的兼容问题。

  指定多个模式，如下在IE8中浏览页面时，将会使用IE7的标准模式渲染页面。由于IE8自身不支持IE9和IE10，而IE7是相对IE5和IE6的最高版本的渲染模式，故最终会以IE7渲染页面。

```html
<meta http-equiv="X-UA-compatible" content="IE=5,6,7,9,10">
```

​		使用最新版本的`IE`浏览器渲染页面，即使用的是什么版本的`IE`浏览器，就用什么版本的标准渲染模式。

```html
<meta http-equiv="X-UA-compatible" content="IE=edge">
```

​		指定`IE`浏览器使用`Google Chrome Frame`（`GCF`）模式渲染页面，`GCF`是谷歌内嵌浏览器框架，专门为`IE`浏览器开发的浏览器内核插件，支持`IE6`、`IE7`、`IE8`等多个版本的`IE`浏览器。

```html
<meta http-equiv="X-UA-Compatible" content="chrome=1">
```

​		绝大多数网站均使用如下方式，即`IE`浏览器安装了`GCF`插件，则使用`GCF`浏览器内核渲染页面，若未安装`GCF`插件，则使用最高版本的`IE`内核渲染页面。

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
```

## 1.11、cache-control：控制缓存请求和响应

用于控制浏览器和服务器之间的缓存请求和响应。

```html
<meta http-equiv="cache-control" content="">
```

其中`content`参数如下。

- public：可以在任何客户端（浏览器、本地缓存、各种代理服务器等）中缓存，但是不能设置缓存期限
- max-age：不仅可以被任何客户端缓存，而且还可以设置缓存期限。缓存期限是相对服务器时间而言的，超过设置时间，缓存则被认为过期，再次访问需要重新请求服务器加载缓存。如下最大缓存时间为60秒，超过60秒，缓存则被认为过期

```html
<meta http-equiv="cache-control" content="max-age=60">
```

- private：只能被单个用户缓存，不允许中间代理缓存。例如CDN不能缓存private的响应
- only-if-cached：若缓存存在，只使用缓存，不需要请求服务器加载更新内容
- no-cache：先发送请求，与服务器确认资源是否被修改，若未被修改，则使用缓存
- no-store：不允许缓存，再次访问需重新从服务器上加载缓存
- no-transform：不可对网页内容或网页中的资源进行转换，以便节省缓存空间
- no-siteapp：禁止百度、搜狗等搜索引擎对网页进行转码

​		禁止百度、搜狗等网页进行转码处理。

```html
<meta http-equiv="cache-control"  content="no-transform">
<meta http-equiv="cache-control"  content="no-siteapp">
```

​		每次打开网页，清除网页缓存。`http 1.1`协议需要用到`cache-control`来规范，而`http 1.0`适用`pragma`和`expires`来规范，为了网页兼容性，最好三个一起使用。

```html
<meta http-equiv="cache-control"  content="no-cache">
<meta http-equiv="pragma"  content="no-cache">
<meta http-equiv="expires"  content="0">
```

## 1.12、x-dns-prefetch-control：禁止隐式DNS预解析

禁用隐式的 DNS 预解析。

```html
<meta http-equiv="x-dns-prefetch-control" content="off">
```

# 四、移动端

## viewport

​		用于优化移动端的网页，使得`web`端的网页在手机端正常显示，页面布局不会错位。注意`meta`的`viewpoint`属性只对移动端浏览器有效，对`pc`端浏览器是无效的。

`viewport`主要包括如下三种类型。

- 布局视区：是指整个网页在移动端浏览器中显示的区域，此布局在大多数移动端浏览器中默认显示的宽度为980px（也有少部分1024px或者其他宽度的），故只要整个网页宽度不超过此默认值，页面就可以正常显示
- 可见视区：指的是移动端设备本身的屏幕显示区域，不同的移动设备，可见视区的尺寸也不同
- 理想视区：指的是布局视区能完美适配移动设备的可见视区，即布局视区的宽度等于可见视区的宽度，因此不需要缩放和横向滚动条就能正常查看整个网页

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

content值。

- width：控制布局视区的宽度，也可指定为固定宽度值，或者设置为device-width。如果width不设置或者为空，则使用默认宽度，即上述的980px或1024px。如果设置为device-width，则表示设置为理想视区，即布局视区宽度等于可见视区宽度。如果width设置为固定宽度，单位为px，也可以不带单位，默认单位为px
- height：控制布局视区的高度，一般不设置，极少使用
- initial-scale：设置布局视区初始化缩放比例（即每一次加载页面时的缩放比例），为一个数字，可以是小数。如果设置initial-scale为1，则和width=device-width一致，表示设置为理想视区。但是两者均有一个小缺陷，即width=device-width会导致iPhone和iPad横竖屏不分，initial=1.0会导致IE横竖屏不分，故两者都使用，可互相弥补缺陷
- maximum-scale：允许用户缩放的最大比例值，为一个数字，可以带小数。需要大于minimum-scale
- minimum-scale：允许用户缩放的最小比例值，为一个数字，可以带小数
- user-scalable：是否允许用户手动缩放布局视区，非必须参数，其中参数为no（不允许）、yes（允许）