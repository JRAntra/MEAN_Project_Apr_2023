import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminPageComponent } from './admin.component'
import { NzLayoutModule } from 'ng-zorro-antd/layout'

@NgModule({
	imports: [CommonModule, NzLayoutModule],
	declarations: [AdminPageComponent],
	exports: [AdminPageComponent]
})
export class AdminModule {}
