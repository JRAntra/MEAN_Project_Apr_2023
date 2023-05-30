import { Component} from '@angular/core';
import { LoginCheckService } from '../login-check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  inputData: any = {
    userEmail: '',
    password: '',
    agree: false,
  };

  constructor(private loginCheckService : LoginCheckService) { }

  submit(testForm: any){
    console.log(testForm.value);
    this.inputData = testForm.value;
    if (this.validateEmail() && this.inputData.agree){
      this.loginCheckService.login(this.inputData).subscribe({
          next:(res) => { if (res.status === 200) {
              alert("Login Success...");
              testForm.reset();
              // this.router.navigate(['news-feed']);
            }},
          error:(error) => {alert(error.error)},
      });
    }else if(!this.inputData.agree){
      alert("Please agree to Agreement!");
      
    }
 
  }
  validateEmail() {
    if (this.inputData.agree && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputData.userEmail!)) {
      return true;
    } else{
      return false;
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



