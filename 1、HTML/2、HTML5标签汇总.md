# 一、文档结构

`html`页面的基本结构如下，其中`head`为页面的头部信息，`body`为页面的主体信息。

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head></head>

<body></body>

</html>
```

# 二、文档元素

## 2.1、DOCTYPE

​		[DOCTYPE](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype) 即文档类型（`document type`），用于声明当前文档类型，告知浏览器使用哪种`HTML`版本（`<!DOCTYPE html>`表示`html 5`版本）渲染页面。

​		`DOCTYPE`不是`HTML`标签，没有结束标签，对大小写不敏感，并且必须位于`HTML`文档的首行

```html
<!DOCTYPE html>
```

## 2.2、html

​		[html](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML) 为文档的根元素，指明了文档的开始点和结束点，其中的所有元素都是`html`元素的后代。

```html
<html lang="zh-CN"></html>
```

`lang`属性可用于设置网页的语言种类，同时触发浏览器不同语言翻译。包括`en`（英语）、`fr`（法语）、`zh-CN`（中文）等

## 2.3、head

​		[head](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head) 元素规定了文档的配置信息（元数据），包括文档标题、引用的样式和脚本等。

​		可用于`head`元素内的有`<title>`、`<base>`、`<link>`、`<style>`、`<meta>`、`<script>`、`<noscript>`。

​		若文档中忽略了`<head>`标签，绝大多数浏览器会自动创建`<head>`元素

```html
<head></head>
```

## 2.4、body

​		文档的所有内容都在 [body](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/body) 元素中。

```html
<body></body>
```

# 三、元数据元素

​		元数据元素用来提供关于`HTML`文档的信息，其自身并不是文档内容，元数据元素均放在`<head>`标签中。

## 3.1、title

​		[title](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/title) 元素定义文档的标题，显示在浏览器的标题或标签页上。

​		`<title>`中应只包含文本，若其中包含有其他标签，浏览器不会解析对应的元素，而是显示为文本。

​		`<title>`是`<head>`标签中唯一要求包含的元素。

**注意：**良好的`title`标题更有助于搜索引擎优化（`SEO`）。

## 3.2、base

​		[base](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base) 元素用来指定文档中的所有相对`URL`的根`URL`。

​		<a\>、<img\>、<link\>、<video\>、<audio\>、<form\>等标签的相对URL都会与根URL拼接，注意若标签的URL为绝对URL，则不会发生拼接。style标签内的元素样式background-image: url()也会发生拼接。

​		如果指定了多个`<base>`元素，只会使用第一个`href`和`target`值, 其余都会被忽略。

```html
<base href="" target="">
```

**示例：**

一般标签的`URL`情况如下（以`link`标签的`URL`为例），当前`html`文件地址为`http://127.0.0.1:5500/dist/index.html`。

- 不指定根`URL`，`link`标签`URL`为`http://127.0.0.1:5500/dist/style.css`

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

- 指定根`URL`为绝对`URL`，`link`标签`URL`为`http://www.baidu.com/style.css`

```html
<head>
  <base href="http://www.baidu.com">
  <link rel="stylesheet" href="style.css">
</head>
```

- 指定根`URL`为相对`URL`，`link`标签`URL`为`http://127.0.0.1:5500/dist/css/style.css`。注意`<base>`的相对`URL`需要添加`/`，否则不会生效，结果与不指定根`URL`一致

```html
<head>
  <base href="css/">
  <link rel="stylesheet" href="style.css">
</head>
```

`base`元素的`target`属性（可选）用来设置页面中链接的打开方式，包括`_blank`（新窗口打开）、`_self`（当前窗口打开） 等

## 3.3、meta

指定页面的信息和部分行为。通常用于指定网页的描述，关键字等元数据

详见《HTML5之meta标签》

## 3.4、style

