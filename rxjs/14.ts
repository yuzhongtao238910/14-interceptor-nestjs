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

let i = 0
function tap(sideEffectFn) {
    return function (source) {
        return new Observable((observer) => {

            // console.log(source, 36, observer)


            return source.subscribe({
                next(value) {
                    debugger
                    try {
                        sideEffectFn(value); // 执行副作用函数
                        observer.next(value); // 原样传下去
                    } catch (e) {
                        observer.error?.(e);
                    }
                },
                error(err) {
                    observer.error?.(err);
                },
                complete() {
                    observer.complete?.("---" + i++);
                },
                b: 2
            });
        });
    };
}

// new Observable((observer) => {
//     [1].forEach((arg) => {
//         observer.next(arg)
//     })
//     observer.complete()
// }).pipe(
//     tap(x => console.log('中间 tap1:', x)),
//     // 这里也可以继续 map(x => x * 10)
// )





new Observable((observer) => {

    // console.log(source, 36, observer)


    return (new Observable((observer) => {

        // console.log(source, 36, observer)
    
    
        return new Observable((observer) => {
            [1].forEach((arg) => {
                debugger
                observer.next(arg)
            })
            observer.complete()
        }).subscribe({
            next(value) {
                debugger
                try {
                    demo1(value); // 执行副作用函数
                    debugger
                    observer.next(value); // 原样传下去
                } catch (e) {
                    observer.error?.(e);
                }
            },
            error(err) {
                observer.error?.(err);
            },
            complete() {
                observer.complete?.("---" + i++);
            },
            b: 2
        });
    })).subscribe({
        next(value) {
            debugger
            try {
                demo2(value); // 执行副作用函数
                observer.next(value); // 原样传下去
            } catch (e) {
                observer.error?.(e);
            }
        },
        error(err) {
            observer.error?.(err);
        },
        complete() {
            observer.complete?.("---" + i++);
        },
        b: 2
    });
}).subscribe({
    next(x) {
        console.log('最终值1:', x);
    },
    complete() {
        console.log('完成1');
    },
    a: 1
})

function demo1(x) {
    console.log('中间 tap1:', x)
}

function demo2(x) {
    console.log('中间 tap2:', x)
}



// let ob2 = new Observable((observer) => {
//     return ob1.subscribe({
//         next(value) {
//             try {
//                 sideEffectFn(value); // 执行副作用函数
//                 observer.next(value); // 原样传下去
//             } catch (e) {
//                 observer.error?.(e);
//             }
//         },
//         error(err) {
//             observer.error?.(err);
//         },
//         complete() {
//             observer.complete?.("---" + i++);
//         }
//     });
// });

// new Observable((observer) => {
//     return ob2.subscribe({
//         next(value) {
//             try {
//                 sideEffectFn(value); // 执行副作用函数
//                 observer.next(value); // 原样传下去
//             } catch (e) {
//                 observer.error?.(e);
//             }
//         },
//         error(err) {
//             observer.error?.(err);
//         },
//         complete() {
//             observer.complete?.("---" + i++);
//         }
//     });
// }).subscribe



// .subscribe({
//     next(x) {
//         console.log('最终值2:', x);
//     },
//     complete() {
//         console.log('完成2');
//     }
// });


// new Observable((observer) => {
//     return source.subscribe({
//         next(value) {
//             try {
//                 sideEffectFn(value); // 执行副作用函数
//                 observer.next(value); // 原样传下去
//             } catch (e) {
//                 observer.error?.(e);
//             }
//         },
//         error(err) {
//             observer.error?.(err);
//         },
//         complete() {
//             observer.complete?.("---" + i++);
//         }
//     });
// })
// .pipe(
//     tap(x => console.log('中间 tap2:', x)),
// )
// .subscribe({
//     next(x) {
//         console.log('最终值:', x);
//     },
//     complete() {
//         console.log('完成');
//     }
// });



export { }