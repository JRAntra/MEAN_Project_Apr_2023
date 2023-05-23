import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarModule } from 'primeng/avatar';
import { InplaceModule } from 'primeng/inplace';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';

import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ImageModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    OverlayPanelModule,
    AvatarModule,
    InplaceModule,
    DropdownModule,
    CalendarModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
})
export class UserModule { }
