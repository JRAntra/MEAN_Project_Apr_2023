import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register.component'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
@NgModule({
	imports: [CommonModule, NzFormModule, NzInputModule],
	declarations: [RegisterComponent],
	exports: [RegisterComponent]
})
export class RegisterModule {}
