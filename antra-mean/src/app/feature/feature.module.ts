import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminPageComponent } from './admin-page/admin.component'
import { SettingPageComponent } from './setting-page/setting-page.component'
import { Router, RouterModule } from '@angular/router'

@NgModule({
	declarations: [],
	imports: [CommonModule, AdminPageComponent, SettingPageComponent],
    export : [RouterModule]
})
export class FeatureModule {}
