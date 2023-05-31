import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LoginRoutingModule
  ],
  exports: [ 
    LoginComponent 
  ]
})
export class LoginModule { }



