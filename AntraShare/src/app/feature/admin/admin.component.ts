import { Component, OnInit } from '@angular/core';

import { UserProfile } from 'src/app/shared/types';

import { AdminService } from './admin.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export class AdminComponent implements OnInit {
  constructor(private adminService: AdminService) {
    this.userList = [];
  }

  userList: UserProfile[];
  selectedUser?: UserProfile;

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
