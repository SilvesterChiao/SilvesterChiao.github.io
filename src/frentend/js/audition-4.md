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

Promise 规范有很多, 如 Promise/A, Promise/B, Promise/D 以及 Promise/A+, ES6 中采用了 Promise/A+ 规范.

```javascript
// 以下代码的执行结果

// Promise 的实现
class Promise {
  callbacks = [];
  state = 'pending'; // 初始状态
  value = null;
  constructor(fn) {
    fn(this._resolve.bind(this), this._reject.bind(this));
  }
  _handle(callback) {
    if (this.state === 'pending') {
      this.callbacks.push(callback);
      return;
    }

    let cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;
    if (!cb) {
      cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(this.value);
      return;
    }

    let ret;

    try {
      ret = cb(this.value);
      cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
    } catch (error) {
      ret = error;
      cb = callback.reject;
    } finally {
      cb(ret);
    }
  }
  _resolve(value) {
    if (value && (typeof value === 'object' || typeof value === 'function')) {
      var then = value.then;
      if (typeof then === 'function'){
        then.call(value, this._resolve.bind(this), this._reject.bind(this));
        return;
      }
    }
    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach(callback => this._handle(callback));
  }
  _reject(error) {
    this.state = 'rejected';
    this.value = error;
    this.callbacks.forEach(callback => this._handle(callback));
  }
  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      this._handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject,
      })
    })
  }
  catch(onError) {
    return this.then(null, onError);
  }
  finally(onDone) {
    if (typeof onDone !== 'function') return this.then();
    let Promise = this.constructor;
    return this.then(
      value => Promise.resolve(onDone()).then(() => value),
      reason => Promise.resolve(onDone()).then(() => {throw reason})
    );
  }
  static resolve(value) {
    if (value && value instanceof Promise) {
      return value;
    } else if (value && typeof value === 'object' && typeof value.then === 'function') {
      let then = value.then;
      return new Promise(resolve => {
        then(resolve);
      });
    } else if (value) {
      return new Promise(resolve => resolve(value));
    } else {
      return new Promise(resolve => resolve());
    }
  }
  static reject(value) {
    if (value && typeof value === 'object' && typeof value.then === 'function') {
      let then = value.then;
      return new Promise((resolve, reject) => {
        then(reject);
      });
    } else {
      return new Promise((resolve, reject) => reject(value));
    }
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      let fulilledCount = 0;
      const itemNum = promises.length;
      const rets = Array.from({length: itemNum});
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(result => {
          fulfilledCount++;
          rets[index] = result;
          if (fulfilledCount === itemNum) {
            resolve(rets);
          }
        }, reason => reject(reason));
      })
    })
  }
  static race(promises) {
    return new Promise(function (resolve, reject) {
      for(let i = 0; i < promises.length; i ++) {
        Promise.resolve(promises[i]).then(function (value) {
          return resolve(value);
        }, function (reason) {
          return reject(reason);
        })
      }
    })
  }
}
```

1. Promise 和 async/await 有什么区别

1. 创建对象和继承的方法, ES6 和ES5 有哪些区别

- 严格模式
- 不存在提升
- 方法默认是不可枚举的
- class 的所有方法都没有原型对象 prototype, 所以也没有 [[construct]], 不能使用 new 来调用
- class 必须使用 new 调用
- 子类 this 生成顺序不同
- ES6 可以继承静态方法, 而构造函数不能

## 参考文档

1. [图解 Promise 实现原理（一）—— 基础实现](https://zhuanlan.zhihu.com/p/58428287)
