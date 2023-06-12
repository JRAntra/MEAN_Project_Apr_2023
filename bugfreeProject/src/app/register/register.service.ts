import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidatorFn, AbstractControl,ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl: string = 'http://localhost:4231/api/register/createNewAccount/';
  
  constructor(private http: HttpClient) { }

  passwordValidator(): ValidatorFn {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/;
  
    return (control: AbstractControl): ValidationErrors | null => {
      const password: string = control.value;
  
      if (password && regex.test(password)) {
        return null; // Return null if the password meets the requirements
      } else {
        return { passwordInvalid: true }; // Return an error object if the password does not meet the requirements
      }
    };
  }
  
  matchPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value.password;
      const confirm = control.value.passwordConfirm;
      if (password != confirm) { return { 'noMatch': true } }
      return null
    }
  }

  checkEmailExist():AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return this.http.get(`http://localhost:4231/api/register/checkExistByEmail/${email}`).pipe(
        map((exists) => {
          if (exists) {
            return { emailExists: true }; // Return an error object if email exists
          } else {
            return null; // Return null if email doesn't exist
          }
        })
      )
    }
  }

  checkUserNameExist():AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const userName = control.value;
      return this.http.get(`http://localhost:4231/api/register/checkExistByUsername/${userName}`).pipe(
        map((exists) => {
          if (exists) {
            return { userNameExists: true }; // Return an error object if email exists
          } else {
            return null; // Return null if email doesn't exist
          }
        })
      )
    }
  }

  register(registerInfo: User) {
    const body = {
      userEmail: registerInfo.userEmail,
      password: registerInfo.password,
      userName: registerInfo.userName,
    };
  
    return this.http.post('http://localhost:4231/api/register/createNewAccount/', body, { observe: 'response' });
  }
}
