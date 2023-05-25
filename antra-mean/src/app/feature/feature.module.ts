import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatureComponent } from './feature.component'
import { ProfileComponent } from './profile/profile.component'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzInputModule } from 'ng-zorro-antd/input'
import { FormsModule } from '@angular/forms'
import { NzIconModule } from 'ng-zorro-antd/icon'

import { RegisterComponent } from './register/register.component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
@NgModule({
	imports: [
		CommonModule,
		NzAvatarModule,
		NzDescriptionsModule,
		NzDividerModule,
		NzInputModule,
		FormsModule,
		NzIconModule,
		NzCheckboxModule
	],
	declarations: [FeatureComponent, ProfileComponent],
	exports: [FeatureComponent, ProfileComponent]
})
export class FeatureModule {}
