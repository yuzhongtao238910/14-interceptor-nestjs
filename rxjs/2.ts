

import { Observable } from "rxjs"

// 创建一个可观察对象
const ob1 = new Observable((subscriber) => {
    // subscriber.next(1)
    // subscriber.next(2)
    // subscriber.next(3)

    // // 
    // subscriber.complete()


    let count = 0 

    const intervalId = setInterval(() => {
        subscriber.next(count++)
    }, 1000)


    // 走取消订阅函数
    return () => {
        console.log("取消订阅了")
        clearInterval(intervalId)
    }
})


// subscription 表示一个对Observable的订阅
// 通过subscription，可以取消订阅，也可以组合多个订阅
const subscription = ob1.subscribe((value) => {
    console.log(value)
})


setTimeout(() => {
    // 取消订阅
    subscription.unsubscribe()
}, 3000)