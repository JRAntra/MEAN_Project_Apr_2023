import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { LoginService } from './login.service'
import { Router } from '@angular/router'
import { NzNotificationService } from 'ng-zorro-antd/notification'

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
	myFormGroup: FormGroup

	constructor(private notification: NzNotificationService, private loginService: LoginService, private router: Router) {
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
      'Please agree to the terms and conditions.',
    )
  }
	wrongLoginNotification(): void {
    this.notification.create(
      'error',
      'Error',
      'Invalid username or password.',
    )
  }
	successLoginNotification(): void {
    this.notification.create(
      'success',
      'Success',
      'You have logged in.',
    )
  }
	login() {
    const username = this.myFormGroup.get('userName')?.value
    const password = this.myFormGroup.get('password')?.value
		const agree = this.myFormGroup.get('agreement')?.value
		if (!agree) {
      this.agreeNotification()
			return
    }
		if (username && password && agree) {
			this.loginService.loginUser(username, password).subscribe(
				response => {
					if (response) {
						// Handle the successful login response
						this.successLoginNotification()
						this.router.navigate(['/news-feed'])
						console.log(response)
					} else {
						this.wrongLoginNotification()
         }
				},
				error => {
					// Handle the login error
					console.error(error)
				}
			)
		}
  }
}
