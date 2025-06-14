import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable, of, tap } from 'rxjs';
import { Request } from "express"

let cacheMap = new Map()

@Injectable()
export class CacheInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next ): Observable<any> {
        

        const request = context.switchToHttp().getRequest<Request>()

        const id = request.query.id

        const user = cacheMap.get(id)

        if (user) {
            console.log(19)
            return of(user)
        }


        return next.handle().pipe(
            tap(value => {
                cacheMap.set("1", value)
            })
        )
    }
}