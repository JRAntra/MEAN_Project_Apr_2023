import { Injectable } from '@angular/core';
import { UserProfile } from './shared/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userProfile: UserProfile | null = null;

  constructor() {
    const storage = localStorage.getItem('userProfile');
    if (storage) {
      this.userProfile = JSON.parse(storage);
    }
  }

  setUserProfile(userProfile: UserProfile) {
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
