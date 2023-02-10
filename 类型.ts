// 字面量进行类型声明
let a: 10 // 此时不能进行修改，类似于常量

// 联合类型
let b: 'male' | 'female' // 为 male 或 female
let c: boolean | string

// any: 设置为any类型后，相当于TS针对该变量关闭了类型检测，可以赋值给其然任意类型元素
// 声明变量，如果为指定类型，那么解析器会默认赋值为any类型
let d: any
let e

// unknow: 未知类型的值，不能赋值给其他类型的变量
let f: unknown;
f = 10
f = '10'
f = true

// 类型断言，我们主动告诉解 析器当前变量实际类型
f = e as string

// void: 针对没有返回值的函数使用void表示没有返回值，或返回值为空
function fn(): void {
    return
}

// never: 表示永远不会返回结果，表示会中断当前函数运行，不会之行结束
function fn1(): never {
    throw new Error('报错了！')
}

// object: 表示一个js对象
let o: object
let o1 = {}
o = o1
o = function () { }

// 或者可以写为
// o2表示一个name属性为字符串的对象
// 加个?表示为可选属性
// [propName: string]: any 当前对象可以有任意值为字符串的属性
let o2: { name: string, age?: number, [propName: string]: any }


// 表示声明一个有两个number类型且返回值为number类型的函数
// c?:number 表示c可有且为number类型，并且可选
let g: (a: number, b: number, c?: number) => number
g = function (n1: number, n2: number): number {
    return n1 + n2
}

// 表示字符串数组
let h: string[]
// 表示字符串类型的数组
let i: Array<string>
let j: Array<any>

// tupl 元组：固定长度的数组
// 长度为2且类型为string的元组，第三个类型为number
let k: [string, string, number]

// enum 枚举：将所有可能的值全部列举出来
enum Gender {
    Male = 0,
    Female = 1
}
let l: { name: string, gender: Gender }
l = {
    name: '王贰拾',
    gender: Gender.Male
}

// m需要同时满足两种类型
let m: { name: string } & { age: number }
m = {
    name: 'wangershi',
    age: 24
}

// 类型别名：给自定义类型起一个别名
type myType = 1 | 2 | 3 | 4 | 5
let n: myType
n = 1