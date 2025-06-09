import { ExecutionContext } from "./execution-context.interface";
import { Observable } from 'rxjs';
export interface NestInterceptor {
    intercept(context: ExecutionContext, next): Observable<any> | Promise<Observable<any>>
}