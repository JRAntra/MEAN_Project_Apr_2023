import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  password: string;
  email: string;
  gender: string;
  age: number;
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent implements OnInit {
  users: User[] = [
    {name: 'User1', password: 'password1', email: 'email1@example.com', gender: 'Male', age: 25},
    {name: 'User2', password: 'password2', email: 'email2@example.com', gender: 'Female', age: 30},
    // Add more users as needed
  ];
  selectedUser?: User;

  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    // Logic for adding a user
  }

  deleteUser(user: User): void {
    // Logic for deleting a user
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }
}
