import { Injectable } from '@angular/core';
import { UserProfileWithToken } from './shared/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userProfile: UserProfileWithToken | null = null;

  constructor() {
    const storage = localStorage.getItem('userProfile');
    if (storage) {
      this.userProfile = JSON.parse(storage);
    }
  }

  setUserProfile(userProfile: UserProfileWithToken) {
    this.userProfile = userProfile;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }

  getToken() {
    return this.userProfile?.bearerToken;
  }

  getUser() {
    return this.userProfile;
  }

  clear() {
    this.userProfile = null;
    localStorage.removeItem('userProfile');
  }
}
