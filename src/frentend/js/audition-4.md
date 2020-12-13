# 面试题-ES6

1. ES6 有哪些新特性

let/const, 解构赋值, 函数默认值, rest 参数, 箭头函数, 数组的扩展运算符, 对象字面量简写, 新的基本数据类型 Symbol, Promise,  class, 模块化, async/await, Set/Map, Proxy, Reflect, Iterator, Generator, Decorator

1. 暂时性死区

定义域开始至此定义域中 let/const 语句的区域即为此变量/常量的暂时性死区, 在此区域中不能访问此变量/常量

1. 箭头函数中的 this

箭头函数内部绑定其所在的定义域

1. Promise 相关

宏任务(setTimeout, 事件绑定, ajax), 微任务(async, resolve, reject)

同步代码->微任务->宏任务

Promise 定义之后的代码先执行, Promise 中的代码后执行, resolve 方法成功时执行, reject 方法失败时执行

```javascript
// 以下代码的执行结果

// Promise 的实现
class Promise {
  callbacks = [];
  constructor(fn) {
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    this.callbacks.push(onFulfilled);
  }
  _resolve(value) {
    this.callbacks.forEach(fn => fn(value));
  }
}

// Promise.all 的实现

// Promise.race 的实现

```

1. 创建对象和继承的方法, ES5 和ES6 有哪些区别

- 严格模式
- 不存在提升
- 方法默认是不可枚举的
- class 的所有方法都没有原型对象 prototype, 所以也没有 [[construct]], 不能使用 new 来调用
- class 必须使用 new 调用
- 子类 this 生成顺序不同
- ES6 可以继承静态方法, 而构造函数不能
