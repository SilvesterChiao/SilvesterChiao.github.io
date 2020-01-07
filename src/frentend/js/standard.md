# JavaScript Standard Style

> 这是 JavaScript standard 代码规范的全文.  
> 掌握本规范的最好方法是安装并在自己的代码中使用它.

[原文地址](https://standardjs.com/rules-zhcn.html)

## 细则

- 使用两个空格进行缩进  
  eslint: indent

  ```javascript
  function hello(name) {
    console.log('hi', name);
  }
  ```

- 除需要转义的情况外, 字符串统一使用单引号  
  eslint: quotes

  ```javascript
  console.log('hello  there');
  $("<div class='box'>");
  ```

- 不要定义未使用的变量  
  eslint: no-unused-vars

  ```javascript
  function myFunction() {
    var result = something();
  }
  ```

- 关键字后面加空格  
  eslint: keyword-spacing

  ```javascript
  if (condition) { ... }
  ```

- 函数声明时括号与函数名间加空格  
  eslint: space-before-function-paren

  ```javascript
  function name (arg) { ... }
  ```

- 始终使用 `===` 替代 `==`  
  例外: obj == null 可以用来检查 null || undefined  
  eslint: eqeqeq

  ```javascript
  if (name === 'John')
  ```

- 字符串拼接操作符(Infix operators)之间要留空格  
  eslint: space-infix-ops

  ```javascript
  var x = 2;
  var message = 'hello, ' + name + '!';
  ```

- 逗号后面加空格  
  eslint: comma-spacing

  ```javascript
  var list = [1, 2, 3, 4];
  ```

- `else` 关键字要与花括号保持在同一行  
  eslint: brace-style

  ```javascript
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

- 多行 `if` 语句的括号不能省  
  eslint: curly

  ```javascript
  if (optons.quiet !== true) {
    console.log('done');
  }
  ```

- 不要丢掉异常处理中的 `err` 参数  
  eslint: handle-callback-err

  ```javascript
  run(function(err) {
    if (err) throw err;
    window.alert('done');
  });
  ```

- 使用浏览器全局变量时加上 `window.` 前缀  
  例外: document, console, navigator  
  eslint: no-def

  ```javascript
  window.alert('hi');
  ```

- 不允许有连续多行空行  
  eslint: no-multiple-empty-lines

  ```javascript
  var value = 'hello world';
  console.log(value);
  ```

- 对于三元运算符 `?` 和 `:` 与他们所负责的代码处于同一行  
  eslint: operator-linebreak

  ```javascript
  var location = env.development ? 'localhost' : 'www..api.com';
  ```

- 每个 `var` 关键字单独生命一个变量  
  eslint: one-var

  ```javascript
  var silent = true;
  var verbose = true;
  ```

- 条件语句中赋值语句使用括号包起来  
  eslint: no-cond-assign

  ```javascript
  while ((m = text.match(expr))) {
    // ...
  }
  ```

- 单行代码库两边加空格  
  eslint: block-spacing

  ```javascript
  function foo() {
    return true;
  }
  ```

- 对于变量和函数名统一使用驼峰命名法  
  eslint: camelcase

  ```javascript
  function myFunction() {
    var myVar = 'hello';
  }
  ```

- 不允许有多余的行末逗号  
  eslint: comma-dangle

  ```javascript
  var obj = {
    message: 'hello',
  };
  ```

- 始终将逗号置于行末  
  eslint: comma-style

  ```javascript
  var obj = {
    foo: 'foo',
    bar: 'bar',
  };
  ```

- 点号操作符与属性需在同一行  
  eslint: dot-location

  ```javascript
  console.log('hello');
  ```

- 文件末尾留一空行  
  eslint: eol-last

- 函数调用时标识符与括号间不留间隔  
  eslint: func-call-spacing

  ```javascript
  console.log('hello');
  ```

- 键值对当中冒号与值之间要留空白  
  eslint: key-spacing

  ```javascript
  var obj = { key: 'value' };
  ```

- 构造函数要以大写字母开头  
  eslint: new-cap

  ```javascript
  function Animal() {}
  var dog = new Animal();
  ```

- 无参的构造函数调用时要带上括号  
  eslint: new-parents

- 对象中定义了存值器, 一定要对应的定义取值器  
  eslint: accessor-pairs

  ```javascript
  var person = {
    set name(value) {
      this._name = value;
    },
    get name() {
      return this._name;
    },
  };
  ```

- 子类的构造器中一定要调用 super  
  eslint: constructor-super

  ```javascript
  class Dog extends Mammal {
    constructor() {
      super();
    }
  }
  ```

- 使用数组字面量而不是构造器  
  eslint: no-array-constructor

  ```javascript
  var nums = [1, 2, 3];
  ```

- 避免使用 `arguments.callee` 和 `arguments.caller`  
  eslint: no-caller

- 避免对类名重新赋值  
  eslint: no-class-assign

  ```javascript
  class Dog {}
  Dog = 'Fido';
  ```

- 避免修改使用 `const` 声明的变量  
  eslint: no-const-assign

  ```javascript
  const score = 100;
  score = 125;
  ```

- 避免使用常量作为条件表达式的条件(循环语句除外)  
  eslint: no-constant-condition

  ```javascript
  while (true) {
    if (x === 0) {
      // ...
    }
  }
  ```

- 正则中不要使用控制符  
  eslint: no-control-regex

- 不要使用 `debugger`  
  eslint: no-debugger

- 不要对变量使用 `delete` 操作  
  eslint: no-delete-var

- 不要定义冗余的函数参数  
  eslint: no-dupe-args

- 类中不要定义冗余的属性  
  eslint: no-dupe-class-members

- 对象字面量中不要定义重复的属性  
  eslint: no-dupe-keys

- `switch` 语句中不要定义重复的 `case` 分支  
  eslint: no-duplicate-case

- 同一模块有多个导入时一次性写完  
  eslint: no-duplicate-imports

  ```javascript
  import { myFunc1, myFunc2 } from 'module';
  ```

- 正则中不要使用空字符  
  eslint: no-empty-character-class

- 不要解构空值  
  eslint: no-empty-pattern

  ```javascript
  const {
    a: { b },
  } = foo;
  ```

- 不要使用 `eval()`  
  eslint: no-eval

- `catch` 中不要对错误重新赋值  
  eslint: no-ex-assign

- 不要扩展原生对象  
  eslint: no-extend-native

- 避免多余的函数上下文绑定  
  eslint: no-extra-bind

  ```javascript
  const name = function() {
    this.getName();
  }.bind(user);
  ```

- 避免不必要的布尔转换  
  eslint: no-extra-boolean-cast

- 不要使用多余的括号包裹函数  
  eslint: no-extra-parens

- `switch` 一定要使用 `break` 来将条件分支正常中断  
  eslint: no-fallthrough

  ```javascript
  switch (filter) {
    case 1:
      doSomething();
      break;
    case 2:
      doSomethingElse();
  }
  ```

- 不要省去小数点前面的 `0`  
  eslint: no-floating-decimal

  ```javascript
  const discount = 0.5;
  ```

- 避免对声明过的函数重新赋值  
  eslint: no-func-assign

- 不要对全局只读对象重新赋值  
  eslint: no-global-assign

- 注意隐式的 `eval()`  
  eslint: no-implied-eval

  ```javascript
  setTimeout(function() {
    alert('hello world');
  });
  ```

- 嵌套的代码块中禁止再定义函数  
  eslint: no-inner-declarations

- 不要向 `RegExp` 构造器传入非法的正则表达式  
  eslint: no-invalid-regexp

- 不要使用非法的空白符  
  eslint: no-irregular-whitespace

- 禁止使用 `__iterator__`  
  eslint: no-iterator

- 外部变量不要与对象属性重名  
  eslint: no-label-var

- 不要使用标签语句  
  eslint: no-labels

- 不要书写不必要的嵌套代码块  
  eslint: no-lone-blocks

- 不要混合使用空格与制表符作为缩进  
  eslint: no-mixed-spaces-and-tabs

- 除了缩进, 不要使用多个空格  
  eslint: no-multi-spaces

- 不要使用多行字符串  
  eslint: no-multi-str

- `new` 创建对象实例后需要赋值给变量  
  eslint: no-new

- 禁止使用 `Function` 构造器  
  eslint: no-new-func

- 禁止使用 `Object` 构造器  
  eslint: no-new-object

- 禁止使用 `new require`  
  eslint: no-new-require

- 禁止使用 `Symbol` 构造器  
  eslint: no-new-symbol

- 禁止使用原始包装器  
  eslint: no-new-wrappers

- 不要将全局对象的属性作为函数调用  
  eslint: no-obj-calls

- 不要使用八进制字面量  
  eslint: no-octal

- 字符串字面量中也不要使用八进制转义字符  
  eslint: no-octal-escape

- 使用 `__dirname` 和 `__filename` 时尽量避免使用字符串拼接  
  eslint: no-path-concat

  ```javascript
  const pathToFile = path.join(__dirname, 'app.js');
  ```

- 使用 `getPrototypeOf` 来替代 `__proto__`  
  eslint: no-proto

  ```javascript
  const foo = Object.getPrototypeOf(obj);
  ```

- 不要重复声明变量  
  eslint: no-redeclare

- 正则中避免使用多个空格  
  eslint: no-regex-spaces

- `return` 语句中的赋值必需有括号包裹  
  eslint: no-return-assign

  ```javascript
  function sum(a, b) {
    return (result = a + b);
  }
  ```

- 避免将变量赋值给自己  
  eslint: no-self-assign

- 避免将变量与自己进行比较操作  
  eslint: no-self-compare

- 避免使用逗号操作符  
  eslint: no-sequences

- 不要随意更改关键字的值  
  eslint: no-shadow-restructed-names

- 禁止使用稀疏数组  
  eslint: no-sparse-arrays

- 不要使用制表符  
  eslint: no-tabs

- 正确使用 es6 中的字符串模板  
  eslint: no-template-curly-in-string

  ```javascript
  const message = `Hello ${name}`;
  ```

- 使用 `this` 前确保 `super()` 已调用  
  eslint: no-this-before-super

  ```javascript
  class Dog extends Animal {
    constructor() {
      super();
      this.legs = 4;
    }
  }
  ```

- 用 `throw` 抛错时, 抛出 `Error` 对象而不是字符串  
  eslint: no-throw-literal

  ```javascript
  throw new Error('error');
  ```

- 行末不留空格  
  eslint: no-trailing-spaces

- 不要使用 `undefined` 来初始化变量  
  eslint: no-undef-init

- 循环语句中注意更新循环变量  
  eslint: no-unmodified-loop-condition

- 如果有更好的实现, 尽量不要使用三元表达式  
  eslint: no-unneeded-ternary

- `return` , `throw` , `continue` 和 `break` 后不要再跟代码  
  eslint: no-unreachable

- `finally` 代码块中不要再改变程序执行流程  
  eslint: no-unsafe-finally

- 关系运算符的左值不要做取反操作  
  eslint: no-unsafe-negation

- 避免不必要的 `.call()` 和 `.apply()`  
  eslint: no-useless-call

- 避免使用不必要的计算值作对象属性  
  eslint: no-useless-computed-key

- 禁止多余的构造器  
  eslint: no-useless-constructor

- 禁止不必要的转义  
  eslint: no-useless-escape

- `import` , `export` 和解构操作中, 禁止赋值到同名变量  
  eslint: no-useless-rename

- 属性前面不要加空格  
  eslint: no-whitespace-before-property

- 禁止使用 `with`  
  eslint: no-with

- 对象属性换行时注意统一代码风格  
  eslint: object-property-newline

- 代码块中避免多余留白  
  eslint: padded-blocks

- 展开运算符与它的表达式间不要留空白  
  eslint: rest-spread-spacing

- 展开运算符与它的表达式间不要留空白  
  eslint: rest-spread-spacing

  ```javascript
  fn(...args);
  ```

- 遇到分号时空格要后留前不留  
  eslint: semi-spacing

  ```javascript
  for(let i = 0; i < items.length; i ++) {  ...}
  ```

- 代码块首尾留空格  
  eslint: space-before-blocks

  ```javascript
  if (admin) { ... }
  ```

- 圆括号间不留空格  
  eslint: space-in-parens

- 一元运算符后面跟一个空格  
  eslint: space-unary-ops

- 注释首尾留空格  
  eslint: spaced-comment

  ```javascript
  // comment
  /* comment */
  ```

- 模板字符串中变量前后不加空格  
  eslint: template-curly-spacing

- 检查 `NaN` 的正确姿势是使用 `isNaN()`  
  eslint: use-isnan

  ```javascript
  if (isNaN(price)) { ... }
  ```

- 用合法的字符串跟 `typeof` 进行比较操作  
  eslint: valid-typeof

- 自调用匿名函数(IIFEs)使用括号包裹  
  eslint: wrap-iife

  ```javascript
  const getName = (function() {})();
  ```

- `yield *` 中的 `*` 前后都要有空格  
  eslint: yield-star-spacing

  ```javascript
  yield * increment();
  ```

- 请书写优雅的条件语句(avoid Yoda conditions)  
  eslint: yoda
  ```javascript
  if (age === 15) {
  }
  ```

## 关于分号

- 不要使用分号  
  eslint: semi

  ```javascript
  window.alert('hi');
  ```

- 不要使用 `(`, `[`, `\`` 等作为一行的开始
