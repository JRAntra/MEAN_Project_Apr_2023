import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register.component'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { RouterModule } from '@angular/router'
import { NzButtonModule } from 'ng-zorro-antd/button'

@NgModule({
	imports: [CommonModule, NzFormModule, NzInputModule, RouterModule, NzButtonModule],
	declarations: [RegisterComponent],
	exports: [RegisterComponent]
})
export class RegisterModule {}
