// AOP 面向切面编程
// 3- 转换从函数抛出的异常
/**
 * 
 * @param target 类的原型
 * @param propertyKey 方法名字字符串
 * @param descriptor 属性描述符号 descriptor.value就是方法哈
 */
function transformException(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target)
    // console.log(propertyKey)
    // console.log(descriptor)
    const originalMethod = descriptor.value

     descriptor.value = function(...args: any[]) {
        try {
            const result = originalMethod.apply(this, args)
            return result
        } catch(error) {
            throw new Error("Transformed Exception")
        }
        
     }
}

class Example {

    @transformException
    riskMethod() {
        throw new Error("Original Exception")
    }
}
const e = new Example()
try {
    console.log(e.riskMethod())
} catch(error) {
    console.log(error.message)
}


export {}