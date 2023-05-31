import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
