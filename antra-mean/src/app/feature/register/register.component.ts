import { Component, OnInit } from '@angular/core'
import { NzFormTooltipIcon } from 'ng-zorro-antd/form'
import { UserInfo } from 'src/app/shared/userInfo.model'
@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.sass']
})
export class RegisterComponent implements OnInit {
	username?: string
	passwordVisible = false
	password?: string
	confirmPassword?: string
	checked?: boolean = true
	constructor() {}
	ngOnInit(): void {
		console.log('ngOnInit() called')
	}
	validateInput(): void {
		console.log('validateInput() called')
	}
	submitForm(): void {
		console.log('submitForm() called')
	}
	print(): void {
		console.log('print() called: ', this.checked)
	}
}
