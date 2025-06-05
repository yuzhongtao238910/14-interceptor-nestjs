/**
 * rxjs
 * 是一个用来处理异步任务的库
 * 
 * 
 * Observable 可观察对象，是rxjs的核心，表示一个数据流，可以是同步或者异步
 *  可以发出多个值，发出的值由 Observer 来订阅
 * 
 * Observer 观察者 是一个对象，定义了回调函数用于处理Observable发出的数据
 * 
 * 
 */


import { Observable } from "rxjs"

// 创建一个可观察对象
const ob1 = new Observable((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)

    // 
    subscriber.complete()
})


// subscription 表示一个对Observable的订阅
// 通过subscription，可以取消订阅，也可以组合多个订阅
const subscription = ob1.subscribe({
    next(x) {
        console.log(x, 30)
    },
    error(err) {
        console.log(err)
    },
    complete() {
        console.log("done")
    },
})