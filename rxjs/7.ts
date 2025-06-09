/*
拦截器的执行机制
*/
// import { of, } from "rxjs"

// of是一个创建可观察对象的函数，接收任意数量的参数，并将这些参数依次作为数据项发出来哈


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

function of(...args: any[]) {
    return new Observable((observer) => {
        args.forEach((arg) => {
            observer.next(arg)
        })
        observer.complete()
    })
}


// 用于创建包含指定的值的可观察者对象
of(1, 2, 3).subscribe({
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