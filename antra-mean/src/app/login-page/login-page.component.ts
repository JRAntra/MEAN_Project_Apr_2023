import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  myFormGroup: FormGroup;

  constructor() {
    this.myFormGroup = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
      agreement: new FormControl(),
    });
   }

  ngOnInit(): void {
  }

}
