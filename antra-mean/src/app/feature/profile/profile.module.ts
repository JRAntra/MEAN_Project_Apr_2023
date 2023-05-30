import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzInputModule } from 'ng-zorro-antd/input'
import { FormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
//import component and must be declared in the declarations array
import { ProfileComponent } from './profile.component'
//import directive and must be declared in the declarations array
import { IconHooverDirective } from './icon-hoover.directive'
import { AutoHideDirective } from 'src/app/shared/autoHide.directive'
@NgModule({
	imports: [
		CommonModule,
		NzInputModule,
		FormsModule,
		NzFormModule,
		NzIconModule,
		NzDropDownModule,
		NzSpaceModule,
		NzTypographyModule,
		NzInputNumberModule
	],
	declarations: [ProfileComponent, IconHooverDirective, AutoHideDirective],
	exports: [ProfileComponent],
	providers: []
})
export class ProfileModule {}
