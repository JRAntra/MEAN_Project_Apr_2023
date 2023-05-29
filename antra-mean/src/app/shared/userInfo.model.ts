export interface UserInfo {
	id?: string
	userEmail?: string
	userRole?: string
	username?: string
	password?: string
	name?: string
	gender?: string
	age?: number
	phone?: string
	LikeList?: any[] // Update this line with the appropriate type for the LikeList array
	avatar?: string // Update this line with the appropriate type for the avatar property
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const nameRegex = /^[A-Za-z\s]+$/
const genderRegex = /^(Male|Female|Other)$/
const ageRegex = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/
const phoneRegex = /^\d{10}$/

function isValidEmail(email: string): boolean {
	return emailRegex.test(email)
}

function isValidPassword(password: string): boolean {
	return passwordRegex.test(password)
}

function isValidName(name: string): boolean {
	return nameRegex.test(name)
}

function isValidGender(gender: string): boolean {
	return genderRegex.test(gender)
}

function isValidAge(age: number): boolean {
	return ageRegex.test(age.toString())
}

function isValidPhone(phone: string): boolean {
	return phoneRegex.test(phone)
}
