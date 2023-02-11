console.log(123)
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
    sayHello() {
        console.log('父类 sayHello', this)
    }
}

// 继承
// 使 Male 继承 Person 类, 使用继承后，子类将拥有所有父类的属性和方法
class Male extends Person {
    // super()
    sayHello() {
        // 子类会覆盖父类中的方法，成为方法的重写
        // 在方法中，super表示当前类的父类，或可理解为当前父类的实例
        super.sayHello()
    }
    run() {
        // this指的是当前实例对象
        console.log(`${this.name}在跑`)
    }
}

const a = new Male('王贰拾', 20)
console.log('a', a)
a.sayHello()
