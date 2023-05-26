import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) { }

    getUsers(): void {
        this.users = this.userService.getUsers();
    }

    ngOnInit(): void {
        this.getUsers();
    }
}
