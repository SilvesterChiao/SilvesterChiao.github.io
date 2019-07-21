---
title: jquery readme 翻译
date: 2017-06-27 09:11:10
tags: jquery
categories: jquery
---

# jQuery —— New Wave JaveScript

## Contribution Guides

## 使用环境

- 浏览器支持
- jQuery 也支持 Node, 浏览器扩展,和其他非浏览器环境

## 构建 jQuery 需要

为了构建 jQuery , 你需要最新版本的 Nodejs/NPM 和 git 1.7以上 .

## 如何构建

运行一下命令克隆一个 jQuery 的副本

``` bash
git clone git://github.com/jquery/jquery.git
```

进入 jquery 目录运行 build 脚本

``` bash
cd jquery && npm run build
```

构建的 jQuery 将会在 `dist/` 子目录,同时还有 map 文件.如果你想构建自定义 jQuery 或者帮助 jQuery 开发，最好全局安装 grunt 命令行工具
``` bash
npm install -g grunt-cli
```

测试安装

``` bash
grunt -V
```

现在你可以通过在 jquery 目录运行 `grunt` 命令，来构建完整版本的 jQuery, 就像用 `npm run build` 命令一样

``` bash
grunt
```

jQuery 核心还有许多其他可用任务

``` bash
grunt -help
```

## 模块

