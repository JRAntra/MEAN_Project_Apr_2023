import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page-component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        SettingPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        SettingPageComponent,
    ]
})
export class SettingModule { }
