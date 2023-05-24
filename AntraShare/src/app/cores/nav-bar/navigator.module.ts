import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, RouterModule, ToolbarModule, ButtonModule],
  exports: [NavBarComponent],
})
export class NavigatorModule {}
