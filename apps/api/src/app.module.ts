import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersController} from "./users/users.controller";
import {UsersServices} from "./users/users.services";

@Module({
  imports: [],
  controllers: [AppController,UsersController],
  providers: [AppService,UsersServices],
})
export class AppModule {}
