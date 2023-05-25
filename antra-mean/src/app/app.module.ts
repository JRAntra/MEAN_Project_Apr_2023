import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NaviBarComponent } from './core/navi-bar/navi-bar.component'
import { SettingPageComponent } from './feature/setting-page/setting-page.component'
import { AdminPageComponent } from './feature/admin-page/admin.component'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'

registerLocaleData(en)

@NgModule({
	declarations: [
		AppComponent,
		NaviBarComponent,
		SettingPageComponent,
		AdminPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NzLayoutModule,
		NzMenuModule,
		NzIconModule,
		NzButtonModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent]
})
export class AppModule {}
