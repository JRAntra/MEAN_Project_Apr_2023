import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SplitterModule,
    TableModule,
  ],
  exports: [
    AdminComponent,
  ],
})

export class AdminModule {
}
