import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin/admin-page-component';
import { UserListComponent } from './components/user-list/user-list.component';



@NgModule({
    declarations: [
        AdminPageComponent,
        UserListComponent,
    ],
    imports: [
        CommonModule
    ],

    exports: [
        AdminPageComponent,
        UserListComponent,
    ]
})
export class AdminModule { }