​		[style](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/style) 元素用来定义`HTML`文档内嵌的`CSS`样式。其中属性包括`type`、`media`等，`type`以 [MIME](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 类型定义样式语言，若未指定此属性，则默认为`text/css`，`media`指定样式适用于哪个媒体。

`css`媒体属性如下

- screen：计算机屏幕（默认值）
- tty：电传打字机以及使用等宽字符网格的类似媒介
- tv：电视类型设备（低分辨率、有限的屏幕翻滚能力）
- projection：放映机
- handheld：手持设备（小屏幕、有限的带宽）
- print：打印预览模式 / 打印页
- braille：盲人用点字法反馈设备
- aural：语音合成器
- all：适合所有设备

**示例：**

如下为浏览器窗口宽度`300px ≤ width < 500px`、`500px ≤ width < 700px`、打印预览模式中不同情况的样式。

```html
<style media="screen and (min-width: 300px) and (max-width: 500px)">
  p {
    color: blue;
  }
</style>
<style media="screen and (min-width: 500px) and (max-width: 700px)">
  p {
    color: red;
  }
</style>
<style media="print">
  p {
    color: yellow;
  }
</style>
```

## 3.5、link

## 3.6、script

## 3.7、noscript

在浏览器不支持`JavaScript`或者浏览器禁用了`JavaScript`时，显示`noscript`标签的内容。

[noscript](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/noscript) 是`html`中比较早期的标签，其目的是为了帮助早期浏览器的升级过渡的，早期浏览器并不能支持`JavaScript`，而`noscript`标签可作为`JavaScript`不可用时的替代方案。

注意不同浏览器禁用JavaScript的方式不同，其中谷歌浏览器地址栏可以输入chrome://settings/content/javascript跳转至设置页面，火狐浏览器地址栏输入about:config后，点击接受风险并继续进入设置页面，接着搜索javascript.enabled即可。

浏览器在不支持脚本时，页面跳转到替代页。

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <style>
    p {
      color: lightblue;
    }
  </style>
</head>

<body>
  <noscript>
    <p>We're sorry, but this page doesn't work properly without JavaScript enabled.</p>
    <meta http-equiv="refresh" content="1; https://www.baidu.com">
  </noscript>
</body>

</html>
```

# 四、文档内容

## 4.1、文本

### blockquote：引用长文本

[blockquote](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote) 用于引用长文本。

`block`是块级双标签，其中引用的文本内容会在左右两端缩进，增加`40px`的外边距。

其主要属性为`cite`，用于标记引用的信息的地址来源。

```html
<blockquote cite="https://www.baidu.com">
  This is a text from Baidu.
</blockquote>
```

### dl dt dd：定义列表

​		[dl](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl) 用于定义列表，其中列表项包含标题（[dt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dt)）和描述（[dd](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dd)）。

​		`dl`是块级双标签，`dt`和`dd`仅能作为`dl`的子元素，绝大多数浏览器都支持。

**注：**

- `dd`默认包含左外边距，不同浏览器的大小值有所差异。

### div：布局

​		[div](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 用于结构上划分内容，没有具体语义。

​		`div`是块级双标签元素。

```html
div {
  width: 200px;
  background: lightblue;
}

<div align="right">hello world</div>
```

### figure figcaption

### hr：分割线

​		[hr](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr) 用于呈现一条水平线

​		`hr`是块级单标签元素，早期版本中表示水平线，现在则被定义为语义上段落的转换。

​		主要属性如下，注意`hr`标签属性在`HTML4`中被废弃，`HTML5`中则不再支持，出于兼容性考虑，目前绝大多数浏览器仍然支持。

- `align`：水平线对齐方式，包括`left`（左对齐）、`center`（居中对齐）、`right`（右对齐）
- `color`：指定水平线颜色，可指定`hex`或颜色名称
- `noshade`：规定水平线颜色为纯色，而不是有阴影的颜色
- `size`：指定水平线高度，值为`px`或数值
- `width`：指定水平线宽度，值为`px`、数值或百分比

借助伪元素和`HTML`元素自定义属性，可实现多种分割线效果

**示例：**

```html
<div>
  <span>无阴影</span>
  <hr noshade>
  <span>CSS 无阴影</span>
  <hr style="background-color: #808080;">
  <span>有阴影</span>
  <hr>
</div>
```

## 4.2、行内文本

### a：超链接

### abbr：表示缩写词或者缩略词

​		[abbr](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr) 用于表示缩写词或者缩略词，是单词`abbreviation`的缩写。

  `title`属性包含缩写词的完整描述，一般鼠标悬浮时会显示。

  `abbr`是一个双标签的行内元素，其默认样式在不同浏览器存在差别。

- `IE`等浏览器：与`span`元素样式一致
- `Firefox`、`Chrome`等浏览器：元素添加点状下划线
- 其他浏览器：元素添加点状下划线和大小写字母的样式

```html
<span>hello <abbr title="Hyper Text Markup Language">HTML</abbr></span>
```

### b：加粗（无语义）

  b 标签一般在没有其他合适的元素时使用。

  HTML4之前b标签用于加粗文本，但是HTML4之后不再推荐标签带有样式信息。若不是出于语义目的使用b标签，最好还是通过CSS的方式去呈现。

  其它加粗标签中strong标签表示某些语义上的重要信息，em则表示强调文本，mark用于高亮文本。

```html
<b>hello world</b>
```

### bdi：文本内容隔离（HTML5新增）

  [bdi](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/bdi) 标签用于与其它文本内容隔离开。

  `bdi`是`HTML5`新增的行内双标签。

```html
<ul>
  <li><span class="title">Evil Steven</span>: 1st place</li>
  <li><span class="title">François fatale</span>: 2nd place</li>
  <li><span class="title">تیز سمی</span>: 3rd place</li>
</ul>
```


  浏览器下查看元素，其中的阿拉伯名字导致浏览器的文字方向算法将数字3显示在名字之前了。

![在这里插入图片描述](图片\bdi演示1)

  解决此情况则可以用bdi元素，将阿拉伯名字与其它文本隔离开来。

```html
<ul>
  <li><span class="title">Evil Steven</span>: 1st place</li>
  <li><span class="title">François fatale</span>: 2nd place</li>
  <li><bdi class="title">تیز سمی</bdi>: 3rd place</li>
</ul>
```


  浏览器呈现如下。

![在这里插入图片描述](图片\bdi演示2)

### bdo：改变文字方向（HTML5新增）

  [bdo](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/bdo) 用于改变文本的方向性。

  其主要属性为 `dir`，包括`ltf`（文本由左至右方向）、`rtl`（文本由右至左方向）。

  `bdo`也是`HTML5`新增的行内双标签。

```html
<p>hello <bdo dir="ltr">bdo</bdo> element</p>
<p>hello <bdo dir="rtl">bdo</bdo> element</p>
<p>hello <bdo dir="rtl">bdo</bdo> 11 element</p>
```

**注意：**若`bdo`标签后面是数字时，数字将会和`bdo`标签的文本按照`dir`属性设置的方向显示。

![在这里插入图片描述](图片\bdo标签)

### br：换行

  [br](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br) 用于在文档中生成换行。

  `br`是行内单标签元素，注意`br`元素的换行一般是自身内容的换行，例如`span`元素内容过长在浏览器中自动换行。而一般段落换行是通过增加其他元素的方式。

### cite：引用作品（散文、音乐、网页等）

  cite 用于引用作品（散文、音乐、网页等）。

  cite元素是行内双标签，其中文本为斜体效果，cite一般是用来引用作品本身，并不是引用内容。若要引用作品的部分内容，可以使用blockquote或者q元素。

  若引用的作品有URL可访问，还应当将其包含在a标签中，并且将href指向此URL。

```html
<p>The <a href="https://developer.mozilla.org/zh-CN/"><cite>MDN</cite></a> Web Docs...</p>
```

如下`cite`元素中文本为斜体，其中字体颜色和下划线是`a`标签的样式。

![在这里插入图片描述](图片\cite)

### code：呈现代码

  [code](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code) 用于呈现一段代码。

  `code`是行内双标签，其中文本默认显示的是等宽字体。

```html
<p>console.log("hello world")</p>
<code>console.log("hello world")</code>
```

![在这里插入图片描述](图片\code)

### data：将内容与机器可读的信息关联

  [data](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/data) 用于将内容与机器可读的信息关联。

  `data`是行内双标签，绝大多数浏览器支持，`IE8`及以下浏览器不支持。

  `value`属性值为提供给机器识别的信息，`data`元素内为用户可见的信息。

```html
<ul>
  <li><data value="1">HTML</data></li>
  <li><data value="2">CSS</data></li>
  <li><data value="3">JavaScript</data></li>
</ul>
```

### del：标识一些从文档中删除的文本

  del 用于标识一些从文档中删除的文本。

  del为行内双标签，其默认样式会在文本上显示删除线。属性包括cite和datetime，cite为URL，用于解释文本被删除的原因，datetime为特定时间格式，用于说明删除的日期时间。

  时间格式为YYYY-MM-DDThh:mm:ssTZD。

- YYYY：年
- MM：月
- DD：日
- T或空格：分隔符
- hh：时
- mm：分
- ss：秒
- TDZ：时区，Z表为格林尼治标准时间

```html
<del datatime="2021-07-30T15:06:25Z" cite="http://www.baidu.com">hello world</del>
```

![在这里插入图片描述](图片\del)

### dfn：标记专业术语或短语。

  [dfn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dfn) 用于标记专业术语或短语。

  `dfn`是行内双标签，内容一般为斜体。

```html
<p><dfn>有机食品</dfn>适用于那些不是使用化学制品而生成的食物。</p>
```

### em：强调文本（有语义）

  [em](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/em) 用于定义一个强调文本。

  `em`是语义化行内双标签，对其中包含的文本以斜体显示，有强调的作用。

```html
<p>You<em>have to</em> do something</p>
```

### i：区分于普通文本（无语义）

  [i](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i) 用于表现区分于普通文本的文本。

  `i`为行内双标签元素，默认样式为斜体。一般在没有合适的元素使用时，再考虑使用`i`元素。

```html
<span>hello <i>world</i></span>
```

## 4.3、表单

### button：按钮

### datalist：定义选项列表

  [datalist](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/datalist) 用于定义选项列表，与`input`元素配合使用。

  `datalist`包含一组`option`选项，通过`input`的`list`属性来关联`datalist`，再控制其显隐。绝大部分浏览器都支持，`IE9`及以下不支持。

**示例：**

```html
<label>
  <span>Language</span>
  <input list="language" />
</label>
<datalist id="language">
  <option value="JavaScript">
  <option value="Python">
  <option value="C++">
  <option value="Golang">
  <option value="Java">
</datalist>
```

`datalist`不仅可以像`select`进行选择，而且可以输入并且达到模糊匹配的效果。

![在这里插入图片描述](图片\datalist)

`datalist`一个比较好的应用实例是可用作动态邮箱后缀填充，兼容性 [详细参考](https://www.zhangxinxu.com/wordpress/2013/03/html5-datalist-实际应用-可行性/)。但是`datalist`的缺点也非常明显，就是不能随便定义其样式。

```html
<input type="email" list="suffix" />
<datalist id="suffix">
  <option value="*@qq.com">
  <option value="*@163.com">
  <option value="*@gmail.com">
  <option value="*@yahoo.com.cn">
  <option value="*@126.com">
</datalist>

<script>
  const input = document.querySelector('input')
  const datalist = document.querySelector('datalist')
  const options = datalist.querySelectorAll('option')
  const datalistInnerHtml = datalist.innerHTML

  input.addEventListener('input', function () {
    if (!this.value.includes('@')) {
      datalist.innerHTML = datalistInnerHtml.replace(/\*/g, this.value)
    }
  })
</script>

```

### fieldset

### form

## 4.4、表格

### caption

  caption 用来指定表格标题。

  caption是块级双标签，可位于table内任意位置，将始终显示在table上方且水平居中。

  属性align用于指定caption相对于table的排列位置，但是HTML5已废弃，仅仅IE8及以下浏览器还支持。

- left：顶部左方位
- top：顶部居中
- right：顶部右方位
- bottom：底部居中 

 虽然绝大多数浏览器不支持align，但是可以通过CSS的 caption-side 和text-align得到类似align属性的效果。

### col colgroup

## 4.5、内容分区

### address：定义 html 文档或文章的联系信息

  [address](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/address) 用于定义 html 文档或文章的联系信息。

  `<address>`元素位于`<body>`内部则表示文档联系信息，位于`<article>`内则表示文章的联系信息。

  `address`是一个块级的行内语义化标签，其内部的文本通常呈现**斜体**。

**示例**：

```html
<address>
  <ul style="list-style: none;">
    <li>作者：xx</li>
    <li>邮箱：xxx@email.com</li>
    <li>电话：123456789</li>
  </ul>
</address>
```

![在这里插入图片描述](图片\address)

### article：定义文档、章节等相关的文本结构

  [article](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article) 用于定义文档、章节、段落相关的文本结构，内部可包含 `header`、`footer`等结构化标签，也可包含`h1-h6`、`p`等标签。

  `<article>`也是`HTML5`新增的块级语义化标签。

  `IE8`及以下浏览器不支持`article`标签。

```html
<article>
  <header></header>
  <p></p>
  <footer></footer>
</article>
```

### aside：定义页面或文章的附属信息

  [aside](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside) 用来定义页面或文章的附属信息，通常作为页面的侧边栏，放置相关的网站信息。

  `<aside>`也是 `HTML5`新增的块级语义化标签。

  `IE8`及以下浏览器不支持`aside`标签。

### footer：定义页面的页脚或者页面中其它区块的页脚

  [footer](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer) 用于定义页面的页脚或者页面中其它区块的页脚。

  `footer`是块级双标签元素，于`HTML5`中新增，`IE8`及以下浏览器不支持。

### h1-h6：呈现六个不同级别的标题

  h1-h6 用于呈现六个不同级别的标题，h1到h6依次递减。

  h1-h6都是块级双标签，样式默认都是font-weight: bold，文字大小和行间距不一致。

  应当避免跳过某一级标题，始终从h1开始（字体过大可用CSS调整），然后依次往后使用。同一页面最好只有一个h1，用于页面标题，避免在同一页面重复使用h1。

  属性align可选值包括left（左对齐）、center（居中）、right（右对齐）等，HTML4不推荐使用，HTML5不被支持，可使用CSS。

```html
<h1 align='center'>hello world</h1>
```

### header：定义页面的头部/页面中其它区块的头部

​		[header](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header) 用于定义页面的头部或者页面中其它区块的头部。

  `header`是块级双标签元素，于`HTML5`新增，`IE8`及以下浏览器不支持。

![在这里插入图片描述](图片\header)

### hgroup：组合`h1-h6`元素形成多级标题

  [hgroup](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hgroup) 用于组合`h1-h6`元素形成多级标题。

  `hgroup`为块级双标签，于`HTML5`新增，`IE8`及以下浏览器不支持。

  `hgroup`存在的一个关键因素是实现`HTML`中标题的多层次结构，但是未在任何浏览器中实现。

```html
<body>
  <hgroup>
    <h1>HTML</h1>
    <h2>Table Element</h2>
  </hgroup>
  <h2>Form Element</h2>
  <h2>Other Element</h2>	
</body>
```

![在这里插入图片描述](图片\hgroup)

## 4.6、交互元素

#### details

  [details](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details) 用于创建一个类似手风琴效果的交互式控件。

  `details`为块级双标签，`IE`浏览器不支持。

`details`默认不显示内容，仅显示`summary`指定的文本，若不包含`summary`元素，将显示缺省文本`详细信息`。注意鼠标点击或者`Tab`键都可以聚焦`details`元素，聚焦后有聚焦样式，可通过空格键、`Enter`键、鼠标左键控制其显隐。

**示例**：

```html
<style>
  .bar {
    height: 30px;
    background: #888;
  }

  details {
    height: 30px;
    line-height: 30px;
    width: 100px;
    font-size: 14px;
    text-align: center;
    color: #888;
    background: #fff;
    margin-left: 40px;
    position: relative;
  }

  details summary:focus {
    outline: none;
    user-select: none;
  }

  details summary {
    list-style: none;
  }

  details summary::after {
    content: '';
    background: url(./arrow.svg) no-repeat;
    width: 12px;
    height: 12px;
    color: red;
    background-size: 100% 100%;
  }

  ul,
  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 5px 0;
    border: 1px solid #ddd;
    border-top: none;
    position: absolute;
    background: #fff;
    width: 100%;
  }

  ul li:hover {
    background: #f0f0f0;
  }
