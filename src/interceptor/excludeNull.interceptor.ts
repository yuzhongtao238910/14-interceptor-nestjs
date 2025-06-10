


import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

/*
响应映射#
我们已经知道 handle() 返回一个 Observable。
流包含从路由处理程序返回的值，因此我们可以使用 RxJS 的 map() 操作符轻松地对其进行修改。
*/

@Injectable()
export class ExcludeNullInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next) {
        // throw new Error('Method not implemented.');



        console.log("ExcludeNullInterceptor.......")


        const now = Date.now()


        return next.handle().pipe(
            map(data => {
                return data === null || data === undefined ? "1" : data
            })
        )

    } 
    
}
