import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginPageComponent } from './login-page.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
@NgModule({
	imports: [CommonModule, ReactiveFormsModule, NzFormModule, NzInputModule],
	declarations: [LoginPageComponent],
	exports: [LoginPageComponent]
})
export class LoginPageModule {}
