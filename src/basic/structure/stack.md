# Stack (栈)

## 定义

受限的线性结构(线性表), 遵循后进先出的原则(LIFO)

栈顶: 只能在栈顶进行数据的插入和删除
栈底
入栈: 在栈顶插入数据
出栈: 删除并返回栈顶元素
空栈: 长度为 0 的栈

## 实现

<Structure-Stack />

```javascript
export default class Stack {
  contractor (data) {
    if (Array.isArray(data)) {
      this.data = data;
    } else {
      return new Error('必须为数组')
    }
  }

  get length () {
    return this.data.length
  }

  set length (value) {
    return new Error('禁止修改栈的 length')
  }

  push () {}

  pop () {}

  peek () {}

}
```

## 应用

1. 10进制转2进制
1. 匹配括号
