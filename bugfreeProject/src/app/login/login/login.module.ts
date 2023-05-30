import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginCheckService } from '../login-check.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({ 
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LoginCheckService
  ]
})
export class LoginModule { }
