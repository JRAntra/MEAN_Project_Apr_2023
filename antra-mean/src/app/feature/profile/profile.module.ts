import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile.component'
import { NzInputModule } from 'ng-zorro-antd/input'
import { FormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
@NgModule({
	imports: [
		CommonModule,
		NzInputModule,
		FormsModule,
		NzFormModule,
		NzIconModule
	],
	declarations: [ProfileComponent],
	exports: [ProfileComponent]
})
export class ProfileModule {}
