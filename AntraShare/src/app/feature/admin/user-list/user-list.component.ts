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

  @Input() userList: UserProfile[] = [];

  virtualUserList: UserProfile[] = [];

  ngOnInit() {}
}
