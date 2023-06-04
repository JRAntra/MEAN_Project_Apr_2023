import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register.component'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { ReactiveFormsModule } from '@angular/forms'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { FormsModule } from '@angular/forms'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@NgModule({
	imports: [
		CommonModule,
		NzFormModule,
		NzInputModule,
		NzButtonModule,
		NzCheckboxModule,
		ReactiveFormsModule,
		NzSelectModule,
		NzIconModule,
		FormsModule,
		NzTypographyModule,
		ReactiveFormsModule
	],
	declarations: [RegisterComponent],
	exports: [RegisterComponent]
})
export class RegisterModule {}
