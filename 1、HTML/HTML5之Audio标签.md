# 一、概述

- audio 用于在文档中嵌入音频元素。
- audio元素是`HTML5`新增的行内标签，`IE8`及以下浏览器不支持`audio`标签。
- 若浏览器不支持`video`元素或者无法播放音频，则会显示替代文本（开始和结束标签之间的内容）。

**示例**：

```html
<audio src="music.mp3">当前浏览器不支持audio标签</audio>
```

# 二、标签属性

| 属性     | 值                 | 描述                                                         |
| -------- | ------------------ | ------------------------------------------------------------ |
| autoplay | autoplay           | 音频会尽快自动播放，不会等待整个音频下载完成                 |
| controls | controls           | 浏览器提供包括声音、播放进度、播放暂停的控制面板（不同浏览器不一致），用户可以控制音频播放 |
| loop     | loop               | 循环播放音频                                                 |
| muted    | false/true         | 是否静音，默认值为false                                      |
| preload  | auto/metadata/none | 预加载，包括auto、metadata和none三个参数值，auto表示加载音频，metadata表示不加载音频，但是需要获取音频元数据（如音频长度），none表示不加载音频。若指定为空字符串，则等效于auto。注意autoplay属性优先级高于preload，若autoplay被指定，则会忽略此属性，浏览器将加载音频以供播放 |
| src      | url                | 嵌入的音频URL                                                |

# 三、元素属性

## 3.1、只读

- `duration`：双进度浮点数，音频的播放时长，以秒为单位。若音频不可用或者音频未加载，则返回`NaN`
- `paused`：若音频被暂停或者未开始播放，则返回`true`
- `ended`：音频是否播放完毕，播放完毕则返回`true`
- `error`：发生错误情况下的`MediaError`对象
- `currentSrc`：返回正在播放或加载的音频的`URL`地址，对应于浏览器在`source`元素中选择的文件
- `seeking`：用户是否在音频中移动或者跳跃到新的播放点

```html
<audio preload="auto" src="music.mp3" onseeking="fn()" controls />
<script>
  var audio = document.querySelector('audio')

  function fn() {
    console.log(audio.seeking)
  }
</script>
```

## 3.2、可读写

- autoplay：设置音频自动播放，或者查询音频是否设置`autoplay`
- loop：设置或者查询音频是否循环播放
- currentTime：返回音频当前的播放时间点，双精度浮点数，单位为秒。音频未播放，可用于设置音频开始播放的时间点。音频播放过程中，可用于设置音频播放时间点
- controls：显示或隐藏音频控制面板，或者查询控制面板是否可见
- volume：返回音量值，介于0-1之间的双进度浮点数，或者设置音量值
- muted：设置或者查询是否静音
- playbackRate：设置或者查询音频的播放速度，1表示正常速度，大于1表示快进，0-1之间表示慢进，0表示暂停（控制面板仍然是播放，仅仅是速度为0）

## 3.3、特殊属性

#### played

  表示用户已经播放的音频范围，返回 TimeRanges 对象，其中TimeRanges对象包括一个length属性和start()、end()两个方法。

- length：获取音频范围的数量，未开始播放为0，开始播放后至少为1
- start(index)：获取某个音频范围的开始位置
- end(index)：获取某个音频范围的结束位置

#### buffered

 	表示浏览器已经缓存的音频范围，返回`TimeRanges`对象，若音频已完全加载则`buffered.length`为`1`，`buffered.start(0)`为`0`，`buffered.end(0)`为音频时长，详细参考。

#### seekable

​		表示用户可跳转或移动的音频范围，返回TimeRanges对象，若音频已完全加载则seekable.length为1，seekable.start(0)为0，seekable.end(0)为音频时长。音频未加载或者加载错误，则seakable.length为0，对应的start(0)和end(0)也就不存在

#### networkState

获取音频的网络范围

- `0`：`NETWORK_EMPTY`，音频尚未初始化
- `1`：`NETWORK_IDLE`，浏览器已选择好采用什么编码格式来播放媒体，但尚未建立网络连接
- `2`：`NETWORK_LOADING`，浏览器正在加载
- `3`：`NETWORK_NO_SOURCE`，未找到音频资源

#### error

​		通常正常加载音频，则返回`null`，若加载过程中发生错误，浏览器将会返回`MediaError`对象。`MediaError`对象包括`code`和`message`属性，`message`为错误描述信息，`code`为如下错误码。

- MEDIA_ERR_ABORTED，音频加载加载过程中由于用户操作而被终止
- MEDIA_ERR_NETWORK，确认音频资源可用，但是加载时出现网路错误，音频加载被终止
- MEDIA_ERR_DECODE，确认音频资源可用，但是解码发生错误
- MEDIA_ERR_SRC_NOT_SUPPORTED，音频格式不被支持或者资源不可用

# 四、方法

### play

播放音频，返回`Promise`，播放成功时为`resolved`，因为任何原因播放失败为`rejected`

**示例：**

```js
var audio = document.querySelector('audio')

audio
  .play()
  .then(() => { })
  .catch(() => { })
```

### pause

暂停音频，无返回值

```js
var audio = document.querySelector('audio')

audio.pause()
```

### load

重新加载`src`指定的资源

```js
var audio = document.querySelector('audio')

audio.src = 'music.mp3'
```

# 五、事件

## 5.1、常用事件

- **loadstart**：开始载入音频时触发
- **durationchange**：duration属性更新时触发
- **loadedmetadata**：音频元数据加载完成时触发
- **loadeddata**：音频的第一帧加载完成时触发，此时整个音频还未加载完
- **progress**：音频正在加载时触发
- **canplay**：浏览器能够开始播放音频时触发
- **canplaythrough**：浏览器预计在不停下来进行缓冲的情况下，能够持续播放指定的音频时会触发

## 5.2、其他事件

- **abort**：音频终止时触发，非错误导致
- **emptied**：音频加载后又被清空，如加载后又调用 load 重新加载
- **ended**：播放结束，若设置loop属性，音频播放结束后不会触发
- **error**：发生错误
- **play**：播放事件，第一次播放、暂停后播放会触发
- **playing**：播放事件，第一次播放、暂停后播放、播放结束后循环播放会触发
- **pause**：暂停事件
- **ratechange**：播放速率改变
- **seeking**：播放点改变开始
- **seeked**：播放点改变结束
- **stalled**：浏览器尝试获取音频，但是音频不可用时触发
- **suspend**：音频加载暂停时触发
- **timeupdate**：音频currentTime改变时触发
- **volumechange**：音量改变时触发，包括静音
- **waiting**：开始播放前缓冲下一帧时触发

# 使用注意事项

## 1、兼容浏览器问题

​		不同浏览器支持的音频播放格式有所不同，一般为了兼容效果，会放置多种音频格式，浏览器会自上而下选择符合的音频格式。

```html
<audio controls>
  <source src="music.ogg" type="audio/ogg" />
  <source src="music.mp3" type="audio/mpeg" />
  <source src="music.wav" type="audio/Wav" />
  当前浏览器不支持audio标签
</audio>
```

