/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AccountService } from './../account.service';
import { AuthService } from 'src/app/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserProfile } from 'src/app/shared/types';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [DialogService],
})
export class LoginComponent {
  constructor(
    private accountService: AccountService,
    private router: Router,
    public dialogService: DialogService,
    private authService: AuthService
  ) {}

  login_info: UserProfile = {
    userEmail: '',
    password: '',
  };

  loginLoading_icon = false;
  agreement_checked = false;

  error_message = '';
  alertDialogRef!: DynamicDialogRef;

  validateEmail() {
    // only perform an API call for a valid email address
    if (
      this.login_info.userEmail !== '' &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
        this.login_info.userEmail!
      )
    ) {
      return true;
    }
    return false;
  }

  showAlert() {
    this.alertDialogRef = this.dialogService.open(AlertComponent, {
      data: {
        err_msg: this.error_message,
      },
      header: 'Alert',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  onLogin() {
    this.loginLoading_icon = true;

    setTimeout(() => {
      this.loginLoading_icon = false;
    }, 2000);

    if (this.validateEmail() && this.agreement_checked) {
      this.accountService
        .login(this.login_info)
        .pipe(first())
        .subscribe({
          next: (response) => {
            if (response.status === 200) {
              const resBody: UserProfile = response.body!;
              this.authService.setUserProfile(resBody);
              this.router.navigate(['news-feed']);
            }
          },
          error: (error) => {
            this.error_message = error.error;
            this.showAlert();
          },
        });
    } else if (!this.validateEmail()) {
      this.error_message = 'Please enter a valid email!';
      this.showAlert();
    } else if (!this.agreement_checked) {
      this.error_message = 'Please agree to our terms and conditions!';
      this.showAlert();
    }
  }

  ngOnDestroy() {
    if (this.alertDialogRef) {
      this.alertDialogRef.close();
    }
  }
}

/*
{
  userName: 'allister',
  userEmail: 'allister@abc.com',
  password: '1Q2w3e4r'
}
*/
