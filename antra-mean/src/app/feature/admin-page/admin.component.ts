import { Component, OnInit } from '@angular/core'
import { UserInfo } from 'src/app/shared/types';
import { AdminService } from 'src/app/feature/admin-page/admin.service';
import { TruncatePipe } from './truncate.pipe';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.sass']
})

export class AdminPageComponent implements OnInit {
	constructor(private adminService: AdminService) {
		this.userList = [];
}
  userList: UserInfo[];

  selectedUser?: UserInfo;

  selectUser(user: UserInfo) {
    this.selectedUser = user;
  }

  ngOnInit() {
	this.adminService.getAllUser()
      .subscribe({
        next: (response) => {
          this.userList = response;
        },
        error: error => {
          alert(error);
        },
      });
  }
}
