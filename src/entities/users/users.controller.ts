import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "./users.model";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController {
    constructor (private userService: UsersService) {}

    @Post()
    insertUser(
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ) {
        const userId = this.userService.insertUser(name, age, surname, email);
        return {
            id: userId,
        };
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get(':userId')
    getUser(
        @Param('userId') userId: string
    ) {
        return this.userService.getUser(userId);
    }

    @Put(':userId')
    updateUser(
        @Body('userId') userId: string,
        @Body('name') name: string,
        @Body('age') age: number,
        @Body('surname') surname: string,
        @Body('email') email: string,
    ) {
        return this.userService.updateUser(userId, name, age, surname, email);
    }

    @Delete(':userId')
    deleteUser(@Param('userId') userId: string) {
        this.userService.deleteUser(userId);
    }
} 