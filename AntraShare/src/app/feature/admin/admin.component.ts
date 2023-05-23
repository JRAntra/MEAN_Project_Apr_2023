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

  selectedUser?: UserInfo;

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
      name: 'John Doe',
      gender: 'Male',
      birthday: new Date(2000, 1, 1),
    };

    return user;
  }

  ngOnInit() {
    this.userList = Array.from({ length: 10000 }).map((_, i) => this.generateUser(i + 1));
    this.virtualUserList = Array.from({ length: 10000 });
  }
}
