import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginPageComponent } from './login-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { RouterLink, RouterModule, Routes } from '@angular/router'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { LoginService } from './login.service'
import { NzNotificationService } from 'ng-zorro-antd/notification'

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		NzFormModule,
		NzInputModule,
		NzCheckboxModule,
		NzButtonModule
	],
	declarations: [LoginPageComponent],
	exports: [LoginPageComponent],
	providers: [LoginService, NzNotificationService]

})
export class LoginPageModule {}
