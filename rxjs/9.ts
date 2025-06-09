// // import { from } from "rxjs"

// import { error } from "console"


class Observable {
    constructor(
        private _subscribe
    ) {

    }

    // 订阅方法，接收一个观察者对象observer
    subscribe(observer) {
        // 调用存储的订阅函数，并且传入观察者对象
        return this._subscribe(observer)
    }
}


function from(args: any) {
    return new Observable((observer) => {

        if (args instanceof Promise) {
            args.then((res) => {
                for (let val of res) {
                    observer.next(val)
                }
                observer.complete()
            }, error => {
                observer.error(error)
            })
        } else {
            for (let val of args) {
                observer.next(val)
            }

            observer.complete()
        }
        
    })
}


// from 也是一个创建可观察对象的函数
// 它可以接收可迭代对象哈
from(Promise.reject([1, 2, 3])).subscribe({
    next(val) {
        console.log(val)
    },
    error(err) {
        console.log(err)
    },
    complete() {
        console.log("complete")
    }
})



export {}