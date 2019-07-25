## CanvasUtils

这是一个轻量级[小而美]的 canvas 绘图/游戏引擎，目前已经实现的 API 如下 List 列表，examples 里面是关于各种 API 实现的调用示例

注\*因为是本示例是通过 JS 静态引用，所以没有用模块的形式引用

## List

1. demo01

```
A： 调用现有的 Canvas DOM
B： 生成一个唯一的 class ID (基于字符 canvas + 当前计算机时间)
```

2. demo02

```
A:  检测当前是否有Canvas
B： 在没有传参的前提下自动向body追加一个Canvas
C： 生成一个唯一的 class ID (基于字符 canvas + 当前计算机时间)
```

3. demo03

```
异步预加载图片,返回图片列表对象
```

4. demo04

```
为画布设置基础属性，目前可配置属性有如下：

width // 画布宽度
height // 画布高度
background // 基于样式实现的画布颜色 非canvas实现
mode // 即将实现的（暂未实现）平铺模式
```

5. demo5

```
工具功能，绘制可配置的线条

x: 100,  // 起始x位置
y: 100, // 起始y位置
eX: 300, // 结束x位置
eY: 300, // 结束y位置
lineWidth: 10, // 线粗细
strokeStyle: "red" // 填充色
```

6. demo6

```
工具功能，绘制可配置的块
x: 150,
y: 150,
width: 200,
height: 200,
lineWidth: 5,
strokeStyle: "red",
fillStyle: "blue",
fill: true
```

7. demo7

```
工具功能，绘制可配置的圆

x: 100,
y: 100,
r: 50,
sAngle: 0,
eAngle: 2 * Math.PI,
fill: true,
fillStyle: "red",
lineWidth: 30,
strokeStyle: "green",
counterclockwise: true
```

8. demo8

```
工具功能，绘制可配置的文字

对齐方式在开发中

text: "Hello World !",
size: 40,
color: "blue",
family: "Microsoft YaHei",
weight: "bold",
lineHeight: 40,
x: 100,
y: 100
```
