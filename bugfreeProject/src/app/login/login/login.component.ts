import { Component} from '@angular/core';
import { LoginCheckService } from '../login-check.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private loginCheckService : LoginCheckService) {
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
    console.log(this.loginForm.value); //object
    console.log(this.loginForm);
    if (this.loginForm.valid && this.loginForm.value.agreement) {
      // this.inputData = this.loginForm.value;
      this.loginCheckService.login(this.loginForm.value).subscribe({
        next:(res) => { if (res.status === 200) {
            alert("Login Success...");
            // this.router.navigate(['news-feed']);
          }},
        error:(error) => {alert(error.error)},
    });
    }else if(!this.loginForm.value.agreement){
      const agreementError = <HTMLElement>document.querySelector('.agreement-error');
      console.log(agreementError);
      agreementError.style.display = 'inline';
      
      
    }
  }

  
  // register(){
  //   this.loginCheckService.register().subscribe({next:(res) => { if (res.status === 200) {
  //     console.log("200!!");
  //       }},
  //     error:(error) => {alert(error.error)}
  //   });
  // }
}



