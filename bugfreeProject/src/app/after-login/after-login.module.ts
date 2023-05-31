import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterLoginComponent } from './after-login/after-login.component';
import { AfterLoginRoutingModule } from './after-login-routing.module';
import  { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    AfterLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AfterLoginRoutingModule,
    CoreModule
  ],
  exports: [
    AfterLoginComponent
  ]
})
export class AfterLoginModule { }
