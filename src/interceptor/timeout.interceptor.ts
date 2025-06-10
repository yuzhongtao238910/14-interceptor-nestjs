import { Injectable, NestInterceptor, ExecutionContext, RequestTimeoutException, BadRequestException, CallHandler } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            timeout(2000),
            catchError(err => {
                console.log(11, err)
                if (err instanceof TimeoutError) {
                    return throwError(() => new RequestTimeoutException("timeout", "timeout"));
                }
                return throwError(() => new BadRequestException("timeout", "timeout"));
            }),
        );
    };
};