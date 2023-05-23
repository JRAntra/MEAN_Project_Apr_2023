import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureComponent, RegisterComponent],
  exports: [FeatureComponent,RegisterComponent]
})
export class FeatureModule { }
