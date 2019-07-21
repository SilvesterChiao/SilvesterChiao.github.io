---
title: Markdown 备忘录
date: 2017-06-08 13:31:19
tags: markdown
categories: 通用技能
---

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

![皮卡丘](/img/pika.jpg)
![女装皮卡丘](/img/pikagirl.jpg)

```markdown
![alt](url"title")
```

### 链接

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
