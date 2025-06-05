// 拦截器的基本原理哈
import { Observable, tap, of } from 'rxjs';


// class ExecutionContext {
//     handle(): Observable<any> {
//         console.log("pay....")
//         return of("Original Result")
//     } 
// }

const next = {
    handle() {
        console.log("pay....")
        return of('pay')
    } 
}


export class Logger1Interceptor {
    intercept(context, next) {
        // throw new Error('Method not implemented.');



        console.log("Before1.......")


        const now = Date.now()


        return next.handle().pipe(
            tap(() => console.log(`After1... ${Date.now() - now}ms`)),
        )

    } 
    
}

export class Logger2Interceptor {
    intercept(context, next) {
        // throw new Error('Method not implemented.');



        console.log("Before2.......")


        const now = Date.now()


        return next.handle().pipe(
            tap(() => console.log(`After2... ${Date.now() - now}ms`)),
        )

    } 
    
}
const log1 = new Logger1Interceptor()
const log2 = new Logger2Interceptor()




function executeInterceptors(interceptors) {
    let currentHandler = () => next.handle()

    interceptors.forEach(interceptor => {
        const preivousHandle = currentHandler
        currentHandler = () => interceptor.intercept(null, {handle: preivousHandle})
    });

    return currentHandler()
    
}
executeInterceptors([log1, log2])
    .subscribe(val => {
        console.log(val)
    })


// const originalHandler = () => next.handle()
// const logger1Handle = () => log1.intercept({}, {handle: originalHandler})
// const logger2Handle = () => log2.intercept({}, {handle: logger1Handle})

// logger2Handle()
//     .subscribe(val => {
//         console.log(val, "---------end")
//     })

// log2.intercept({}, next)
//     .subscribe((res) => {
//         console.log(res, "result2")
//     })
