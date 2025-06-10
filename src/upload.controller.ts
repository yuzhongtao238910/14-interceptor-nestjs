import { Controller, Post, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express"
import { Express } from 'express'

@Controller("upload")
export class UploadController {

    @Post("file")
    @UseInterceptors(FileInterceptor('file')) // FileInterceptor作用是把文件信息保存到req.file上面
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);

        return {
            message: "successed"
        }
    }
}