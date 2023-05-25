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

@NgModule({
	imports: [
		CommonModule,
		NzAvatarModule,
		NzDescriptionsModule,
		NzDividerModule,
		NzInputModule,
		FormsModule,
		NzIconModule
	],
	declarations: [FeatureComponent, ProfileComponent],
	exports: [FeatureComponent, ProfileComponent]
})
export class FeatureModule {}
