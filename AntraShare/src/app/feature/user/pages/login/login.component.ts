import { Component } from '@angular/core';
import { UserProfile } from 'src/app/shared/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  login_info: UserProfile = {
    userEmail: '',
    password: '',
  };

  loginLoading_icon = false;

  onLogin() {
    this.loginLoading_icon = true;

    setTimeout(() => {
      this.loginLoading_icon = false;
    }, 2000);
  }

  agreement_checked = false;
}
