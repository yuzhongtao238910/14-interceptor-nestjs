// 拦截器的基本原理哈
import { Observable, tap, of, from, mergeMap } from 'rxjs';


// class ExecutionContext {
//     handle(): Observable<any> {
//         console.log("pay....")
//         return of("Original Result")
//     } 
// }

// const next = {
//     handle() {
//         console.log("pay....")
//         return of('pay')
//     } 
// }



// 这个是路由处理函数
async function routerHandler() {
    console.log("routerHandler")
    return "pay"
}


export class Logger1Interceptor {
    async intercept(context, next): Promise<Observable<any>>  {
        // throw new Error('Method not implemented.');



        console.log("Before1.......")


        const now = Date.now()


        return next.handle().pipe(
            tap(() => console.log(`After1... ${Date.now() - now}ms`)),
        )

    } 
    
}

export class Logger2Interceptor {
    async intercept(context, next): Promise<Observable<any>> {
        // throw new Error('Method not implemented.');



        console.log("Before2.......")


        const now = Date.now()


        debugger
        return next.handle().pipe(
            tap(() => {
                console.log(`After2... ${Date.now() - now}ms`)
                return "After2"
            }),
        )
    } 
    
}
const log1 = new Logger1Interceptor()
const log2 = new Logger2Interceptor()







function callInterceptors(interceptors) {
    const nextFn = (i = 0): Observable<any> => {
        if (i >= interceptors.length) {
            return routerHandler() instanceof Promise ? from(routerHandler()) : of(routerHandler())
        }

        const result = interceptors[i].intercept(null, {
            handle: () => nextFn(i + 1)
        })

        // from可以把promise变成可观察对象哈
        return from(result)
            .pipe(
                mergeMap(val => val instanceof Observable ? val : of(val))
            )
    }

    return nextFn()
}
debugger
const interceptors = [log2, log1]
callInterceptors(interceptors)
    .subscribe({
        next(val) {
            console.log(val)
        },
        error(err) {
            // console.log(err)
        },
        complete() {
            console.log("complete1")
        }
    })



