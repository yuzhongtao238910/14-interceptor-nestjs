


import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';



@Injectable()
export class Logger4Interceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next) {
        // throw new Error('Method not implemented.');



        console.log("Before4.......")


        const now = Date.now()


        return next.handle().pipe(
            tap(() => console.log(`After4... ${Date.now() - now}ms`)),
        )

    } 
    
}
