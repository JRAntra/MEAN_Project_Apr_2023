import { Component } from '@angular/core';
import { UserInfo } from 'src/app/shared/types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent {
  userList: UserInfo[] = [];

  virtualUserList: UserInfo[] = [];

  cols = [
    { field: 'avatar', header: 'Avatar' },
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' },
  ];

  generateUser(id:number): UserInfo {
    const user: UserInfo = {
      username: id.toString(),
      email: id + '@gmail.com',
      avatar: '',
    };

    return user;
  }

  ngOnInit() {
    this.userList = Array.from({ length: 10000 }).map((_, i) => this.generateUser(i + 1));
    this.virtualUserList = Array.from({ length: 10000 });
  }
}
