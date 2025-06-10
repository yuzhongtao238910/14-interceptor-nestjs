import { Controller, UseInterceptors } from "@nestjs/common";
import { Get } from "@nestjs/common";

import { Logger1Interceptor } from "./interceptor/logger1.interceptor"

import { Logger2Interceptor } from "./interceptor/logger2.interceptor"
import { Logger4Interceptor } from "./interceptor/logger4.interceptor";
import { Logger3Interceptor } from "./interceptor/logger3.interceptor";


@UseInterceptors(Logger3Interceptor)
@UseInterceptors(Logger4Interceptor)
@Controller("pay")
export class PayController {


    /**
        Before2.......
        Before1.......
        pay----------
        After1... 1ms
        After2... 2ms
     */
    @UseInterceptors(Logger1Interceptor)
    @UseInterceptors(Logger2Interceptor)
    @Get("") 
    async index(){
        console.log("pay----------")
        return "pay"
    }
}

/**
    Before2.......
    Before1.......
    pay----------
    After1... 2ms
    After2... 3ms
 */

/**
 Before6.......
 Before5.......
 Before6.......
 Before5.......
 Before5.......
 Before4.......
 Before3.......
 Before2.......
 Before1.......
 pay----------
 After1... 1ms
 After2... 1ms
 After3... 1ms
 After4... 1ms
 After5... 3ms
 After6... 3ms
 */