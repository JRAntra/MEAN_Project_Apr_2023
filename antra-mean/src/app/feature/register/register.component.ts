import { Component } from '@angular/core'
import { NzFormTooltipIcon } from 'ng-zorro-antd/form'
import {
	UntypedFormBuilder,
	UntypedFormControl,
	UntypedFormGroup,
	Validators
} from '@angular/forms'
@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.sass']
})
export class RegisterComponent {
	captchaTooltipIcon: NzFormTooltipIcon = {
		type: 'info-circle',
		theme: 'twotone'
	}

	submitForm(): void {}

	updateConfirmValidator(): void {
		/** wait for refresh value */
	}

	getCaptcha(e: MouseEvent): void {
		e.preventDefault()
	}

	constructor() {}
}
