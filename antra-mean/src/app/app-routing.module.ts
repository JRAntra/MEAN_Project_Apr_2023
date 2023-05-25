import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SettingPageComponent } from './feature/setting-page/setting-page.component'
import { AdminPageComponent } from './feature/admin-page/admin.component'

const routes: Routes = [
	{ path: 'settings', component: SettingPageComponent },
	{ path: 'admin', component: AdminPageComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
export class AppRoutingModule {}
