import { Component, OnInit } from '@angular/core'
import { UserInfo } from 'src/app/shared/types';
import { AdminService } from 'src/app/feature/admin-page/admin.service';
import { first } from 'rxjs';

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

  ngOnInit() {
	this.adminService.getAllUser()
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.userList = response;
          console.log(response);
          
        },
        error: error => {
          console.log(error);
          alert(error);
        },
      });
  }
}
