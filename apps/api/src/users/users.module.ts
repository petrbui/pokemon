import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersServices} from "./users.services";

@Module({
    providers: [
UsersServices
    ],
    controllers: [UsersController],
})
export class UsersModule {}