</style>

<div class="bar">
  <details>
    <summary>个人中心</summary>
    <ul>
      <li>写文章</li>
      <li>草稿箱</li>
      <li>我的主页</li>
    </ul>
  </details>
</div>
```

![在这里插入图片描述](图片\details)

### 4.7、内嵌元素

embed
  embed 用于将外部内容嵌入文档。

  object和embed起初都是作为扩展浏览器能力的一种方式，用于添加插件，从而处理浏览器不支持的内容。HTML4中将object纳入规范，而embed则未被纳入。由于作为非正式元素的embed也被广泛使用，因此HTML5中将embed也纳入规范。但是有必要知晓大多数现代浏览器已经弃用或者取消了对浏览器插件（例如Flash）的支持。

  embed是行内单标签，浏览器支持程度严重不一致。

  主要包括如下几种属性。

- src：指定嵌入内容的URL
- width：指定嵌入内容的宽度，可为百分比或px，指定数值默认为px。也可不设置宽度，浏览器将显示默认宽度
- height：与width属性类似
- type：指定嵌入内容的 MIME 类型，也可不指定，浏览器会根据嵌入内容的类型进行处理
- autostart：音频或视频在加载完成后，是否自动播放，仅IE浏览器支持。autostart="false"表示自动播放，autostart="true"表示禁用自动播放