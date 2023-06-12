// This file is used to get the user information from the database
// To use this file, you need to update the code in profile.component.ts
//! Because "@Injectable providedIn: 'root'" is used,
//! you don't need to import this service in the app module, but you need to import it in the component
import { Injectable } from '@angular/core'
import { UserInfo } from './userInfo.model'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { API } from 'src/app/shared/api'

import { catchError, map } from 'rxjs/operators'
@Injectable({
	providedIn: 'root'
})
export class UserAccountService {
	constructor(private http: HttpClient) {}

	localUserInfo: UserInfo = {}

	checkExistUsername(username: string) {
		return this.http.get<boolean>(
			`${API.url}/api/register/checkExistByUsername/` + username
		)
	}
	checkExistEmail(email: string) {
		return this.http.get<boolean>(
			`${API.url}/api/register/checkExistByEmail/` + email
		)
	}

	registerUser(user: UserInfo) {
		const body = {
			userName: user.userName,
			userEmail: user.userEmail!.toLowerCase(),
			password: user.password,

			userRole: 'user',
			age: user.age,
			gender: user.gender,
			phone: user.phone
		}
		return this.http.post<UserInfo>(
			`${API.url}/api/register/createNewAccount`,
			body,
			{ observe: 'response' }
		)
	}
	getUserInfo(): UserInfo {
		return {
			id: 'service-id1234567',
			userEmail: 'example@example.com',
			userName: 'service works',
			password: 'Password1234567',
			gender: 'Male',
			age: 20,
			phone: '1234567890',
			LikeList: [],
			avatar: '../../assets/profile-image/profile.jpg'
		}
	}
	loginUser(username: string, password: string): Observable<boolean> {
		const body = {
			userEmail: username.toLowerCase(),
			password: password
		}
		return this.http
			.post<any>(
				`${API.url}/api/login/`, // assuming that your backend login API route is '/api/login'
				body
			)
			.pipe(
				map((response) => {
					if (response && response.bearerToken) {
						this.localUserInfo = response // save user information if needed
						return true
					} else {
						return false
					}
				}),
				catchError((error) => {
					console.error(error)
					return of(false)
				})
			)
	}

	getLocalUserInfo(): UserInfo {
		return this.localUserInfo
	}
}
