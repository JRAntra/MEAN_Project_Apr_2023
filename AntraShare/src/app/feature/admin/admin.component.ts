import { Component } from '@angular/core';
import { UserInfo } from 'src/app/shared/types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent {
  selectedUser?: UserInfo;
}
