# TypeScript

- 一个 JavaScript 的超集
- 以 JavaScript 为基础构造的语言
- 在任何支持 JavaScript 的平台中执行
- TypeScript 扩展了 JavaScript，并且添加了类型
- TS 不能被 JS 解析器直接解析执行。所以需要将 TS 代码进行编译为 JS

## 一、TypeScript 开发环境搭建

- node.js
- 使用 npm 全局安装 typescript `npm i -g typescript`
- 创建一个 ts 文件
- 使用 tsc 对 ts 文件进行编译 `tsc xxx.ts`

## 二、基本类型

### 类型声明

- 类型声明是 TS 非常重要的一个特点
- 通过类型声明可以指定 TS 中变量（参数、形参）的类型
- 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
- 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值
- 语法

```
let 变量：类型
let 变量： 类型 = 值
function fn(参数：类型, 参数：类型)：类型{
    ...
}
```

- 自动类型判断
  - TS 拥有自动的类型判断机制
  - 当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型
  - 所以如果你的变量的声明和赋值是同时进行的 ，可以省略掉类型声明
- 类型
  | 类型 | 例子 | 描述 |
  | ---- | ---- |---- |
  | number | 1，-22， 2.5 | 任意数字 |
  | string | 'ho' | 任意字符串 |
  | boolean | true、false | 布尔值 |
  | 字面量 | 其本身 | 限制变量的值就是该字面量的值 |
  | any | \* | 任意类型 |
  | unknow | \* | 类型安全的 any |
  | void | 空值(undefined) | 没有值/undefined |
  | never | 没有值 | 不能是任何值 |
  | object | {name: '王贰拾'} | 任意 js 的对象 |
  | array | [1,2,3] | 任意 js 的数组 |
  | typle | [3,4] | 元素,TS 新增类型，固定长度的数组 |
  | enum | enum{A, B} | 枚举，TS 中新增类型 |

## 三、编译选项

`*` 表示任意文件 `**` 表示任意目录

- 自动编译文件

  - 编译文件时，使用`-w`指令后，TS 编译器会自动监视文件的变化，并在文件发生变化时对文件重新编译
  - 示例：`tsc xxx.ts -w`

