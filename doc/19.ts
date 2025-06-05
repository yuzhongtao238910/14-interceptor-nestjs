// AOP 面向切面编程
// 4- 扩展基本的函数行为,这个和第一个很像 ==== 1- 在方法执行之前或者之后绑定额外的逻辑
// 实际上就是追加逻辑哈
/**
 * 
 * @param target 类的原型
 * @param propertyKey 方法名字字符串
 * @param descriptor 属性描述符号 descriptor.value就是方法哈
 */
function extendBehavior(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

     descriptor.value = function(...args: any[]) {
        console.log(`extended ${propertyKey}---`)
        const result = originalMethod.apply(this, args)
        return result
     }
}

class Example {

    @extendBehavior
    baseMethod() {
        console.log('baseMethod-executing')
    }
}
const e = new Example()
e.baseMethod()

export {}