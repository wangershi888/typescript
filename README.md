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

        ```

        ```

    - `compilerOptions`: [编译器选项](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
