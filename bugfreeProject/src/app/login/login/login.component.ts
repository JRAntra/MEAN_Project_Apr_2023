import { Component } from '@angular/core';
import { LoginCheckService } from '../login-check.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare const window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{


  loginForm: FormGroup = new FormGroup({
    userEmail: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    agreement: new FormControl('',[Validators.required]),
});

  constructor(private loginCheckService : LoginCheckService,
              private router: Router) {
   }

  onCheckboxChange(event: any): void {
    // Access the checkbox value and perform actions based on its state
    const isChecked = event.target.checked;
    const agreementError = <HTMLElement>document.querySelector('.agreement-error');
    if (isChecked && agreementError.style.display === 'inline') {
      agreementError.style.display = 'none';
    }
  }

   onSubmit(){    

    if(this.loginForm.valid && this.loginForm.value.agreement){
      this.loginCheckService.login(this.loginForm.value).subscribe({
        next:(res) => { if (res.status === 200) {
            window.localStorage.setItem('userInfo', res.body);            
            alert("Login Success...");
            this.router.navigate(['after-login']);
          }},
        error:(error) => {alert(error.error)},
    });
    }else if(!this.loginForm.value.agreement){
      const agreementError = <HTMLElement>document.querySelector('.agreement-error');
      agreementError.style.display = 'inline';      
    }
  }

}




