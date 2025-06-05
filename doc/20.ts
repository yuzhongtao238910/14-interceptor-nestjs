// AOP 面向切面编程
// 5- 根据特定条件完全覆盖一个函数（例如，用于缓存目的）
// 实际上就是追加逻辑哈
/**
 * 
 * @param target 类的原型
 * @param propertyKey 方法名字字符串
 * @param descriptor 属性描述符号 descriptor.value就是方法哈
 */

const cache = new Map()
function cacheResult(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

     descriptor.value = function(...args: any[]) {
        const cacheKey = JSON.stringify(args)
        if (cache.has(cacheKey)) {
            console.log("走缓存")
            return cache.get(cacheKey)
        } else {
            console.log("nono缓存")
            const result = originalMethod.apply(this, args)
            cache.set(cacheKey, result)
            return result
        }
        
     }
}

class Example {

    @cacheResult
    calcuate(a: number, b: number) {
        console.log('calcuating-executing')
        return a + b
    }
}
const e = new Example()
e.calcuate(2, 1)
e.calcuate(2, 1)

export {}