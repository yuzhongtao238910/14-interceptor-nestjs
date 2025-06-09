/**
 * 拦截器的装饰器哈 
 */

import "reflect-metadata"
export function UseInterceptors(...interceptors) {
    return function(target: Function | object, propertyKey?: string, descriptor?: any) {

        
        if (descriptor) {
            const existingInterceptors = Reflect.getMetadata("interceptors", descriptor.value) ?? []
            Reflect.defineMetadata("interceptors", [...existingInterceptors, ...interceptors], descriptor.value)

        } else {
            const existingInterceptors = Reflect.getMetadata("interceptors", target) ?? []
            Reflect.defineMetadata("interceptors", [...existingInterceptors, ...interceptors], target)
        }
    }
}