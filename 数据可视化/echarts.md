# 一、Echarts介绍

1. echarts是一款基于JavaScript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的[数据可视化](https://so.csdn.net/so/search?q=数据可视化&spm=1001.2101.3001.7020)图表。ECharts最初由百度团队开源，并于2018年初捐赠给Apache基金会，成为ASF孵化级项目。
2. 学习一项技术的关键，还是需要多读官方文档，官网链接[Apache ECharts](https://echarts.apache.org/zh/index.html),与之类似的图表库还有D3，HeightCharts。
3. echarts的下载
   - 从npm获取：npm install echarts --save
   - 从CDN获取
   - 从GitHub获取

# 二、Echarts语法

## 1、Echarts常用语法

|  英文   | 汉语  |
| :-----: | :---: |
|  title  | 标题  |
| legend  | 图例  |
| tooltip | 提示  |
|  xAxis  | x轴线 |
|  yAxis  | y轴线 |
| series  | 系列  |
|  data   | 数据  |

## 2、图表常见类型

1. bar柱状图
2. line折线图
   1. 曲线图：加上smooth：true
   2. 面积图：加上areaStyle:{fill:'#f70'}
3. pie饼型图
   1. 环形图：加上radius:[80,50]

