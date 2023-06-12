import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { NzNotificationService } from 'ng-zorro-antd/notification'
import { UserAccountService } from 'src/app/shared/userAccountService'
@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
	myFormGroup: FormGroup

	constructor(
		private notification: NzNotificationService,
		private router: Router,
		private userAccountService: UserAccountService
	) {
		this.myFormGroup = new FormGroup({
			userName: new FormControl(),
			password: new FormControl(),
			agreement: new FormControl()
		})
	}
	agreeNotification(): void {
		this.notification.create(
			'warning',
			'Warning',
			'Please agree to the terms and conditions.'
		)
	}
	wrongLoginNotification(): void {
		this.notification.create(
			'error',
			'Error',
			'Invalid username or password.'
		)
	}
	successLoginNotification(): void {
		this.notification.create('success', 'Success', 'You have logged in.')
	}
	login() {
		const userEmail = this.myFormGroup.get('userName')?.value
		const password = this.myFormGroup.get('password')?.value
		const agree = this.myFormGroup.get('agreement')?.value
		console.log(userEmail, password, agree)
		if (!agree) {
			this.agreeNotification()
			return
		}
		if (userEmail && password && agree) {
			this.userAccountService.loginUser(userEmail, password).subscribe(
				(response) => {
					if (response) {
						// If login is successful, save user data and redirect to news-feed
						this.successLoginNotification()
						this.router.navigate(['/news-feed'])
						console.log(response)
						console.log(
							'user local stored info: ',
							this.userAccountService.getLocalUserInfo()
						)
					} else {
						// If login is not successful, show an error notification
						this.wrongLoginNotification()
					}
				},
				(error) => {
					// Handle the login error
					console.error(error)
				}
			)
		}
	}
}
