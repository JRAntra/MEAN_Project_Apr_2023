
import { AccountService } from './../account.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserProfileWithToken } from 'src/app/shared/types';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertComponent } from '../alert/alert.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [DialogService],
})
export class LoginComponent implements OnInit {
  myFormGroup!: FormGroup;
  loginLoading_icon = false;
  agreement_checked = false;
  error_message = '';
  alertDialogRef!: DynamicDialogRef;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private dialogService: DialogService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.myFormGroup = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      agreement: [false, Validators.requiredTrue],
    });
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

  onLogin(event: Event) {
    event.preventDefault();

    if (this.myFormGroup.valid) {
      const loginInfo = {
        userEmail: this.myFormGroup.get('userEmail')?.value,
        password: this.myFormGroup.get('password')?.value,
      };

      this.loginLoading_icon = true;

      setTimeout(() => {
        this.loginLoading_icon = false;
      }, 2000);

      this.accountService
        .login(loginInfo)
        .pipe(first())
        .subscribe(
          (response: UserProfileWithToken) => {
            this.authService.setUserProfile(response);
            this.router.navigate(['news-feed']);
          },
          (error) => {
            this.error_message = error.error;
            this.showAlert();
          }
        );
      } else {
        this.error_message = 'Please agree to our terms and conditions!';
        this.showAlert();
      }
    }
  }
