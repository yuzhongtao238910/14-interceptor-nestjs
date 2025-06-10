import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { APP_FILTER, APP_PIPE } from "@nestjs/core"
import { CustomExceptionFilter } from "./exception/self-custom-exception.filter"
import { SimplePipe } from "./self-pipe/simple.pipe"
import { AccountController } from "./account.controller"
import { AuthMiddleware } from "./middleware/auth.middleware"
import { APP_GUARD } from "@nestjs/core"
import { AuthGuard2 } from "./guards/auth2.guard"
import { AuthGuard } from "./guards/auth.guard"
import { PayController } from "./pay.controller"

import { Logger5Interceptor } from "./interceptor/logger5.interceptor";
import { Logger6Interceptor } from "./interceptor/logger6.interceptor";
import { APP_INTERCEPTOR } from "@nestjs/core"
@Module({

    controllers: [PayController],
    // LoggingInterceptor
    // controllers: [AppController, AccountController],
    providers:[
        // {
        //     provide: "PREFIX",
        //     useValue: "prefix"
        // },
        // {
        //     provide: APP_PIPE,
        //     useClass: SimplePipe
        // }

        // {
        //     provide: APP_GUARD,
        //     useClass: AuthGuard,
        // }
        {
            provide: APP_INTERCEPTOR,
            useClass: Logger6Interceptor
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: Logger5Interceptor
        },
        
    ],
    exports: [
        // AppService
    ]
})
export class AppModule {}
// export class AppModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer.apply(AuthMiddleware)
//             .forRoutes("*")
//     }
    
// }
