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

  cols = [
    { field: 'avatar', header: 'Avatar' },
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' },
  ];

  // generateUser(id:number): UserInfo {
  //   return new UserInfo()
  // }

  // ngOnInit() {
  //     this.cars = Array.from({ length: 10000 }).map((_, i) => this.carService.generateCar(i + 1));
  //     this.virtualCars = Array.from({ length: 10000 });
  // }
}
