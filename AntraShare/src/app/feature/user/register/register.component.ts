import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  first,
  map,
  switchMap,
} from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { UserProfile, UserProfileWithPassword } from 'src/app/shared/types';
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
          validators: [Validators.required, Validators.minLength(3)],
          asyncValidators: [this.UsernameAvailableValidator()],
        },
      ],
      userEmail: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.EmailAvailableValidator()],
        },
      ],
      password: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(6),
            this.passwordCharacterValidator,
          ],
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

  EmailAvailableValidator(): AsyncValidatorFn {
    const inputSubject = new Subject<string>();
    const resultSubject = new Subject<ValidationErrors | null>();
    inputSubject
      .pipe(
        distinctUntilChanged(),
        debounceTime(1000),
        switchMap((email) => this.accountService.checkExistEmail(email)),
        map<boolean, ValidationErrors | null>((exist) =>
          exist ? { emailExist: true } : null
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

  passwordCharacterValidator(
    control: AbstractControl<string>
  ): ValidationErrors | null {
    const value = control.value;
    const hasCharacter = {
      'lower case': false,
      'upper case': false,
      digit: false,
      'special character': false,
    };
    const specialCharacters = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '+',
      '=',
      '-',
      '/',
      '_',
      '?',
      '.',
      ',',
    ];
    for (const c of value) {
      if (c >= 'a' && c <= 'z') {
        hasCharacter['lower case'] = true;
      } else if (c >= 'A' && c <= 'Z') {
        hasCharacter['upper case'] = true;
      } else if (c >= '0' && c <= '9') {
        hasCharacter['digit'] = true;
      } else if (specialCharacters.includes(c)) {
        hasCharacter['special character'] = true;
      } else {
        return { invalidCharacter: true };
      }
    }
    if (Object.values(hasCharacter).every((v) => v)) {
      return null;
    }
    const missingCharacterList = Object.keys(hasCharacter).filter(
      (key) => !hasCharacter[key as keyof typeof hasCharacter]
    );
    return {
      missingCharacter: missingCharacterList,
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
