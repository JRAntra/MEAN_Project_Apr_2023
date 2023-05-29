import { Injectable } from '@angular/core'
@Injectable({
	providedIn: 'root'
})
export class RegisterInfoCheckService {
	emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
	nameRegex = /^[A-Za-z\s]+$/
	genderRegex = /^(Male|Female|Other)$/
	ageRegex = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/
	phoneRegex = /^\d{10}$/

	constructor() {}
	isValidEmail(email: string | null): boolean {
		if (email === null) {
			return false // or handle the null case according to your logic
		}
		return this.emailRegex.test(email)
	}

	isValidPassword(password: string | null): boolean {
		if (password === null) {
			return false // or handle the null case according to your logic
		}
		return this.passwordRegex.test(password)
	}

	isValidName(name: string | null): boolean {
		if (name === null) {
			return false // or handle the null case according to your logic
		}
		return this.nameRegex.test(name)
	}

	isValidGender(gender: string | null): boolean {
		if (gender === null) {
			return false // or handle the null case according to your logic
		}
		return this.genderRegex.test(gender)
	}

	isValidAge(age: number | null): boolean {
		if (age === null) {
			return false // or handle the null case according to your logic
		}
		return this.ageRegex.test(age.toString())
	}

	isValidPhone(phone: string | null): boolean {
		if (phone === null) {
			return false // or handle the null case according to your logic
		}
		return this.phoneRegex.test(phone)
	}
}
