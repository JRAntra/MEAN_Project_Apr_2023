import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInfo } from 'src/app/shared/types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
})
export class UserListComponent {
  @Input() selected?: UserInfo;

  @Output() selectedChange: EventEmitter<UserInfo> = new EventEmitter();

  emitSelectedUser(selectedUser: UserInfo) {
    this.selectedChange.emit(selectedUser);
  }

  userList: UserInfo[] = [];

  virtualUserList: UserInfo[] = [];

  generateUser(id:number): UserInfo {
    const user: UserInfo = {
      username: id.toString(),
      email: id + '@gmail.com',
      avatar: '',
      name: 'John Doe',
      gender: 'Male',
      birthday: new Date(2000, 0, 1),
    };

    return user;
  }

  ngOnInit() {
    this.userList = Array.from({ length: 10000 }).map((_, i) => this.generateUser(i + 1));
    this.virtualUserList = Array.from({ length: 10000 });
  }
}
