import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingPageComponent } from './setting-page.component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { RouterModule } from '@angular/router'

@NgModule({
	imports: [CommonModule, NzButtonModule, NzIconModule, RouterModule],
	declarations: [SettingPageComponent],
	exports: [SettingPageComponent]
})
export class SettingModule {}
