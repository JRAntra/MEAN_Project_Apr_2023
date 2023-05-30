import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPageComponent } from './setting-page-component';
import { RouterModule } from '@angular/router';
import { TimelyRemovalDirective } from './timely-removal.directive';


@NgModule({
    declarations: [
        SettingPageComponent,
        TimelyRemovalDirective,
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
