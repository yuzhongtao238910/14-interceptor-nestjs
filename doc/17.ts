// AOP 面向切面编程
// 2- 转换从函数返回的结果
/**
 * 
 * @param target 类的原型
 * @param propertyKey 方法名字字符串
 * @param descriptor 属性描述符号 descriptor.value就是方法哈
 */
function transformResult(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target)
    // console.log(propertyKey)
    // console.log(descriptor)
    const originalMethod = descriptor.value

     descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args)
        return `Transform Result: ${result}`
     }
}

class Example {

    @transformResult
    getResult() {
        return 'Original-result'
    }
}
const e = new Example()
console.log(e.getResult())

export {}