- 自动编译整个项目

  - 如果直接使用 `tsc`指令，则可以自动将当前项目下的所有`ts`文件编译为`js`文件
  - 但是能直接使用`tsc`命令的前提是，要在项目的根目录下创建一个`ts`的配置文件`tsconfig.json`
  - `tsconfig.json`是一个`JSON`文件，添加配置文件后，只需要`tsc`命令即可完成整个项目的编译
  - 配置选项

    - `include`
      - 定义希望被编译的文件所在的目录
      - 默认值：`["**/*"]`
      - 示例： `"include": ["src/**/*","tests/**/*""]`
      - 上述文件中，所有`src`目录和`test`目录下的文件都会被编译
    - `exclude`
      - 定义需要排除在外的目录
      - 默认值：`["node_modules", "bower_components", "jspm_packages"]`
      - 示例: `"exclude": ["./src/hello/**/*"]`
      - 上述示例中，`src`下`hello`目录下所有的文件都不会被编译
    - `extends`
      - 定义被继承的配置文件
      - 示例：`"extends": "./config/base"`
    - `files`

      - 指定被编译文件的列表，只有需要编译的文件少时才会用到
      - 示例：

        - ```
          "files": [
              "core.ts",
              ...
          ]
          ```

    - `compilerOptions`: [编译器选项](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

## 四、使用`webpack`针对`ts`项目打包

# 面向对象

## 1、类（class）

- 定义类
  - ```
    class 类名{
      属性名: 类型
      constructor(参数: 类型){
        suoer() // 继承
        this.属性名 = 参数
      }
      方法名(){}
    }
    ```
- 示例

  - 封装

    ```
      class Person {
        // 实例属性，需要通过实例访问
        name: string
        age: number
        static test: string // 静态属性（类属性），可以直接通过类访问 Person.static
        readonly test1: string = 'readonly' // 只读属性，不可修改
        constructor(name: string, age: number) {
          // this表示当前的实例，就是我们新建的那个对象
          this.name = name
          this.age = age
        }
        sayHello(){}
      }
    ```

    - 继承

      ```
        class Person {
          // 实例属性，需要通过实例访问
          name: string
          age: number
          static test: string // 静态属性（类属性），可以直接通过类访问 Person.static
          readonly test1: string = 'readonly' // 只读属性，不可修改
          constructor(name: string, age: number) {
            // this表示当前的实例，就是我们新建的那个对象
            this.name = name
            this.age = age
          }
          sayHello(){}
        }

        // 继承
        // 使 Male 继承 Person 类, 使用继承后，子类将拥有所有父类的属性和方法
        // super表示当前类的父类，或可理解为当前父类的实例，this仍然为当前实例对象
        class Male extends Person {
          constructor() {
            super() // 如果在子类中写了构造函数，则必须调用父类的构造函数super()
          }
          sayHello() {
            // 子类会覆盖父类中的方法，成为方法的重写
            // 在方法中，super表示当前类的父类，或可理解为当前父类的实例，this仍然为当前实例对象
            super.sayHello()
          }
          run() {
            // this指的是当前实例对象
            console.log(`${this.name}在跑`)
          }
        }
      ```

      - 抽象类

        - 在日常开发中可能存在`基类`或者`超类`，这种只提供别的类继承，不希望被直接实例化，因此，我们可以使用`abstract`关键字来定义，表明当前的类为一个抽象类，不允许直接被实例化
        - 在抽象类中可以添加抽象方法
        - 示例

          ```
          abstract class A {
            // 抽象方法：使用 abstract 关键字开头，没有具体方法，抽象方法只能定义在抽象类中，且子类必须进行抽象方法的重写
            abstract sayHello():void

          }
          ```

## 2、接口(interface)

接口用来定义一个类的结构，定义一个类中应该包含哪些属性和方法，也可以当作类型声明去使用，从而限制类的结构
接口其实就是定义的一个规范

```
interface myInterface{
  name: string
  age: number
}
```

interface 可以重复声明

```
interface myInterface {
  gender: string
}
```

- 限制类结构（类似于抽象类）
  - 接口中之定义对象的结构，不考虑实际值
  - 在接口中所有的方法都是抽象方法

```
interface myInter {
  name: string
  sayHello(): void
}

// 使我们的类满足接口的要求
class MyClass implements myInter {
  constructor(public name: string) {
    this.name = name
  }
  sayHello():void {}
}
```

- 属性的封装

- TS 可以在属性前添加属性的修饰符

  - public: 共有属性，可以在任意位置访问&修改
  - private: 私有属性，只能在我们当前类的内部进行修改，子类也无法访问

    - 可以在类的内部添加方法，使得当前属性可以在外部方法
    - ```
        private name: string
        // 定义方法
        getPrivateValue(value: string) {
          return this.name = value
        }
      ```
    - ts 中设置属性 getter 的方式
    - ```
      class A {
        private _name: string
        constructor(name: string) {
          this._name = name
        }
        // 设置get关键字，从而获取私有属性
        get name() {
          return this._name
        }
        // 给私有属性赋值
        set name(value: string) {
          this._name = value
        }
      }

      let a = new A('wangershi')
      a.name = 'xxx'
      ```

  - protected：受保护的属性，只能在我们当前类和我们当前类的子类中使用，外部无法使用

## 3、泛型

类型不明确的时候，使用变量进行代替
在定义函数，或类的时候，遇到类型不明确的时候，可以使用泛型

- 示例

```
// T 代表统一的某个类型

function fn<T>(a: T): T{
  return a
}

// 调用
fn(10) // 类型推断，类型为number
fn<string>('hello') // 指定泛型，类型为string

// 泛型可以指定多个
function fn2<T, K>(a: T, b: K): Y {
  return a
}

fn2<number, string>(12,'hello')

// 限制泛型范围
interface Inter {
  length: number
}

// 表示当前泛型的类型，必须有 Inter 接口（或者是个类）的类型（length）
// 所以此时 T 应为 string等具有length属性的类型的值
// 泛型 T 必须为 Inter 的实现类（子类）
functin fn3<T extends Inter>(a: T): number {
  return a.length
}

fn3(123)

// 泛型在类中的使用
class MyClass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}
const mc = new MyClass<String>('123')
```
