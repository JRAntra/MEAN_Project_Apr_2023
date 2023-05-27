/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private router: Router) { }

  checkExistEmail(email: string) {
    return this.http.get(`${environment.apiUrl}/api/register/checkExistByEmail/` + email);
  }

  checkExistUsername(username: string) {
    return this.http.get(`${environment.apiUrl}/api/register/checkExistByUsername/` + username);
  }

  register(user: UserProfile) {
    const body = {
      userName: user.userName,
      userEmail: user.userEmail,
      password: user.password,
    };
    return this.http.post(`${environment.apiUrl}/api/register/createNewAccount`, body, { observe: 'response' });
  }

  login(user: UserProfile) {
    const body = {
      userEmail: user.userEmail,
      password: user.password,
    };
    return this.http.post(`${environment.apiUrl}/api/login/`, body);
  }
}
