import { Controller, UseInterceptors } from "@nestjs/common";
import { Get } from "@nestjs/common";

import { Logger1Interceptor } from "./interceptor/logger1.interceptor"

import { Logger2Interceptor } from "./interceptor/logger2.interceptor"

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