import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginCheckService } from './login-check.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({ 
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    LoginRoutingModule
  ],
  providers: [
    LoginCheckService,
    LoginComponent
  ]
})
export class LoginModule { }
