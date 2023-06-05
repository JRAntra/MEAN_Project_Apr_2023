import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  
  registerForm = this.fb.group({
      userName: ["",[Validators.required],[this.registerService.checkUserNameExist()]],
      password: ["",[Validators.required, this.registerService.passwordValidator()]],
      passwordConfirm:["",[Validators.required]],
      userEmail:["",[Validators.required, Validators.email], [this.registerService.checkEmailExist()]]
  },{validator: this.registerService.matchPassword()})

  constructor(private registerService: RegisterService,
              private fb:FormBuilder,
              private router: Router) {}

  onSubmit(){
    // console.log(this.registerForm); 
    if (this.registerForm.errors) {
      alert("Password and Confirm Password do not match!");
    }else if (this.registerForm.controls["userEmail"].errors) {
      alert("Email already exists!");
    }else if (this.registerForm.controls["userName"].errors) {
      alert("Username already exists!");
    }else if (this.registerForm.controls["password"].errors) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, and one special character!");
    }else{
      this.registerService.register(this.registerForm.value).subscribe({
            next:(res:any) => { if (res.status === 200) {
                alert("Register Success! Redirecting to Login Page...");
                this.router.navigate(['login']);
              }},
            error:(error:any) => {alert(error.error)}
      });
      // alert("Register Success! Redirecting to Login Page...");
      // this.router.navigate(['login']);
    }

  }

}
