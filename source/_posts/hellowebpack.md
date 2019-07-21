---
title: Hello webpack
date: 2017-06-13 09:49:21
tags: webpack
categories: tools
---

超级火的打包工具，感觉不会都要失业了
[官网地址](http://webpack.github.io/)
[中文文档](http://www.css88.com/doc/webpack2/)

<!-- more -->

## 安装

``` bash
npm install webpack -g
npm install webpack --save-dev
```

## 基本用法

``` bash
webpack hello.js hello.bundle.js
```

结果如下图: 
Hash: 本次打包 hash 值
Version: webpack 版本
Time: 本次打包所用时间
Asset: 生成文件
Size: 文件体积
Chunks: 分块
Chunks Name: 分块名称

![webpack](/img/webpack.png)

## cli

命令行参数
watch: 监听文件
progress: 打包过程
display-modules: 打包模块
display-reasons: 打包原因

## config

配置文件默认文件名 webpack.config.js

## entry

entry 有3种写法

1. 单文件

``` javascript
module.exports = {
    entry: './src/scripts/main.js'
}
```

2. 数组

``` javascript
module.exports = {
    entry: ['./src/scripts/main.js', './src/scripts/a.js']
}
```

3. 对象

``` javascript
module.exports = {
    entry: {
        page1: './src/entry',
        page2: ['./src/entry1', './src/entry2']
    }
}
```

## output

### path

### filename

## 插件

html-webpack-plugin 的使用

``` bash
npm install --save-dev html-webpack-plugin
```

``` javascript
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {},
    output: {},
    plugins: {
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    }
}
```
