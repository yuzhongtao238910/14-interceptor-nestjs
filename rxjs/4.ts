// 管道操作符号

import { Observable, of, from, throwError, pipe, tap, map, catchError, timeout, delay } from "rxjs"

// pipe是一个方法，是Observable实例上的一个方法哈
// 它可以接收多个操作符号作为参数，并且返回新的Observable

// 用于将多个操作符号组合在一个，形成一个管道
// 通过这个管道，可以对Observable对象发出的数据进行转换和操作哈


// tap是一个操作符号，用于对Observable对象发出的值进行执行副作用的操作
// 比如记录日志，他不会改变数据流之中的值
of(1, 2, 3)
    .pipe(
        tap(val => console.log(val, "-tap-"))
    )
    .subscribe(console.log)

// map 用于对Observable对象发出的值进行转换或者是映射
// of(1, 2, 3)
//     .pipe(
//         map(val => val * 2)
//     )
//     .subscribe(console.log)


of(1, 2, 3)
    .pipe(
        tap(val => console.log(val, "-tap-")),
        map(val => val * 2)
    )
    .subscribe(console.log)

// catchError 捕获错误，用于捕获Observable之中的错误，并且返回新的Observable
throwError(() => {
    return new Error("hello")
}).pipe(
    catchError(err => {
        return of(`Caught: ${err.message}`)
    }),
    tap(val => console.log(val, "error-tap")),
).subscribe(val => {
    console.log(val, 45)
})

// 对Observable增加超时限制
// timeout 用于如果到了时间，还没有发出值，就会抛出错误
// delay 用于延迟

of("type")
    .pipe(
        delay(2000),
        timeout(1000)
    )
    .subscribe({
        next(val) {
            console.log(val, "58")
        },
        error(err) {
            console.log(err)
        }
    })

