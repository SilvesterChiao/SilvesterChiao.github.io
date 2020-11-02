# let/const

let 用于声明变量, 具有块级作用域, 不会产生变量提升

暂时性死区(temporal dead zone, 简称 TDZ)

一个代码块内如果有 let/const 语句声明的变量, 那么从代码块开始至 let/const 语句这部分都不能调用此变量, 这个区域被称为暂时性死区

```javascript{2,8}
// 隐藏的暂时性死区
function bar(x = y, y = 2) {
  return [x, y]
}

bar(); // ReferenceError

let x = x;
```

const 用于声明一个常量, 不能重新赋值

```javascript
const PI = 3.1415926535897942464338324950288
PI = 1; // TypeError: Assignment to constant variable.
```

声明变量的六种方法

- var
- function
- let
- const
- import
- class
