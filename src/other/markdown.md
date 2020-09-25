# Markdown

不介绍了，一搜一堆  
[中文文档](http://www.appinn.com/markdown/index.html)  
[官网](https://daringfireball.net/)

<!-- more -->

## 语法规则

### 标题

```markdown
# 一级标题 表示 title

## 二级标题 表示 section

### 三级标题 表示 chapter

#### 四级标题 随便用用

##### 五级标题 随便用用

###### 六级标题 随便用用
```

### 列表

#### 有序列表

有序列表数字加点空格`1.`

```markdown
1. 苹果
2. 香蕉
3. 草莓
```

#### 无序列表

无序列表用`+`,`-`,`*`都可以

```markdown
-   苹果
-   香蕉
-   草莓
```

-   列表项
-   列表项
-   列表项
    镶嵌代码
-   列表项

### 块引用

引用文本前加`>`,hexo 里的好像比较丑,还是跟主题有关系？

> 醉里挑灯看剑
> 这个主题引用文本样式还是不错的

```markdown
> 这里是引用文本
> 这里是下一行引用文本
```

### 图片

![图片](www.turingbook.com/Content/img/Turing.Gif)
![皮卡丘](/img/pika.jpg)
![女装皮卡丘](/img/pikagirl.jpg)

```markdown
![alt](url"title")
```

### 链接

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[百度](https://www.baidu.com)

```markdown
[文字](url)
```

### 强调

两种强调方式,**粗体**,_斜体_

```markdown
**粗体**
_斜体_
```

### 表格

```markdown
| 表头   |   表头 |
| ------ | -----: |
| 表格项 | 表格项 |
```

代码块语言 [完整列表](http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html)

| 语言         | 代号                                              |
| :----------- | :------------------------------------------------ |
| Bash         | bash, sh, zsh                                     |
| CSS          | css                                               |
| CoffeeScript | coffeescript, coffee, cson, iced                  |
| DOS          | dos, bat, cmd                                     |
| HTML, XML    | xml, html, xhtml, rss, atom, xjb, xsd, xsl, plist |
| HTTP         | http, https                                       |
| Haml         | haml                                              |
| Handlebars   | handlebars, hbs, html.hbs, html.handlebars        |
| JSON         | json                                              |
| JavaScript   | javascript, js, jsx                               |
| Less         | less                                              |
| Markdown     | markdown, md, mkdown, mkd                         |
| Nginx        | nginx, nginxconf                                  |
| Perl         | perl, pl, pm                                      |
| Python       | python, py, gyp                                   |
| Ruby         | ruby, rb, gemspec, podspec, thor, irb             |
| SCSS         | scss                                              |
| SQL          | sql                                               |
| Shell        | shell, console                                    |
| TypeScript   | typescript, ts                                    |

### 代码框

    使用tab或者3个反引号,反引号后还可以跟语言名，见上边的表格

```bash
$ bash命令
$ npm list -g --depth 0
```

```javascript
;(function() {
    console.log('Hello markdown')
})()
```

    $ npm install
    $ npm list -g --depth 0

四个空格表示代码  
还能自动分辨语言进行着色

    window.onload = function (){
        console.log("ok");
    }


### 分割线

```markdown
---
```

### 文本

_斜体_, **粗体**,**_粗斜_**
~~删除线~~
==高亮==,这个高亮好像不支持
单行长文字

    这里是很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字.

<details><summary>展开原文</summary>内容......</details>

一个回车是空格，两个是换行，  
两个空格是段内换行

## 设置样式

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<style>
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote {
    margin: 0;
    padding: 0;
}
body {
    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    color: #737373;
    background-color: white;
    margin: 10px 13px 10px 13px;
}
table {
    margin: 10px 0 15px 0;
    border-collapse: collapse;
}
td,th { 
    border: 1px solid #ddd;
    padding: 3px 10px;
}
th {
    padding: 5px 10px;  
}
a {
    color: #0069d6;
}
a:hover {
    color: #0050a3;
    text-decoration: none;
}
a img {
    border: none;
}
p {
    margin-bottom: 9px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    color: #404040;
    line-height: 36px;
}
h1 {
    margin-bottom: 18px;
    font-size: 30px;
}
h2 {
    font-size: 24px;
}
h3 {
    font-size: 18px;
}
h4 {
    font-size: 16px;
}
h5 {
    font-size: 14px;
}
h6 {
    font-size: 13px;
}
hr {
    margin: 0 0 19px;
    border: 0;
    border-bottom: 1px solid #ccc;
}
blockquote {
    padding: 13px 13px 21px 15px;
    margin-bottom: 18px;
    font-family:georgia,serif;
    font-style: italic;
}
blockquote:before {
    content:"\201C";
    font-size:40px;
    margin-left:-10px;
    font-family:georgia,serif;
    color:#eee;
}
blockquote p {
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    margin-bottom: 0;
    font-style: italic;
}
code, pre {
    font-family: Monaco, Andale Mono, Courier New, monospace;
}
code {
    background-color: #fee9cc;
    color: rgba(0, 0, 0, 0.75);
    padding: 1px 3px;
    font-size: 12px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
pre {
    display: block;
    padding: 14px;
    margin: 0 0 18px;
    line-height: 16px;
    font-size: 11px;
    border: 1px solid #d9d9d9;
    white-space: pre-wrap;
    word-wrap: break-word;
}
pre code {
    background-color: #fff;
    color:#737373;
    font-size: 11px;
    padding: 0;
}
sup {
    font-size: 0.83em;
    vertical-align: super;
    line-height: 0;
}
* {
    -webkit-print-color-adjust: exact;
}
@media screen and (min-width: 914px) {
    body {
        width: 854px;
        margin:10px auto;
    }
}
@media print {
    body,code,pre code,h1,h2,h3,h4,h5,h6 {
        color: black;
    }
    table, pre {
        page-break-inside: avoid;
    }
}
</style>
