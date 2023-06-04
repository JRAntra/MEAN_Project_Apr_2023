import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private apiUrl = 'http://localhost:4231/api/users/getallusers'

	constructor(private http: HttpClient) {}

	loginUser(username: string, password: string): Observable<boolean> {
		return this.http.get<any[]>(this.apiUrl).pipe(
			map((response) => {
				const user = response.find(
					// try to find the login match
					(user: any) =>
						user.userName === username && user.password === password
				)
				if (user) {
					// User login successful
					return true
				} else {
					// User login failed
					return false
				}
			}),
			catchError(() => of(false))
		)
	}
}
