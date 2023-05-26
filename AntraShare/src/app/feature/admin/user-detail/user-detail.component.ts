import { Component, Input } from '@angular/core';
import { UserProfile } from 'src/app/shared/types';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass'],
})
export class UserDetailComponent {
  @Input() selectedUser?: UserProfile;
}
