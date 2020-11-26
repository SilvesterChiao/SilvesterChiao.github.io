# 面试题-1

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

// 6.
function Foo () {
  getName = function () {
    console.log(1);
  }
  return this;
}
Foo.getName = function () {
  console.log(2);
}
Foo.prototype.getName = function() {
  console.log(3);
}
var getName = function () {
  console.log(4);
}
function getName() {
  console.log(5);
}
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3

// 7.
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
```
