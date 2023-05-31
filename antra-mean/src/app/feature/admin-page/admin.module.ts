import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminPageComponent } from './admin.component'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { TruncatePipe } from 'src/app/shared/truncate.pipe'
@NgModule({
	imports: [
		CommonModule,
		NzLayoutModule,
		NzButtonModule,
		NzMenuModule,
		NzIconModule
	],
	declarations: [AdminPageComponent, TruncatePipe],
	exports: [AdminPageComponent]
})
export class AdminModule {}
