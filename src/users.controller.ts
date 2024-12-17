import { Body, Controller ,Delete,Get, HttpCode, Param, Post, Put, Redirect, Req , Res} from "@nestjs/common";
import { userDTO } from "./dto/user.dto";


// interface userDTO{
    
// }

let USERS = [];


@Controller("/users")
export class usersController{

    @Post()
    create(@Body() createUserDTO : userDTO){
        USERS.push(createUserDTO);
        return 'User added';

    }

    @Get()
    getUsers(){
        return USERS;
    }

    @Get(':id')
    getUser(@Param('id') id : number){
        return USERS.find((user) => +user.id == + id);
    }


    @Put(':id')
    updateUsers(@Param('id') id : number , @Body() updateUserDTO : userDTO){
        const userIdx = USERS.findIndex((user) => +user.id == +id);

        if(!userIdx){
            return;
        }
        USERS[userIdx] = updateUserDTO;
        return 'updated successfully'
    }

    @Delete(':id')
    deleteUser(@Param('id') id : number){
        USERS = USERS.filter((user) => +user.id != +id);
        return "Deleted "

        
    }






    
}