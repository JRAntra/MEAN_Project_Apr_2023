import { Component} from '@angular/core';
import { LoginCheckService } from '../login-check.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  login_info: any = {
    userEmail: '',
    password: '',
    agree: false,
  };

  constructor(private loginCheckService : LoginCheckService) { }

  submit(testForm: any){
    console.log(testForm.value);
    this.login_info = testForm.value;
    if (this.validateEmail() && this.login_info.agree){
      this.loginCheckService.login(this.login_info).subscribe({
          next:(res) => { if (res.status === 200) {
              console.log("200!!");
              // this.router.navigate(['news-feed']);
            }},
          error:(error) => {alert(error.error)},
      });
    }else if(!this.login_info.agree){
      alert("Please agree to Agreement!");
      // testForm.reset();
    }
 
  }
  validateEmail() {
    if (this.login_info.agree && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.login_info.userEmail!)) {
      return true;
    } else{
      return false;
    }
  }
}


