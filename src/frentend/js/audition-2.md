# 面试题-手写代码

1. 数组扁平化

```javascript
const array = [1, [2, [3, [4, 5]]], 6];

// 1. Array.prototype.flat
const res1 = array.flat(Infinity);

// 2. 正则, 缺点是数据类型都会变为字符串
const res2 = JSON.stringify(array).replace(/\[|\]/g, '').split(',');

// 3. 优化正则
const res3 = JSON.parse('[' + JSON.stringify(array).replace(/\[|\]/g, '') + ']');

// 4. Array.prototype.reduce
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
const res4 = flatten(array);

// 5. 递归
const res5 = [];
const fn = arr => {
  for(let i = 0; i < arr.length; i ++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }
  }
}
fn(array);
```

2. 数组去重

```javascript
const array = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

// 1. Set
const res1 = Array.from(new Sest(array));

// 2. for循环 + splice
const unique1 = arr => {
  let len = arr.length;
  for(let i = 0; i < len; i ++) {
    for(let j = i + 1; j < len; j ++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        len --;
        j --;
      }
    }
  }
  return arr;
}
const res2 = unique1(array);

// 3. Array.prototype.indexOf
const unique2 = arr => {
  const res = [];
  for(let i = 0; i < arr.length; i ++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

// 4. Array.prototype.include
const res3 = unique2(array);
const unique3 = arr => {
  const res = [];
  for(let i = 0; i < arr.length; i ++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i])
    }
  }
  return res;
}
const res4 = unique3(array);

// 5. Array.prototype.filter
const unique4 = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  })
}
const res5 = unique4(array);

// 6. Map
const unique5 = arr => {
  const map = new Map();
  const res = [];
  for(let i = 0; i < arr.length; i ++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
      res.push(arr[i])
    }
  }
  return res;
}
const res6 = unique5(array);
```

3. 类数组转化为数组

```javascript
const divs = document.querySelectorAll('div')

// 1. Array.from
const res1 = Array.from(divs);

// 2. Array.prototype.slice
const res2 = Array.prototype.slice.call(divs);

// 3. 扩展运算符
const res3 = [...divs];

// 4. Array.prototype.concat
const res4 = Array.prototype.concat.apply([], divs);
```

4. 函数方法

```javascript
// 1. Function.prototype.apply
Function.prototype.apply = function(context = window, args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  const fn = Symbol('fn');
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
}

// 2. Function.prototype.call
Function.prototype.apply = function(context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  const fn = Symbol('fn');
  context[fn] = this;

  const res = context[fn](...args);
  delete context[fn];
  return res;
}

// 3. Function.prototype.bind
Function.prototype.bind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error');
  }
  // 保存 this 的值
  var self = this;

  return function F() {
    // 考虑 new 的情况
    if (this instanceof F) {
      return new self(...args, ...arguments);
    }
    return self.apply(context, [...args, ...arguments])
  }
}
```

5. 深拷贝和浅拷贝

```javascript
let obj = {
  age: 12,
  name: 'Damo',
  brother: {
    name: 'Stafn'
  },
  girlFriend: ['', '', '']
};

// 1. 利用 for...in 循环实现浅拷贝
let cloneObj = {};
for(let key in obj) {
  if (!obj.hasOwnProperty(key)) {
    break;
  }
  cloneObj[key] = obj[key];
}

// 2. 利用 ES6 扩展运算符实现浅拷贝
let cloneObj = { ...obj }

// 3. 利用 JSON 对象的方法实现深拷贝, 缺点是不能拷贝函数, 正则和日期对象
let cloneObj = JSON.parse(JSON.stringify(obj));

// 4. 利用递归函数实现深可拷贝
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

6. 数组方法

```javascript
// 1. Array.prototype.filter
Array.prototype.filter = function(callback, thisArg) {
  if (this === undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const res = [];
  // 让 O 成为回调函数的对象传递(强制转换对象)
  const O = Object(this);
  // >>> 0 保证 len 为 number, 且为正整数
  const len = O.length >>> 0;
  for (let i = 0; i < len; i ++) {
    // 检查 i 是否在 O 的属性(会检查原型链)
    if (i in O) {
      // 回调函数调用传参
      if (callback.call(thisArg, O[i], i, O)) {
        res.push(O[i]);
      }
    }
  }
  return res;
}

// 2. Array.prototype.map
Array.prototype.map = function(callback, thisArg) {
  if (this === undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const res = [];
  // 同理
  const O = Object(this);
  const len = O.length >>> 0;
  for (let i = 0; i < len; i ++) {
    if (i in O) {
      // 调用回调函数并传入新数组
      res[i] = callback.call(thisArg, O[i], i, this);
    }
  }
  return res;
}

// 3. Array.prototype.forEach
Array.prototype.forEach = function(callback, thisArg) {
  if (this === undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    if (k in O) {
      callback.call(thisArg, O[k], k, O);
    }
    k ++;
  }
}

// 4. Array.prototype.reduce
Array.prototype.reduce = function(callback, initialValue) {
  if (this === undefined) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const O = Object(this);
  const len = O.length >>> 0;
  let accumulator = initialValue;
  let k = 0;
  // 如果第二个参数为 undefined 的情况下
  // 则数组的第一个有效值作为累加器的初始值
  if (accumulator === undefined) {
    while (k < len && !(k in O)) {
      k ++;
    }
    // 如果超出数组界限还没有找到累加器的初始值, 则 TypeError
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumultor = O[k ++];
  }
  while (k < len) {
    if (k in O) {
      accumulator = callback.call(undefined, accumulator, O[k], k, O);
    }
    k ++;
  }
  return accumulator;
}
```
