// AOP 面向切面编程
// 1- 在方法执行之前或者之后绑定额外的逻辑
/**
 * 
 * @param target 类的原型
 * @param propertyKey 方法名字字符串
 * @param descriptor 属性描述符号 descriptor.value就是方法哈
 */
function logBeforeAndAfter(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
    const originalMethod = descriptor.value

     descriptor.value = function(...args: any[]) {
        console.log(`before executing ${propertyKey}---`)
        const result = originalMethod.apply(this, args)
        console.log(`after executing ${propertyKey}+++`)
        return result
     }
}

class Example {

    @logBeforeAndAfter
    someMethod() {
        console.log('someMethod-executing')
    }
}
const e = new Example()
e.someMethod()

export {}