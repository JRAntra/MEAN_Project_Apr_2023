import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private userEmail: string="";

  constructor() { }

  setUserEmail(email: string) {
    this.userEmail = email;
    console.log("setUserEmail: " + this.userEmail);
    
  }

  getUserEmail() {
    return this.userEmail;
  }
}
