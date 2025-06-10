


import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';



@Injectable()
export class Logger3Interceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next) {
        // throw new Error('Method not implemented.');



        console.log("Before3.......")


        const now = Date.now()


        return next.handle().pipe(
            tap(() => console.log(`After3... ${Date.now() - now}ms`)),
        )

    } 
    
}
