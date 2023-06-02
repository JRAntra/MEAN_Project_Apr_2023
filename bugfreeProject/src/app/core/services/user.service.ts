import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/User';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) { }

    private userListURL = 'http://localhost:4231/api/users/getAllUsers';
    getUsers() {
        return this.http.get<User[]>(this.userListURL);
    }
}