import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersServices {
    getUsers(): string {
        return 'Users';
    }
}
