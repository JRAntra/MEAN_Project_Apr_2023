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
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzImageModule } from 'ng-zorro-antd/image'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzUploadModule } from 'ng-zorro-antd/upload'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
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
		NzButtonModule,
		NzFormModule,
		ReactiveFormsModule,
		NzCheckboxModule,
		NzInputModule,
		NzImageModule,
		NzSpaceModule,
		NzAvatarModule,
		NzCardModule,
		NzUploadModule,
		NzIconModule,
		NzTypographyModule,
		NzGridModule,
		NzLayoutModule,
		NzMenuModule,
		NzIconModule,
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
