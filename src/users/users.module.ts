import { UserController } from "./users.controller";
import { Module } from "@nestjs/common/decorators";
import { UsersService } from "./users.service";
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
            secret: 'secret',
            signOptions: {expiresIn: '1d'}
          })
    ],
    controllers: [UserController],
    providers: [UsersService]
})
export class UsersModule {}