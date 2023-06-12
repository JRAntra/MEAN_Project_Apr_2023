import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page-component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    SettingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
    SettingPageComponent
  ]
})
export class SettingModule { }
