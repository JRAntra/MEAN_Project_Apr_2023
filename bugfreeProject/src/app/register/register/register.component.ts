import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;
  registerForm = this.fb.group({
      userName: ["",[],[this.registerService.checkUserNameExist()]],
      password: ["",[ this.registerService.passwordValidator()]],
      passwordConfirm:["",[]],
      userEmail:["",[ Validators.email], [this.registerService.checkEmailExist()]]
  },{validator: this.registerService.matchPassword()})

  constructor(private registerService: RegisterService,
              private fb:FormBuilder,
              private router: Router) {}

  getErrorMessage(){
    if (this.registerForm.controls["userName"].errors){
      return "Username already exists"
    }else if (this.registerForm.controls["userEmail"].errors){
      return "Email is already registered"
    }else{
      return "At least 1 uppercase, 1 lowercase, and 1 special character"
    }

    
  }
  onSubmit(){
    // console.log(this.registerForm); 
    if (this.registerForm.errors) {
      alert("Password and Confirm Password do not match!");
    }else if (this.registerForm.status === "VALID"){
      this.registerService.register(this.registerForm.value).subscribe({
            next:(res:any) => { if (res.status === 200) {
                alert("Register Success! Redirecting to Login Page...");
                this.router.navigate(['login']);
              }},
            error:(error:any) => {alert(error.error)}
      });
    }

  }

  adminRegister(){
    if (this.registerForm.errors) {
      alert("Password and Confirm Password do not match!");
    }else if (this.registerForm.status === "VALID"){
      // console.log({...this.registerForm.value, userRole: "admin"});
      
      this.registerService.register({...this.registerForm.value, userRole: "admin"}).subscribe({
            next:(res:any) => { if (res.status === 200) {
                alert("Register Success! Redirecting to Login Page...");
                this.router.navigate(['login']);
              }},
            error:(error:any) => {alert(error.error)}
      });
    }
  }
}
