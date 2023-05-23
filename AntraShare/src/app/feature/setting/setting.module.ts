import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    SettingComponent,
  ],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    OverlayPanelModule,
    TableModule,
    CardModule,
  ],
  exports: [
    SettingComponent,
  ],
})
export class SettingModule { }
