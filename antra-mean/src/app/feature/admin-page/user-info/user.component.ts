import { Component, Input } from '@angular/core';
import { UserInfo } from 'src/app/shared/types';

@Component({
  selector: 'app-user-info',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserDetailComponent {
  @Input() selectedUser?: UserInfo;
}