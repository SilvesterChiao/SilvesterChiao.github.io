# 面试题(JavaScript)

- 异步
- 兼容
- 节流函数
- 事件模型, 事件循环, 委托, 捕获/冒泡
- call, bind, apply
- 构造函数, new

1. 写出运行结果

```javascript
// 1. 数字和字符串作为对象的 key 时相同
let a = {};
let b = '0';
let c = 0;

a[b] = 'Hello';
a[c] = 'World';
console.log(a[b]); // 'World'

// 2.
let a = {};
let b = Symbol('1');
let c = Symbol('1');

a[b] = 'Hello';
a[c] = 'World';
console.log(a[b]); // 'Hello'

// 3. 对象作为 key 时先转换为字符串 '[object Object]'
let a = {};
let b = { n: '1' };
let c = { m: '2' };

a[b] = 'Hello';
a[c] = 'World';
console.log(a[b]); // 'World'

// 4. alert 转换为字符串
var text = (function(i) {
  return function() {
    alert(i *= 2);
  }
})(2);
text(5); // '4'

// 5.
var a = 0;
var b = 0;

function A(a) {
  A = function (b) {
    alert(a + b++);
  };
  alert(a++);
}
A(1); // '1'
A(2); // '4'
```

1. 前端优化有哪些方法

1. 闭包的含义和应用

1. 作用域和作用域链的理解

1. 原型和原型链的理解

1. 生成对象和继承的方法

1. 跨域是如何产生的, 如何解决

1. js 中有哪些数据类型

基本数据类型: undefined, null, boolean, string, number, ES6 新增 Symbol, BigInt

引用数据类型: Object

1. Object 和 Array 的区别

1. 实现一个 Symbol

1. Object.prototype.toString 和 Object.prototype.valueOf 的区别

1. 实现一个链式调用

```javascript
```

1. call, bind, apply 的区别和应用

1. 实现一个防抖函数

1. 深拷贝和浅拷贝

```javascript
let obj = {
  age: 12,
  name: 'Damo',
  brother: {
    name: 'Stafn'
  },
  girlFriend: ['', '', '']
};

// for...in 循环浅克隆
let cloneObj = {};
for(let key in obj) {
  if (!obj.hasOwnProperty(key)) {
    break;
  }
  cloneObj[key] = obj[key];
}

// ES6 扩展运算符浅克隆
let cloneObj = { ...obj }

// JSON 方法深克隆
// 不能克隆函数, 正则和日期
let cloneObj = JSON.parse(JSON.stringify(obj));

// 递归函数深克隆
function deepClone(obj) {
  if (obj === null) {
    return null;
  }
  if (typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  let newObj = new obj.constructor;
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}
```

1. new 操作符背后发生了什么, 如何实现

```javascript
/**
 * 1. 创建一个对象
 * 2. this 指向这个对象
 * 3. 执行内部代码
 * 4. 返回 this
*/
```
