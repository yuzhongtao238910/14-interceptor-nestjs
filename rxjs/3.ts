

import { Observable, of, from, throwError } from "rxjs"

/**
 * 创建操作符号
 * 用来创建Observable的操作符号
 * of 是一个创建操作符号，用于创建一个发出特定值的Observable
 * 
 * from 是一个创建操作符好，可以将数组，promise或者迭代器转换为Observable
 */
// 创建一个可观察对象
// const ob1 = of(1, 2, 3)

// ob1.subscribe((val) => {
//     console.log(val, "+")
// })

// const ob2 = from([1, 2, 3])
// ob2.subscribe(val => {
//     console.log(val, "21")
// })

// const ob3 = of([1, 2, 3])
// ob3.subscribe(val => {
//     console.log(val, "21")
// })

// const ob4 = from(Promise.resolve("ok"))
// ob4.subscribe(val => {
//     console.log(val, "21")
// })

// throwError 是一个创建操作符好，创建一个立即发出错误的Observable
const ob5 = throwError(() => {
    return new Error("hello")
})


ob5.subscribe({
    // 用来捕获错误哈
    error(err) {
        console.log(err, 44)
    },
    next: (val) => {

    }
})

console.log('continue')