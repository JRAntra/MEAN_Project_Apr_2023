import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'

//Modules
import { RegisterModule } from './feature/register/register.module'
import { NewsFeedModule } from './feature/news-feed/news-feed.module'
import { AdminModule } from './feature/admin-page/admin.module'
import { ProfileModule } from './feature/profile/profile.module'
import { SettingModule } from './feature/setting-page/setting.module'
import { LoginPageModule } from './feature/login-page/login-page.module'
import { NaviBarModule } from './core/navi-bar.module'

registerLocaleData(en)

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		RegisterModule,
		NewsFeedModule,
		AdminModule,
		ProfileModule,
		SettingModule,
		LoginPageModule,
		NaviBarModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent]
})
export class AppModule {}
