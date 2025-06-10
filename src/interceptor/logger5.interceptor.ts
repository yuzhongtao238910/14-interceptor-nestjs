


import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';



@Injectable()
export class Logger5Interceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next) {
        // throw new Error('Method not implemented.');



        console.log("Before5.......")


        const now = Date.now()


        return next.handle().pipe(
            tap(() => console.log(`After5... ${Date.now() - now}ms`)),
        )

    } 
    
}
