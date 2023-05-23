import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SplitterModule,
    TableModule,
    AvatarModule,
    ButtonModule,
  ],
  exports: [
    AdminComponent,
  ],
})

export class AdminModule {
}
