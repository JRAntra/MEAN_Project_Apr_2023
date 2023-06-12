import { Injectable } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { AsyncValidatorFn, ValidationErrors } from '@angular/forms'
import { UserAccountService } from './userAccountService'
import { catchError, map } from 'rxjs/operators'
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

	constructor(private userAccountService: UserAccountService) {}

	matchPasswordValidator(
		control: AbstractControl
	): { [key: string]: boolean } | null {
		const password = control.parent?.get('password')?.value
		const confirmPassword = control.parent?.get('confirmPassword')?.value
		console.log('password : ', password)
		console.log('confirmPassword : ', confirmPassword)
		if (password && confirmPassword && password !== confirmPassword) {
			return { mismatch: true }
		}

		return null
	}

	// Async validator for username field
	usernameValidator(): AsyncValidatorFn {
		return (
			control: AbstractControl
		): Observable<ValidationErrors | null> => {
			const value = control.parent?.get('userName')?.value
			console.log('userName : ', value)
			return this.userAccountService.checkExistUsername(value).pipe(
				map((exists: boolean) => {
					return exists ? { usernameExists: true } : null
				}),
				catchError(() => {
					return of(null)
				})
			)
		}
	}

	// Async validator for email field
	emailValidator(): AsyncValidatorFn {
		return (
			control: AbstractControl
		): Observable<ValidationErrors | null> => {
			const value = control.parent?.get('userEmail')?.value
			return this.userAccountService.checkExistEmail(value).pipe(
				map((exists: boolean) => {
					return exists ? { emailExists: true } : null
				}),
				catchError(() => {
					return of(null)
				})
			)
		}
	}
}
