import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './components/user-detail/user-detail.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
