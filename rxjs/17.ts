// import { from, of } from 'rxjs'










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


    // 这个是管道方法，接收多个操作符号，并且依次应用
    pipe(operator) {
        // console.log(operator, 38)
        return operator(this)
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
function map(project) {
    return function(source) {
        return new Observable((observer) => {
            source.subscribe({
                next(val) {
                    observer.next(project(val))
                },
                error(err) {
                    observer.error(err)
                },
                complete() {
                    observer.complete()
                }
            })
        })
    }
}

const yu = of(1, 2, 3).pipe(
    map(val => '10' + val)
).subscribe({
    next(val) {
        console.log(val, "result")
    },
    complete() {
        // console.log("complete")
    }
})

export {}