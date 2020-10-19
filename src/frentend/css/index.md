# CSS

1. 选择器

伪类, 伪元素

!important > 行内样式

选择器 **从右向左** 解析

优先级: ID > class > 元素选择器 > * > 继承 > 默认

效率:

2. 盒模型

影响属性: width, height, margin, padding, border

块级元素: 宽度100%, div header footer p

行内元素: span i input

image: 

3. BFC

4. 定位

- 相对定位
- 绝对定位
- 固定定位

5. 清除浮动

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
  transform: translate(-50%, -50%);
}
```

7. 布局

8. 响应式

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}

@medit (max-width: 768px) {
  .box {
    background-color: blue;
  }
}
```

9. 过度效果

```css
.sanjiao {
  transition: transform 2s;
  transition: width 2s, height 3s;
}
.sanjiao:hover {
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

11. flex 计算

12. 移动端 1px

使用 2px 转成REM
缩小50%

13. 三角形

14. 属性继承

15. 优化

- CDN
- 雪碧图

16. 兼容性

17. 单位

- px
- 百分比
- rem
- vh

18. 

<Css-Css />
