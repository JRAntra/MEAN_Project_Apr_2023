import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfile } from 'src/app/shared/types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
})
export class UserListComponent {
  @Input() selected?: UserProfile;

  @Output() selectedChange: EventEmitter<UserProfile> = new EventEmitter();

  emitSelectedUser(selectedUser: UserProfile) {
    this.selectedChange.emit(selectedUser);
  }

  @Input() userList!: UserProfile[];

  virtualUserList: UserProfile[] = [];

  generateUser(id: number): UserProfile {
    const user: UserProfile = {
      userName: id.toString(),
      userEmail: id + '@gmail.com',
      name: 'John Doe',
      gender: 'Male',
      age: 23,
      userRole: 'user',
    };

    return user;
  }

  ngOnInit() {
    this.userList = Array.from({ length: 10000 }).map((_, i) =>
      this.generateUser(i + 1)
    );
    this.virtualUserList = Array.from({ length: 10000 });
  }
}
