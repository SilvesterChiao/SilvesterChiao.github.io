# JavaScript Standard Style

-   使用两个空格进行缩进  
    eslint: indent

    ```javascript
    function hello(name) {
        console.log('hi', name)
    }
    ```

-   除需要转义的情况外, 字符串统一使用单引号  
    eslint: quotes

    ```javascript
    console.log('hello  there')
    $("<div class='box'>")
    ```

-   不要定义未使用的变量  
    eslint: no-unused-vars

    ```javascript
    function myFunction() {
        var result = something()
    }
    ```

-   关键字后面加空格  
    eslint: keyword-spacing

    ```javascript
    if (condition) { ... }
    ```

-   函数声明时括号与函数名间加空格  
    eslint: space-before-function-paren

    ```javascript
    function name (arg) { ... }
    ```

-   始终使用 `===` 替代 `==`  
    例外: obj == null 可以用来检查 null || undefined  
    eslint: eqeqeq

    ```javascript
    if (name === 'John')
    ```

-   字符串拼接操作符(Infix operators)之间要留空格  
    eslint: space-infix-ops

    ```javascript
    var x = 2
    var message = 'hello, ' + name + '!'
    ```

-   逗号后面加空格  
    eslint: comma-spacing

    ```javascript
    var list = [1, 2, 3, 4]
    ```

-   `else` 关键字要与花括号保持在同一行  
    eslint: brace-style

    ```javascript
    if (condition) {
        // ...
    } else {
        // ...
    }
    ```

-   多行 `if` 语句的括号不能省  
    eslint: curly

    ```javascript
    if (optons.quiet !== true) {
        console.log('done')
    }
    ```

-   不要丢掉异常处理中的 `err` 参数  
    eslint: handle-callback-err

    ```javascript
    run(function(err) {
        if (err) throw err
        window.alert('done')
    })
    ```

-   使用浏览器全局变量时加上 `window.` 前缀  
    例外: document, console, navigator  
    eslint: no-def

    ```javascript
    window.alert('hi')
    ```

-   不允许有连续多行空行  
    eslint: no-multiple-empty-lines

    ```javascript
    var value = 'hello world'
    console.log(value)
    ```

-   对于三元运算符 `?` 和 `:` 与他们所负责的代码处于同一行  
    eslint: operator-linebreak

    ```javascript
    var location = env.development ? 'localhost' : 'www..api.com'
    ```

-   每个 `var` 关键字单独生命一个变量  
    eslint: one-var

    ```javascript
    var silent = true
    var verbose = true
    ```

-   条件语句中赋值语句使用括号包起来  
    eslint: no-cond-assign

    ```javascript
    while ((m = text.match(expr))) {
        // ...
    }
    ```

-   单行代码库两边加空格  
    eslint: block-spacing

    ```javascript
    function foo() {
        return true
    }
    ```

-   对于变量和函数名统一使用驼峰命名法  
    eslint: camelcase

    ```javascript
    function myFunction() {
        var myVar = 'hello'
    }
    ```

-   不允许有多余的行末逗号  
    eslint: comma-dangle

    ```javascript
    var obj = {
        message: 'hello'
    }
    ```

-   始终将逗号置于行末  
    eslint: comma-style

    ```javascript
    var obj = {
        foo: 'foo',
        bar: 'bar'
    }
    ```

-   点号操作符与属性需在同一行  
    eslint: dot-location

    ```javascript
    console.log('hello')
    ```

-   文件末尾留一空行  
    eslint: eol-last

-   函数调用时标识符与括号间不留间隔  
    eslint: func-call-spacing

    ```javascript
    console.log('hello')
    ```

-   键值对当中冒号与值之间要留空白  
    eslint: key-spacing

    ```javascript
    var obj = { key: 'value' }
    ```

-   构造函数要以大写字母开头  
    eslint: new-cap

    ```javascript
    function Animal() {}
    var dog = new Animal()
    ```

-   无参的构造函数调用时要带上括号  
    eslint: new-parents

-   对象中定义了存值器, 一定要对应的定义取值器  
    eslint: accessor-pairs

    ```javascript
    var person = {
        set name(value) {
            this._name = value
        },
        get name() {
            return this._name
        }
    }
    ```

-   子类的构造器中一定要调用 super  
    eslint: constructor-super

    ```javascript
    class Dog extends Mammal {
        constructor() {
            super()
        }
    }
    ```

-   使用数组字面量而不是构造器  
    eslint: no-array-constructor

    ```javascript
    var nums = [1, 2, 3]
    ```

-   避免使用 `arguments.callee` 和 `arguments.caller`  
    eslint: no-caller

-   避免对类名重新赋值  
    eslint: no-class-assign

    ```javascript
    class Dog {}
    Dog = 'Fido'
    ```

-   避免修改使用 `const` 声明的变量  
    eslint: no-const-assign

    ```javascript
    const score = 100
    score = 125
    ```

-   避免使用常量作为条件表达式的条件(循环语句除外)  
    eslint: no-constant-condition

    ```javascript
    while (true) {
        if (x === 0) {
            // ...
        }
    }
    ```

-   正则中不要使用控制符  
    eslint: no-control-regex

-   不要使用 `debugger`  
    eslint: no-debugger

-   不要对变量使用 `delete` 操作  
    eslint: no-delete-var

-   不要定义冗余的函数参数  
    eslint: no-dupe-args

-   类中不要定义冗余的属性  
    eslint: no-dupe-class-members

-   对象字面量中不要定义重复的属性  
    eslint: no-dupe-keys

-   `switch` 语句中不要定义重复的 `case` 分支  
    eslint: no-duplicate-case

-   同一模块有多个导入时一次性写完  
    eslint: no-duplicate-imports

    ```javascript
    import { myFunc1, myFunc2 } from 'module'
    ```

-   正则中不要使用空字符  
    eslint: no-empty-character-class

-   不要解构空值  
    eslint: no-empty-pattern

    ```javascript
    const {
        a: { b }
    } = foo
    ```

-   不要使用 `eval()`  
    eslint: no-eval

-   `catch` 中不要对错误重新赋值  
    eslint: no-ex-assign

-   不要扩展原生对象  
    eslint: no-extend-native

-   避免多余的函数上下文绑定  
    eslint: no-extra-bind

    ```javascript
    const name = function() {
        this.getName()
    }.bind(user)
    ```

-   避免不必要的布尔转换  
    eslint: no-extra-boolean-cast

-   不要使用多余的括号包裹函数  
    eslint: no-extra-parens

-   `switch` 一定要使用 `break` 来将条件分支正常中断  
    eslint: no-fallthrough

    ```javascript
    switch (filter) {
        case 1:
            doSomething()
            break
        case 2:
            doSomethingElse()
    }
    ```

-   不要省去小数点前面的 `0`
