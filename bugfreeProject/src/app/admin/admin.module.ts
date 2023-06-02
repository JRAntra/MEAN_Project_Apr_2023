import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ]
})
export class AdminModule { }
