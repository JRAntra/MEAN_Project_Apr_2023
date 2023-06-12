import { UserInfo } from 'src/app/shared/userInfo.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { UserAccountService } from 'src/app/shared/userAccountService'

@Injectable({
	providedIn: 'root'
})
export class AdminService {
	private apiUrl = 'http://localhost:4231/api/users/getAllUsers'
	isAdmin = false

	constructor(
		private http: HttpClient,
		private userAccount: UserAccountService
	) {
		this.changeRole()
	}

	changeRole() {
		const user = this.userAccount.getLocalUserInfo()
		if (user && user.userRole === 'admin') {
			this.isAdmin = true
		}
	}

	isAuthorized() {
		return this.isAdmin
	}

	getAllUser() {
		return this.http.get<any>(this.apiUrl).pipe(
			map((response) => {
				console.log(response)
				return <UserInfo[]>response
			})
		)
	}
}
