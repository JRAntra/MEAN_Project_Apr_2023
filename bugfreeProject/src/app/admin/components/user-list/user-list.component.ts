import { Component, EventEmitter, Output } from '@angular/core';
import {OnInit} from '@angular/core';
import {UserService} from 'src/app/core/services/user.service';
import {User} from 'src/app/User';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
    users: User[] = [];
    @Output() userEmitter = new EventEmitter<User>();
    
    // send clicked user information to parent component
    onClickUser(user: User) {
        this.userEmitter.emit(user);
    }

    constructor(private userService: UserService) { }

    getUsers(): void {
        this.userService.getUsers().subscribe((resp: User[]) => {
            this.users = resp;
        })
    }

    ngOnInit(): void {
        this.getUsers();
    }


}
