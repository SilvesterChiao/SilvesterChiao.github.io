---
title: animate.css 笔记
date: 2017-06-09 10:03:10
tags: animate.css
categories: CSS
---

这里是 animate.css 的简介

<!-- more -->

## 兼容

支持CSS3 animate 属性的浏览器，即 IE10+， Firefox， Chrome， Opera， Safari

## 安装

通过 bower 安装

``` bash
$ bower install animate.css --save
```

通过 npm 安装

``` bash
$ npm install animate.css --save
```

## 引用

通过 link 引用

``` html
<head>
    <link rel="stylesheet" href="animate.min.css">
</head>
```

通过 import 引用，以 vue 为例(目前我只知道这个)

``` javascript
import animate from 'animate.css'
import 'animate.css/animate.css'

Vue.use(animate)
```

## 基本用法

基本类 animated , 无限循环类 infinite 

动画样式类列表

| 分类 | className | 效果 |
| --- | --- | --- |
| Attention | bounce | 反弹 |
| Attention | flash | 闪烁 |
| Attention | pulse | 脉冲 |
| Attention | rubberBand | null |
| Attention | shake | null |
| Attention | headShake | null |
| Attention | swing | null |
| Attention | tada | null |
| Attention | wobble | 晃动 |
| Attention | jello | 果冻 |
| Bouncing Entrances | bounceIn | 弹入 |
| Bouncing Entrances | bounceInDown | 弹入 |
| Bouncing Entrances | bounceInLeft | 弹入 |
| Bouncing Entrances | bounceInRight | 弹入 |
| Bouncing Entrances | bounceInUp | 弹入 |
| Bouncing Exits | bounceOut | 弹出 |
| Bouncing Exits | bounceOutDown | 弹出 |
| Bouncing Exits | bounceOutLeft | 弹出 |
| Bouncing Exits | bounceOutRight | 弹出 |
| Bouncing Exits | bounceOutUp | 弹出 |
| Fading Entrances | fadeIn | 淡入 |
| Fading Entrances | fadeInDown | 淡入 |
| Fading Entrances | fadeInDownBig | 淡入 |
| Fading Entrances | fadeInLeft | 淡入 |
| Fading Entrances | fadeInLeftBig | 淡入 |
| Fading Entrances | fadeInRight | github 上漏写了 |
| Fading Entrances | fadeInRightBig | github 上漏写了 |
| Fading Entrances | fadeInUp | 淡入 |
| Fading Entrances | fadeInUpBig | 淡入 |
| Fading Exits | fadeOut | 淡出 |
| Fading Exits | fadeOutDown | 淡出 |
| Fading Exits | fadeOutDownBig | 淡出 |
| Fading Exits | fadeOutLeft | 淡出 |
| Fading Exits | fadeOutLeftBig | 淡出 |
| Fading Exits | fadeOutRight | 淡出 |
| Fading Exits | fadeOutRightBig | 淡出 |
| Fading Exits | fadeOutUp | 淡出 |
| Fading Exits | fadeOutUpBig | 淡出 |
| Flippers | flip | github 上没有 |
| Flippers | flipInX | null |
| Flippers | flipInY | null |
| Flippers | flipOutX | null |
| Flippers | flipOutY | null |
| Lightspeed | lightSpeedIn | 高速移入 |
| Lightspeed | lightSpeedOut | 高速移出 |
| Rotating Entrances | rotateIn | 旋入 |
| Rotating Entrances | rotateInDownLeft | 旋入 |
| Rotating Entrances | rotateInDownRight | 旋入 |
| Rotating Entrances | rotateInUpLeft | 旋入 |
| Rotating Entrances | rotateInUpRight | 旋入 |
| Rotating Exits | rotateOut | 旋出 |
| Rotating Exits | rotateOutDownLeft | 旋出 |
| Rotating Exits | rotateOutDownRight | 旋出 |
| Rotating Exits | rotateOutUpLeft | 旋出 |
| Rotating Exits | rotateOutUpRight | 旋出 |
| Specials | hinge | null |
| undefined | ~~jackInTheBox~~ | github 上有 |
| Specials | rollIn | null |
| Specials | rollOut | null |
| Zoom Entrances | zoomIn | 放入 |
| Zoom Entrances | zoomInDown | 放入 |
| Zoom Entrances | zoomInLeft | 放入 |
| Zoom Entrances | zoomInRight | 放入 |
| Zoom Entrances | zoomInUp | 放入 |
| Zoom Exits | zoomOut | 缩出 |
| Zoom Exits | zoomOutDown | 缩出 |
| Zoom Exits | zoomOutLeft | 缩出 |
| Zoom Exits | zoomOutRight | 缩出 |
| Zoom Exits | zoomOutUp | 缩出 |
| Sliding Entrances | slideInDown | 滑入 |
| Sliding Entrances | slideInLeft | 滑入 |
| Sliding Entrances | slideInRight | 滑入 |
| Sliding Entrances | slideInUp | 滑入 |
| Sliding Exits | slideOutDown | 滑出 |
| Sliding Exits | slideOutLeft | 滑出 |
| Sliding Exits | slideOutRight | 滑出 |
| Sliding Exits | slideOutUp | 滑出 |

## 动态控制

另有动态使用方法, 通过js或jq动态插入(删除)类名

## 相关链接

[ animate github地址](https://github.com/daneden/animate.css)
[效果演示地址](https://daneden.github.io/animate.css/)