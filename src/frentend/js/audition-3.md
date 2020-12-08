# 面试题(JavaScript)
<!-- 
- 异步
- 兼容
- 节流函数
- 构造函数 -->

1. js 中有哪些数据类型, 数据类型的自动转换和强制转换

基本数据类型: undefined, null, boolean, string, number, ES6 新增 Symbol, BigInt

引用数据类型: Object

自动类型转换: 字符串拼接, if 语句, ==/!= 运算符, 逻辑运算

强制类型转换: Number, String, Boolean, parseInt, parseFloat, getTime, toString, toLocaleString, toFixed

| x | toBoolean | 结果 | toString | 结果 | toNumber | 结果 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| false | Boolean(x) | false | String(x), x.toString(), x.toLocaleString() | 'false' | Number(x) | 0 |
| true | Boolean(x) | **true** | String(x) | 'true' | Number(x) | 1 |
| 0 | Boolean(x) | false | String(x) | '0' | Number(x) | 0 |
| 1 | Boolean(x) | **true** | String(x) | '1' | Number(x) | 1 |
| '0' | Boolean(x) | **true** | String(x) | '0' | Number(x), parseFloat(x), parseInt(x, 2) | 0 |
| '000' | Boolean(x) | **true** | String(x) | '000' | Number(x) | 0 |
| '1' | Boolean(x) | **true** | String(x) | '1' | Number(x) | 1 |
| NaN | Boolean(x) | false | String(x) | 'NaN' | Number(x) | NaN |
| Infinity | Boolean(x) | **true** | String(x) | 'Infinity' | Number(x) | Infinity |
| -Infinity | Boolean(x) | **true** | String(x) | '-Infinity' | Number(x) | -Infinity |
| '' | Boolean(x) | false | String(x) | '' | Number(x) | 0 |
| '20' | Boolean(x) | **true** | String(x) | '20' | Number(x) | 20 |
| 'String' | Boolean(x) | **true** | String(x) | 'String' | Number(x) | NaN |
| [] | Boolean(x) | **true** | String(x) | '' | Number(x) | 0 |
| [20] | Boolean(x) | **true** | String(x) | '20' | Number(x) | 20 |
| [10, 20] | Boolean(x) | **true** | String(x) | '10,20' | Number(x) | NaN |
| ['String'] | Boolean(x) | **true** | String(x) | 'String' | Number(x) | NaN |
| ['String', 'Hello'] | Boolean(x) | **true** | String(x) | 'String,Hello' | Number(x) | NaN |
| function() {} | Boolean(x) | **true** | String(x) | 'function() {}' | Number(x) | NaN |
| {} | Boolean(x) | **true** | String(x) | '[object Object]' | Number(x) | NaN |
| null | Boolean(x) | false | String(x) | 'null' | Number(x) | 0 |
| undefined | Boolean(x) | false | String(x) | 'undefined' | Number(x) | NaN |

2. 判断类型的方法

|  | typeof | instanceof | constructor | Object.prototype.toString | Array.isArray |
| ---- | ---- | ---- | ---- | ---- | ---- |
| undefined | 'undefined' | - | TypeError | '[object Undefined]' | - |
| 1 | 'number' | - | Number | '[object Number]' | - |
| '1' | 'string' | - | String | '[object String]' | - |
| true | 'boolean' | - | Boolean | '[object Boolean]' | - |
| Symbol() | 'symbol' | - | Symbol | '[object Symbol]' | - |
| fn(){} | 'function' | Function, Object | Function | '[object Function]' | - |
| {} | 'object' | Object | Object | '[object Object]' | - |
| [] | 'object' | Array, Object | Array | '[object Array]' | true |
| null | 'object' | - | TypeError | '[object Null]' | - |

3. instanceof 的原理

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链.

```javascript
function _instanceof (leftValue, rightValue) {
  let rightProto = rightValue.prototype;
  leftValue = leftValue.__proto__;
  while(true) {
    if (leftValue === null) {
      return false;
    }
    if (leftValue === rightProto) {
      return true;
    }
    leftValue = leftValue.__proto__;
  }
}
```

4. == 操作符

- 对象和字符串比较: 调用toString
- null、undefined 相等, 与其他值不相等
- NaN和本身不相等, 和其他值也不相等
- 其他情况全部转换为数字, 对象转换为数字: 先 toString, 再 Number


4. 前端优化有哪些方法

5. 闭包的含义和应用

可以访问

6. 作用域和作用域链的理解

7. 构造函数、原型和原型链的理解

8. new 操作符背后发生了什么, 如何实现

```javascript
/**
 * 1. 创建一个对象
 * 2. this 指向这个对象
 * 3. 执行内部代码
 * 4. 返回 this
*/
```

9. 生成对象和继承的方法

10. 跨域是如何产生的, 如何解决

11. Object 和 Array 的区别

12. 实现一个 Symbol

13. Object.prototype.toString 和 Object.prototype.valueOf 的区别

14. 实现一个链式调用

15. call, bind, apply 的区别和应用

Object.call(this, obj1, obj2, obj3)

Object.apply(this, arguments)

16. 防抖函数和节流函数的实现

```javascript
/**
 * 含义: 固定时间后执行代码, 如果在此期间多次重复触发, 则重新计时
 * 应用: 
 */
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
}

/**
 * 含义: 每隔一段时间, 只执行一次
 * 应用: 
 */
const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    if (!flag) {
      return
    }
    flag = false;
    setTimeout(() => {
      fn.apply(this, args)
      flag = true;
    }, delay);
  }
}
```

17. 事件模型, 事件循环, 委托, 捕获/冒泡

事件委托: 在目标元素的父元素上绑定事件, 判断特定目标时进行相应的处理

```javascript
// 阻止冒泡
e.cancelBubble = true;
e.stopPropagation();

// 阻止默认
e.preventDefault();
return false;
```

## 参考文档

1. [js--浅谈instanceof的底层实现原理、手动实现一个instanceof](https://juejin.cn/post/6844903854492876814)