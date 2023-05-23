import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatureComponent } from './feature.component'
import { RegisterComponent } from './register/register.component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzInputModule } from 'ng-zorro-antd/input'

@NgModule({
	imports: [
		CommonModule,
		NzButtonModule,
		NzFormModule,
		NzCheckboxModule,
		NzInputModule
	],
	declarations: [FeatureComponent, RegisterComponent],
	exports: [FeatureComponent, RegisterComponent]
})
export class FeatureModule {}
