import { Injectable } from '@angular/core';
import { User } from 'src/app/User';
import { USERS } from 'src/app/mock-users';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor() { }

    getUsers(): User[] {
        return USERS;
    }
}
