import { Injectable } from '@angular/core'
import { UserInfo } from './userInfo.model'
@Injectable({
	providedIn: 'root'
})
export class UserInfoService {
	constructor() {}
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
}
