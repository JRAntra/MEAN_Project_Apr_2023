import { Component } from '@angular/core';
import { UserInfo } from '../../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  login_info: UserInfo = {
    username: '',
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
