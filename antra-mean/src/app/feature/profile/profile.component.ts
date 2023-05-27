import { Component, ViewChild, ElementRef } from '@angular/core'
import { UserInfo } from 'src/app/shared/types'

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	user: UserInfo = {
		id: 'some-id1234567',
		userEmail: 'example@example.com',
		username: 'Username1234567',
		password: 'Password1234567',
		gender: 'Male',
		age: 20,
		phone: '1234567890',
		LikeList: [],
		avatar: '../../assets/profile-image/profile.jpg'
		// Add other properties as needed
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
