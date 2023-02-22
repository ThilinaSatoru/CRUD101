import { UserController } from "./users.controller";
import { Module } from "@nestjs/common/decorators";
import { UsersService } from "./users.service";

@Module({
    controllers: [UserController],
    providers: [UsersService],
})
export class UserModule {}