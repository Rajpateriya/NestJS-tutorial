import { Controller ,Get, HttpCode, Redirect, Req , Res} from "@nestjs/common";
import { Request , Response } from "express";


@Controller("/users")
export class Users{

    @Get('/profile')
    @HttpCode(201)
    getProfile(@Req() req:Request , @Res() res: Response){
        res.json({
            hello : 'world',
        })
    }
    
    @Get('/account')
    @Redirect('/users/profile')
    redirectRoute(){
        return ' Working account'
    }
}