import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    SplitterModule,
    TableModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    DividerModule,
  ],
  exports: [
    AdminComponent,
    UserListComponent,
  ],
})

export class AdminModule {
}
