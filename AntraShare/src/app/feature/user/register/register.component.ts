/* eslint-disable @typescript-eslint/no-non-null-assertion */
// import { first } from 'rxjs/operators';

import { AccountService } from './../account.service';
import { Component } from '@angular/core';
import { PasswordStatus, UserProfile } from '../../../shared/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  constructor(private accountService: AccountService, private router: Router) {}

  register_info: UserProfile = {
    userName: '',
    userEmail: '',
    password: '',
  };

  confirmPassword = '';

  emailOK = false;
  usernameOK = false;
  passwordOK = new PasswordStatus();

  submitLoading_icon = false;
  timeout?: ReturnType<typeof setTimeout>;

  onKeySearch(event: KeyboardEvent) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (event.key !== 'Enter') {
        this.checkExistUsername();
      }
    }, 500);
  }

  checkExistUsername() {
    this.accountService
      .checkExistUsername(this.register_info.userName!)
      .subscribe((response) => {
        this.usernameOK = !response;
      });
  }

  checkExistEmail() {
    this.accountService
      .checkExistEmail(this.register_info.userEmail!)
      .subscribe((response) => {
        this.emailOK = !response;
      });
  }

  usernameTooltip() {
    let tooltip = '<span>';
    if (this.register_info.userName === '') {
      tooltip += 'Please enter your username!';
    } else if (this.usernameOK === false) {
      tooltip += 'Username exists, please use another email!';
    } else if (this.usernameOK === true) {
      tooltip += 'Username OK!';
    } else {
      return '';
    }
    return tooltip + '</span>';
  }

  emailTooltip() {
    let tooltip = '<span>';
    if (this.register_info.userEmail === '') {
      tooltip += 'Please enter your email!';
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        this.register_info.userEmail!
      )
    ) {
      tooltip += 'Please a valid email!';
    } else if (this.emailOK === false) {
      tooltip += 'Email exists, please use another email!';
    } else if (this.emailOK === true) {
      tooltip += 'Email OK!';
    } else {
      return '';
    }
    return tooltip + '</span>';
  }

  validateUsername() {
    // only perform an API call for a valid non-empty username
    if (this.register_info.userName !== '') {
      this.checkExistUsername();
    }
  }

  validateEmail() {
    // only perform an API call for a valid email address
    if (
      this.register_info.userEmail !== '' &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        this.register_info.userEmail!
      )
    ) {
      this.checkExistEmail();
    }
  }

  validatePassword() {
    if (
      this.register_info.password!.length > 5 &&
      this.register_info.password!.length < 16
    ) {
      this.passwordOK.length = true;
    } else {
      this.passwordOK.length = false;
    }
    // check if password has at least one digit, on uppercase letter, and one lowercase letter
    if (/\d/.test(this.register_info.password!)) {
      this.passwordOK.digit = true;
    } else {
      this.passwordOK.digit = false;
    }

    if (/[A-Z]/.test(this.register_info.password!)) {
      this.passwordOK.uppercase = true;
    } else {
      this.passwordOK.uppercase = false;
    }

    if (/[a-z]/.test(this.register_info.password!)) {
      this.passwordOK.lowercase = true;
    } else {
      this.passwordOK.lowercase = false;
    }

    if (
      this.passwordOK.digit &&
      this.passwordOK.uppercase &&
      this.passwordOK.lowercase &&
      this.register_info.password!.length > 5 &&
      this.register_info.password!.length < 16
    ) {
      this.passwordOK.valid = true;
    } else {
      this.passwordOK.valid = false;
    }
  }

  onSubmit() {
    this.submitLoading_icon = true;

    setTimeout(() => {
      this.submitLoading_icon = false;
    }, 2000);

    if (
      this.usernameOK === true &&
      this.emailOK === true &&
      this.passwordOK.valid === true &&
      this.confirmPassword === this.register_info.password
    ) {
      this.accountService
        .register(this.register_info)
        .pipe()
        .subscribe((response) => {
          console.log(response);
          if (response.status === 200) {
            this.router.navigate(['/login']);
          }
        });
    }
  }
}
