import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UserProfile } from 'src/app/shared/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private http:HttpClient, private router:Router) { }
  login_info: UserProfile = {
    userEmail: '',
    password: '',
  };

  loginLoading_icon = false;

  onLogin() {
    this.loginLoading_icon = true;

    setTimeout(() => {
      this.loginLoading_icon = false;
    }, 2000);

    // const headers = { 'Content-Type': 'application/json' };
    // const body = JSON.stringify({
    //   userEmail: this.login_info.userEmail,
    //   password: this.login_info.password,
    // });
    // firstValueFrom(this.http.post<any>('http://localhost:4567/login', body, { headers, observe: 'response' }))
    //   .then((response) => {
    //     console.log(response);
    //   });
  }

  agreement_checked = false;
}

/*
{
  userName: 'allister',
  userEmail: 'allister@abc.com',
  password: '1Q2w3e4r'
}
*/