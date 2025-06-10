import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Request } from "express"

let cacheMap = new Map()

@Injectable()
export class CacheInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next ): Observable<any> {
        

        const request = context.switchToHttp().getRequest<Request>()

        const id = request.query.id

        const user = cacheMap.get(id)

        if (user) {
            return of(user)
        }


        return next.handle().pipe(

        )
    }
}