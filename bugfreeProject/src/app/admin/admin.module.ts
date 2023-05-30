import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin/admin-page-component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AdminPageComponent,
        UserListComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],

    exports: [
        AdminPageComponent,
        UserListComponent,
    ]
})
export class AdminModule { }
