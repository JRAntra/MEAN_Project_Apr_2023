import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  first,
  map,
  of,
  share,
  switchMap,
} from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import {
  UserProfile,
  UserProfileWithPassword,
  UserProfileWithToken,
} from 'src/app/shared/types';
import { AccountService } from './../account.service';

type RegisterForm = FormGroup<{
  userName: FormControl<string>;
  userEmail: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}>;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnDestroy {
  subscription = new Subscription();
  registerForm: RegisterForm = this.fb.nonNullable.group(
    {
      userName: [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [this.UsernameAvailableValidator()],
        },
      ],
      userEmail: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required, Validators.minLength(6)],
        },
      ],
      confirmPassword: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    },
    {
      validators: [this.confirmPasswordMatchValidator as ValidatorFn],
    }
  );
  submitButtonLoading = false;

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  UsernameAvailableValidator(): AsyncValidatorFn {
    const inputSubject = new Subject<string>();
    const resultSubject = new Subject<ValidationErrors | null>();
    inputSubject
      .pipe(
        distinctUntilChanged(),
        debounceTime(1000),
        switchMap((username) =>
          this.accountService.checkExistUsername(username)
        ),
        map<boolean, ValidationErrors | null>((exist) =>
          exist ? { usernameExist: true } : null
        )
      )
      .subscribe(resultSubject);

    this.subscription.add(inputSubject);
    this.subscription.add(resultSubject);
    return (control) => {
      inputSubject.next(control.value);
      return resultSubject.pipe(first());
    };
  }

  confirmPasswordMatchValidator(form: RegisterForm) {
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;

    const error =
      password === confirmPassword ? null : { confirmPasswordNotMatch: true };

    form.controls.confirmPassword.setErrors(error);

    return error;
  }

  onSubmitClicked() {
    if (this.registerForm.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Not completed',
        detail: 'Please fill in all required fields!',
      });
      return;
    }
    this.submitButtonLoading = true;
    this.accountService
      .register({
        userName: this.registerForm.value.userName as string,
        userEmail: this.registerForm.value.userEmail as string,
        password: this.registerForm.value.password as string,
      } as UserProfileWithPassword)
      .subscribe({
        next: (response) => {
          this.authService.setUserProfile({
            bearerToken: response.headers.get('bearerToken')!,
            ...(response.body as UserProfile),
          });
          this.router.navigate(['/news-feed']);
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error, // the response body (json but it's a string)
          });
        },
        complete: () => {
          this.submitButtonLoading = false;
        },
      });
  }
}
