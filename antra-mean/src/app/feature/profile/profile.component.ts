import { Component, ViewChild, ElementRef, OnInit } from '@angular/core'
import { UserInfo } from 'src/app/shared/userInfo.model'
//import service in the component
import { UserAccountService } from 'src/app/shared/userAccountService'
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
	user: UserInfo = {}
	userFromDB: any
	constructor(private userAccountService: UserAccountService) {}

	ngOnInit(): void {
		this.user = this.userAccountService.getUserInfo()
		console.log(
			'🚀 ~ file: profile.component.ts:27 ~ ProfileComponent ~ ngOnInit ~ user:',
			this.user
		)
	}

	//condition for the input field
	inputActive: boolean = false
	passwordVisible: boolean = false
	passwordIsEditing: boolean = false
	ageIseEditing: boolean = false
	editeAge: number = this.user.age ?? 0
	emailIsEditing: boolean = false

	// get a reference to the input element
	@ViewChild('passwordInput', { static: false })
	passwordInput!: ElementRef<HTMLInputElement>
	@ViewChild('ageInput', { static: false })
	ageInput!: ElementRef<HTMLInputElement>
	//event handler for the select element's change event
	toggleEdit(): void {
		this.passwordIsEditing = !this.passwordIsEditing
		if (this.passwordIsEditing) {
			setTimeout(() => {
				this.passwordInput.nativeElement.value = ''
				this.passwordInput.nativeElement.focus()
			})
		}
	}
	updatePassword(value: string): void {
		if (value.length === 0) {
			this.passwordIsEditing = false
			this.passwordVisible = false
			this.passwordInput.nativeElement.value = this.user.password ?? ''
			console.log(this.user.password)
			return
		}
		this.user.password = value
		this.passwordIsEditing = false
		this.passwordVisible = false
	}
	selectGender(event: MouseEvent) {
		const target = event.target as HTMLElement
		const gender = target.getAttribute('data-gender')
		console.log(gender)
		if (gender) {
			this.user.gender = gender
		}
	}

	printout(): void {
		console.log(this.user)
	}
	toggleEditAge(): void {
		this.ageIseEditing = !this.ageIseEditing
	}
	updateAge(): void {
		this.user.age = Number(this.editeAge)
		this.ageIseEditing = false
	}
}
