import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CoreModule } from '../core/core.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { AutoHideDirective } from './auto-hide.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    AutoHideDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ 
    ProfileComponent
  ]
})
export class ProfileModule { }
