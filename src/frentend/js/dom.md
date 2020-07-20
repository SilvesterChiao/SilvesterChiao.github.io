<!--
 * @Author: SilvesterChiao
 * @Date: 2020-07-02 14:49:35
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-07-03 11:07:36
--> 

# DOM (文档对象模型)

DOM 是 Document Object Model 的缩写, 定义了访问和操作 HTML 和 XML 文档的标准方法, 是 W3C 标准之一。  
DOM 包括以下三个部分:

* 核心 DOM
* XML DOM
* HTML DOM

## HTML DOM

HTML DOM 是:

* HTML 的标准对象模型
* HTML 的标准编程模型
* W3C 标准

HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。  
换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。

HMTL DOM 将整个 HTML 文档中的所有内容都视为节点

## 节点

根据 W3C 的 HTML DOM 标准, HTML 文档中的所有内容都是节点:

- 这个文档是一个文档节点
- 每个 HTML 元素都是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

节点的关系

![HTML DOM Tree](../../../assets/images/ct_htmltree.gif)

父节点 parent
子节点 child
同胞节点 sibling

节点是一个对象, 编程接口是对象的方法和属性

### 常用方法

- 获取节点
  - var app = document.getElementById('app')
  - getElementsByTagName
  - getElementsByClassName
- 创建节点
  - createElement
  - createTextNode
  - createAttribute
- 删除节点
  - removeChild(node)
- 复制节点
  - cloneNode
- 添加节点
  - appendChild(node)
  - insertBefore
- 替换节点
  - replaceChild
- hasChildNodes
- getRootNode
- isEqualNode
- isSameNode

### 常用属性

- parentNode: 父节点
- parentElement: 父元素
- childElementCount: 子元素数量
- firstChild: 第一个子节点
- lastChild: 最后一个子节点
- firstElementChild: 第一个子元素
- lastElementChild: 最后一个子元素
- childNodes: 子节点
- children: 子元素
- previousSibling: 前一个节点
- nextSibling: 后一个节点
- previousElementSibling: 前一个元素
- nextElementSibling: 后一个元素

## 属性

- 获取属性
  - innerHTML
  - attributes
  - getAttribute

- 修改属性
  - setAttribute

### 节点相关属性

| - | nodeType | nodeName | nodeValue |
| ---- | :----: | ---- | ---- |
| 元素节点 | 1 | 同标签名 | undefined或null |
| 属性节点 | 2 | 同属性名 | 同属性值 |
| 文本节点 | 3 | #text | 同文本本身 |
| 注释节点 | 8 | - | - |
| 文档节点 | 9 | #document | - |

class

- 获取类名
  - className
- 添加类名
  - classList.add
- 删除类名
  - classList.remove

修改 HTML (元素、属性、样式、事件)

* 改变 HTML 内容
* 改变 CSS 样式
* 改变 HTML 属性
* 创建新的 HTML 元素
* 删除已有的 HTML 元素
* 改变事件

```javascript
// 使用 innerHTML
var p = document.getElementById('p');
p.innerHTML = '修改文本'
// 修改样式
p.style.color = 'red'
// 创建新的 HTML 元素
var span = document.createElement('span')
var text = document.createTextElement('文本节点')
span.appendChild(text)
p.appendChild(span)
```

## 事件

- 点击鼠标
- 页面加载
- 图片加载
- 鼠标移入
- 输入字段
- 表单提交
- 触发按键

```html
  <body onload="checkCookies()">
    <input type="text" id="fname" onchange="upperCase()" />
  </body>

  <script>
    var button = document.getElementById('button')
    button.onclick = function(){}
  </script>
```

- onmouseover
- onmouseout: 子元素也会触发
- onmousedown
- onmouseup
- onmouseleave
- onmouseenter
- onmousemove
- onmousewheel

- document.documenElement
- document.head
- document.body
- document.title
- document.forms
- document.links
- document.images
- document.all
- document.write

## 常见问题

1. node 和 element 的区别

node 包括所有节点, element 只表示 HTML 元素节点

## 参考链接

1. [w3school HTML DOM 教程](https://www.w3school.com.cn/htmldom/index.asp)
