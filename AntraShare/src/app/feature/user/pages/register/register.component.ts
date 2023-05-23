import { Component } from '@angular/core';
import { PasswordStatus, UserInfo } from '../../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  register_info: UserInfo = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    validatePassword(password): PasswordStatus {
      const result = new PasswordStatus;
      if (password.length > 5 && password.length < 16) {
        result.length = true;
      }
      // check if password has at least one digit, on uppercase letter, and one lowercase letter
      if (/\d/.test(password)) {
        result.digit = true;
      }
      if (/[A-Z]/.test(password)) {
        result.uppercase = true;
      }
      if (/[a-z]/.test(password)) {
        result.lowercase = true;
      }
      if (result.digit && result.uppercase && result.lowercase && password.length > 5 && password.length < 16) {
        result.valid = true;
      }
      return result;
    }
  }

  loading = false;

  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

  checked = false;
}
