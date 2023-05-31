import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/user-list/user-list.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
