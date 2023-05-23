import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SplitterModule,
    TableModule,
    AvatarModule,
  ],
  exports: [
    AdminComponent,
  ],
})

export class AdminModule {
}
