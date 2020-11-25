# CSS

1. 选择器

伪类, 伪元素

选择器 **从右向左** 解析

优先级: !important > 内联样式 > ID > class > 元素选择器 > * > 继承 > 默认

效率:

关系选择器: 

属性选择器:

2. 盒模型(Box Model)

影响属性: width, height, margin, padding, border

标准盒模型(box-sizing: content-box;): width、height等于 content 的宽高

IE 盒模型(box-sizing: border-box;)：width、height等于 content 的宽高 + padding + border

body 元素默认有 8px 的 margin

块级元素(Block-level elements):

- 宽度默认为父元素的100%, 只能出现在 body 元素内, 可以包含块级元素和内联元素
- h1, h2, h3, h4, h5, h6, hgroup
- div, header, footer, article, section, aside, figcaption, figure
- p, table, tfoot, ol, ul, dl, dd
- form, output, fieldset, address
- noscript, hr, blockquote, pre
- audio, video, canvas

内联元素(Inline elements):

- 默认与相邻元素同行, 设置 width, height, padding, margin等属性不生效(padding, margin-right, margin-left生效),一般情况下只能包含数据和其他内联元素
- b, big, i, small, tt
- abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
- a, bdo, br, img, map, object, q, script, span, sub, sup
- button, input, label, select, textarea

img: 行内替换元素

```css
/* 清除默认 margin/padding */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{
  margin:0;
  padding:0;
}
```

3. 块格式上下文(Block Formatting Context, BFC)

- 根元素(html)
- 浮动元素
- 绝对定位元素
- 行内块元素
- 表格单元格
- 表格标题
- 匿名表格单元格元素
- overflow 的值不为 `visible` 的元素
- display 值为 `flow-root` 的元素
- contain 的值为 `layout`, `content` 或者 `paint` 的元素
- 弹性元素
- 网格元素
- 多列容器
- column-span 为 `all` 的元素

应用

- 自适应两栏布局
- 清除浮动
- 防止 margin 重叠

4. 定位

- static: 默认值, 浏览器按照源码顺序决定元素位置(normal flow), top, bottom, left, right属性无效
- relative: 基于默认位置进行偏移
- absolute: 基于父元素进行偏移, 脱离正常页面流(normal flow)
- fixed: 基于视口进行偏移, 脱离正常页面流(normal flow)
- sticky: 部分不可见时表现为 `fixed` 定位, 完全可见或者完全不可见时表现为 `relative` 定位

5. 清除浮动

```css
/* 1. 父元素最后增加一个空 div, 设置 clear 属性值为 `bath` */
.clear {
  clear: both;
  height: 0;
  line-height: 0;
  font-size: 0;
}

/* 2. 父元素设置 overflow 属性值为 `hidden` 或者 `auto`
生成一个BFC, BFC 计算高度时需要包含浮动元素 */
.outer {
  overflow: hidden;
  zoom: 1; /* 处理兼容性问题 */
}

/* 3. 父元素设置 ::after 伪元素 */
.outer {
  zoom: 1;
}
.outer ::after {
  clear: both;
  content: '';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}
```

6. 居中对齐

```css
.wrapper {
  width: 200px;
  height: 200px;
  background-color: red;
  /* 1. flex 布局 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.inner {
  width: 100px;
  height: 100px;
  background-color: blue;
  /* 2. 绝对定位 */
  position: absolute;
  top: 50%;
  left: 50%;
  /* 2.1 绝对定位 + transform */
  transform: translate(-50%, -50%);
  /* 2.2 绝对定位 + margin */
  right: 0;
  bottom: 0;
  margin: auto;
}
```

7. 布局

两栏布局: 
三栏布局: 

<Css-Layout />

8. 响应式

```css
/* 超小屏幕（手机，小于 768px） */
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) {
  .box {
    background-color: green;
  }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {
  .box {
    background-color: blue;
  }
}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: 1200px) {
  .box {
    background-color: yellow;
  }
}
```

9. 过度效果

```css
.wrapper {
  transition: transform 2s;
  /* transition: width 2s, height 3s; */
}
.wrapper:hover {
  /* 旋转 */
  transform: rotate(180deg);
  /* 平移 */
  transform: translate(100px, 100px);
  /* 缩放 */
  transform: scale(2, 3);
  /* 倾斜 */
  transform: skew(45deg, 45deg);
  /* 矩阵转换 */
  transform: matrix(n, n, n, n, n, n);
}
```

10. REM

html元素上设置 font-size 为 16px, width: 10rem;即表示160px; 通过媒体查询设置不同宽度下的html元素的font-size即可实现自适应

11. flex 布局

容器:

- display: flex;
- flex-direction: row;
- flex-wrap: nowrap;
- flex-flow: row nowrap;
- justify-content: center;
- align-items: center;
- align-content: center;

元素:

- order: 1;
- flex-grow: 0;
- flex-shrink: 1;
- flex-basis: auto;
- flex: 0 1 auto;
- align-self: auto;

12. 移动端 1px

利用transform缩小0.5

13. 三角形

```css
.triangle {
  width: 0;
  height: 0;
  border-top: 20px solid red;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
}
```

14. 属性继承和覆盖

使用拆分属性覆盖综合属性, 即拆分属性必须写在综合属性之后

| 综合属性 | 拆分属性 |
| :----: | :----: |
| margin | margin-top, margin-right, margin-bottom, margin-left |
| padding | padding-top, padding-right, padding-bottom, padding-left |
| border | border-width, border-style, border-color |
| border | border-top, border-right, border-bottom, border-left |
| background | background-color, background-image, background-position, background-size |

不可继承:

- width, height, max-width, max-height, min-width, min-height
- display
- text-shadow, text-decoration
- float, clear
- content, counter-reset
- z-index
- position, top, right, bottom, left
- margin, padding, border
- background, background-color, background-image, background-size, background-position
- outline, outline-style, outline-width, outline-color

可继承

- font, font-family, font-size, font-weight, font-style, font-variant
- text-indent, text-align, text-shadow, text-transform, word-spacing, letter-spacing, line-height, color, direction
- visibility
- border-style
- list-style, list-style-type, list-style-image, list-style-position
- cursor

15. 优化

- 省略px
- 省略小数的正数位0
- 使用简写属性
- 首屏关键 CSS 写在 head 标签中
- 压缩
- CDN
- 雪碧图

16. 兼容性

17. 单位

- px
- em
- %
- rem
- vw/vh
- vmin/vmax

18. CSS3 新特性

- 图像边框(border-image)
- 圆角(border-radius)
- 阴影(box-shadow)
- 渐变(线性渐变, 径向渐变)
- 自定义字体(@font-face)
- 滤镜(filter)
- 转换(transform): 平移, 旋转, 缩放, 倾斜, 矩阵
- 过渡(transition)
- 动画(animate, @keyframes)
- 弹性布局(flex), 栅格布局(Gird), 多列布局(column)
- 媒体查询(@media(){})

<Css-Css />

## 参考文档

1. [CSS 选择器参考手册](https://www.w3school.com.cn/cssref/css_selectors.asp)
1. [块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
1. [清除浮动的四种方式及其原理理解](https://juejin.cn/post/6844903504545316877)
1. [CSS垂直居中的12种实现方式](https://juejin.cn/post/6844903550909153287)
