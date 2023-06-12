import { Component, OnInit, OnDestroy } from '@angular/core'
import { UserAccountService } from 'src/app/shared/userAccountService'
import { RegisterInfoCheckService } from 'src/app/shared/registerInfoCheck.service'
import { NzMessageService } from 'ng-zorro-antd/message'
import {
	FormGroup,
	FormControl,
	Validators,
	AbstractControl
} from '@angular/forms'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.sass'],
	providers: [RegisterInfoCheckService, NzMessageService]
})
export class RegisterComponent implements OnInit, OnDestroy {
	title = 'Register page'
	passwordVisible = false
	formCompleted: boolean = false
	registerForm!: FormGroup
	private registerSubscription?: Subscription
	constructor(
		private message: NzMessageService,
		private registerInfoCheckService: RegisterInfoCheckService,
		private userAccountService: UserAccountService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.registerForm = new FormGroup({
			userName: new FormControl(
				'',
				[
					Validators.required,
					Validators.pattern(this.registerInfoCheckService.nameRegex)
				],
				[this.registerInfoCheckService.usernameValidator()]
			),
			password: new FormControl('', [
				Validators.required,
				Validators.pattern(this.registerInfoCheckService.passwordRegex)
			]),
			confirmPassword: new FormControl('', [
				Validators.required,
				this.registerInfoCheckService.matchPasswordValidator
			]),
			phoneNumber: new FormControl('', [
				Validators.required,
				Validators.pattern(this.registerInfoCheckService.phoneRegex)
			]),
			userEmail: new FormControl(
				'',
				[
					Validators.required,
					Validators.pattern(this.registerInfoCheckService.emailRegex)
				],
				[this.registerInfoCheckService.emailValidator()]
			),
			gender: new FormControl('', [
				Validators.required,
				Validators.pattern(this.registerInfoCheckService.genderRegex)
			]),
			age: new FormControl('', [
				Validators.required,
				Validators.pattern(this.registerInfoCheckService.ageRegex)
			]),
			agreed: new FormControl(false, [Validators.requiredTrue])
		})
	}

	onSubmit(): void {
		this.registerSubscription = this.userAccountService
			.registerUser(this.registerForm.value)
			.subscribe((data) => {
				console.log('register : ', data)
			})
		const id = this.message.loading('Registering your account...', {
			nzDuration: 0
		}).messageId
		setTimeout(() => {
			this.message.remove(id)
			this.router.navigate(['/login'])
		}, 1000)
	}

	ngOnDestroy(): void {
		if (this.registerSubscription) {
			this.registerSubscription.unsubscribe()
		}
	}
}
