import { Component, OnInit } from '@angular/core'

import { RegisterInfoCheckService } from 'src/app/shared/registerInfoCheck.service'
import { NzMessageService } from 'ng-zorro-antd/message'
@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.sass'],
	providers: [RegisterInfoCheckService, NzMessageService]
})
export class RegisterComponent implements OnInit {
	username: string = ''
	passwordVisible = false
	password: string = ''
	confirmPassword: string = ''
	phoneNumber: string = ''
	email: string = ''
	gender: string = ''
	checked: boolean = false
	age: number = NaN
	formCompleted: boolean = false
	constructor(
		private message: NzMessageService,
		public registerInfoCheckService: RegisterInfoCheckService
	) {}

	ngOnInit(): void {
		console.log('ngOnInit() called')
	}

	submitForm(): void {
		console.log('submitForm() called')
	}
	print(): void {
		console.log('print() called: ', this.username)
	}

	checkFormCompleted(): void {
		if (
			this.registerInfoCheckService.isValidEmail(this.email) &&
			this.registerInfoCheckService.isValidPassword(this.password) &&
			this.registerInfoCheckService.isValidName(this.username) &&
			this.registerInfoCheckService.isValidAge(this.age) &&
			this.registerInfoCheckService.isValidGender(this.gender) &&
			this.registerInfoCheckService.isValidPhone(this.phoneNumber) &&
			this.checked &&
			this.password === this.confirmPassword
		) {
			this.formCompleted = true
		} else {
			this.formCompleted = false
		}
	}
	submit(): void {
		const id = this.message.loading('Registering your account...', {
			nzDuration: 0
		}).messageId
		setTimeout(() => {
			this.message.remove(id)
		}, 3000)
	}
	changeComplete(): void {
		this.formCompleted = !this.formCompleted
	}
}
