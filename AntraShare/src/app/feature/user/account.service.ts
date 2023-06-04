import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enc, HmacSHA256 } from 'crypto-js';
import {
  UserProfile,
  UserProfileWithPassword,
  UserProfileWithToken,
} from 'src/app/shared/types';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  salt = 'salt-placeholder-antrashare'; // It should be fetched from server, and should be different for each user
  constructor(private http: HttpClient) {}

  checkExistEmail(email: string) {
    return this.http.get<boolean>(
      `${environment.apiUrl}/api/register/checkExistByEmail/` + email
    );
  }

  checkExistUsername(username: string) {
    return this.http.get<boolean>(
      `${environment.apiUrl}/api/register/checkExistByUsername/` + username
    );
  }

  register(user: UserProfileWithPassword) {
    const mac = enc.Base64.stringify(HmacSHA256(user.password, this.salt));
    return this.http.post<UserProfile>(
      `${environment.apiUrl}/api/register/createNewAccount`,
      { ...user, password: mac } as UserProfileWithPassword,
      { observe: 'response' }
    );
  }

  login(loginInfo: { userEmail: string; password: string }) {
    const mac = enc.Base64.stringify(HmacSHA256(loginInfo.password, this.salt));
    return this.http.post<UserProfileWithToken>(
      `${environment.apiUrl}/api/login/`,
      {
        userEmail: loginInfo.userEmail,
        password: mac,
      }
    );
  }
}
