# Pug/Jade

## 介绍

Pug是一个模板引擎，常用做Nodejs模板引擎，另一个常用的Nodejs模板引擎是EJS。

## 学习目标

使用 `Pug` 完成一个较为复杂的 `HTML` 页面，包括h1，div，p，ul，li，span，a，i，form，input，img等标签

## 安装

```bash
npm install -g pug-cli
```

## 用法

### 命令行

```bash
# 假设在当前文件夹下有index.pug文件
# 编译并输出文件，默认为index.html
pug index.pug
# 输出到指定目录
pug -o index.pug
# 指定对象格式的属性，也可以指定一个配置文件
pug -O "{doctype: 'html'}" index.pug
# 不压缩代码
pug -P
```

## 语法

Pug的语法没有尖括号，没有闭合标签，每行开头一个HTML标签名加一个空格表示HTML标签，缩进表示包含关系，一个简单的Pug文件如下：

```pug
header
    title pug基础语法
body
    h1#title pug基础语法
    div
        ul.template-list
            li Pug/Jade
            li EJS
```

混写

- 缩进表示包含
- #表示id
- .表示class
- ()表示属性
- -表示js语句

### 属性

基础，使用`,`分隔多个属性，也可以使用空格，属性名=属性值，属性值部分可以使用js表达式

```pug
// 基础
a(class='link' href='www.baidu.com') 百度
a(class='link', href='www.baidu.com') 百度
// js表达式
- var authenticated = true
div(class=authenticated ? 'authed' : 'anon')
// 多行属性
input(
  type='checkbox'
  name='agreement'
  checked
)
// ES6字符串模板
input(data-json=`
    {
        "非常": "长的",
        "数据": true
    }
`)
// 不转义的属性，默认属性值都会经过转义，如果需要使用特殊符号用作属性值，可以使用 !=
div(unescaped!="<code>")
// class可以直接指定一个数组
- var classes = ['foo', 'bar', 'baz']
div(class=classes)
// 或者使用布尔值
- var currentUrl = '/about'
a(class={active: currentUrl === '/'} href='/') Home
|
|
a(class={active: currentUrl === '/about'} href='/about') About
// 类名可以使用.，div标签可以省略
.content
// id使用#
#title
// &attributes可以把一个对象转化成HTML属性
div#foo(data-bar='foo')&attributes({'data-foo': 'bar'})
// 或者
- var attributes = {};
- attributes.class = 'baz';
div#foo(data-bar="foo")&attributes(attributes)
```

### 分支语句

Pug支持 `case` 关键字实现 JavaScript 中 `switch` 语句的功能

``` pug
- var friends = 10
case friends
    when 0
        p 您没有朋友
    when 1
        p 您有一个朋友
    default
        p 您有 #{friends} 个朋友
```

### 注释

``` pug
// 输出到HTML的注释
//- 不输出到HTML的注释
```

### 条件语句

``` pug
- var user = { description: 'foo bar baz' }
- var authorised = false
#user
    if user.description
        h2.green 描述
        p.description= user.description
    else if authorised
        h2.blue 描述
        p.description
            用户没有添加描述。
            不写点什么吗...
    else
        h2.red 描述
        p.description 用户没有描述
```

### 过滤器

通过过滤器可以在 `Pug` 中使用其他语言，所有的 JSTransformer 模块都可以被用作 `Pug` 的过滤器。有名的过滤器比如 `:babel`、`:uglify-js`、`:scss` 和 `:markdown-it`，甚至可以自定义过滤器。以下是一个 `Markdown` 的例子。

安装

``` bash
npm install --save jstransformer-markdown-it
```

``` pug
:markdown-it(linkify langPrefix='highlight-')
    # Markdown

    Markdown document with http://links.com and

    ```js
    var codeBlocks;
    ```
```

### 包含

`include` 关键字可以引入其他 `Pug` 文件。

``` pug
//- index.pug
doctype html
html
    include common/header.pug
    body
        h1 Pug语法入门
        include common/footer.pug

//- common/header.pug
head
    title Pug语法入门
    script(src='/javascripts/jquery.js')

//- common/footer.pug
footer#footer
    p Copyright (c) 123
```

## 参考文档

1. [Pug中文文档](https://pug.bootcss.com/api/getting-started.html)
