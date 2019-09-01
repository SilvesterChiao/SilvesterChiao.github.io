# Emmet

> Emmet(前身为 Zen Coding)是一个前端编码工具  
> [前端开发必备！Emmet 使用手册](https://www.w3cplus.com/tools/emmet-cheat-sheet.html)  
> [官网](https://www.emmet.io/)  
> [文档](https://docs.emmet.io/cheat-sheet/)

## 语法

### 后代: >

```javascript
nav > ul > li;
```

### 兄弟: +

```
div+p+bq
```

### 上级: ^

```
div+div>p>span+em^bq
div+div>p>span+em^^bq
```

### 分组: ()

```
div>(header>ul>li*2>a)+footer>p
(div>dl>(dt+dd)*3)+footer>p
```

### 乘法: \*

```
ul>li*5
```

### 自增符号: \$

```
ul>li.item$*5
h$[title=item$]{Header $}*3
ul>li.item$$$*5
ul>li.item$@-*5
ul>li.item$@3*5
```

### ID 和类属性: #, .

```
#header
.title
form#search.wide
p.class1.class2.class3
```

### 自定义属性: []

```
p[title="Hello world"]
td[rowspan=2 colspan=3 title]
[a='value1' b="value2"]
```

### 文本: {}

```
a{Click me}
p>{Click }+a{here}+{ to continue}
```

### 隐式标签

```
.className
em>.className
ul>.className
table>.row>.col
```

### HTML

```
!
a
a:link
a:mail
abbr
acronym
base
basefont
br
frame
hr
bdo
bod:r
bdo:l
col
link
link:css
link:print
link:favicon
link:touch
link:rss
link:atom
meta
meta:utf
meta:win
meta:vp
meta:compat
style
script
script:src
img
iframe
embed
object
param
map
area
area:d
area:c
area:r
area:p
form
form:get
form:pose
label
input
inp
input:hidden
input[type=hidden name]
input:h
input[type:hidden]
input:text, input:t
inp
input:search
input[type=search]
input:emial
inp[type=email]
input:url
inp[type=url]
input:password
inp[type=password]
input:datetime
inp[type=datetime]
input:date
inp[type=date]
input:datetime-local
inp[type=datetime-local]
input:month
inp[type=month]
input:week
inp[type=week]
input:time
inp[type=time]
input:number
inp[type=number]
input:color
inp[type=color]
input:checkbox
input:c
input:radio
input:r
input:range
input:file
input:f
input:submit
input:s
input:image
input:i
input:button
input:b
isindex
input:reset
select
option
textarea
menu:context
menu:c
menu:t
video
audio
html:xml
keygen
command
bq
acr
fig
figc
ifr
emb
obj
src
cap
colg
fst, fset
btn
btn:b
btn:r
btn:s
```
