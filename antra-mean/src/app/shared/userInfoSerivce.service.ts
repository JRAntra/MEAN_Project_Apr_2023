// This file is used to get the user information from the database
// To use this file, you need to update the code in profile.component.ts
//! Because "@Injectable providedIn: 'root'" is used,
//! you don't need to import this service in the app module, but you need to import it in the component
import { Injectable } from '@angular/core'
import { UserInfo } from './userInfo.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
	providedIn: 'root'
})
export class UserInfoService {
	constructor(private http: HttpClient) {}

	getUserInfo(): UserInfo {
		return {
			id: 'service-id1234567',
			userEmail: 'example@example.com',
			username: 'service works',
			password: 'Password1234567',
			gender: 'Male',
			age: 20,
			phone: '1234567890',
			LikeList: [],
			avatar: '../../assets/profile-image/profile.jpg'
		}
	}
	getUserInfoFromDB(): Observable<any> {
		return this.http.get('https://dummyjson.com/users')
	}
}
