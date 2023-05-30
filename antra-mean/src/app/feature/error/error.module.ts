import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorComponent } from './error.component'
import { NzResultModule } from 'ng-zorro-antd/result'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { RouterModule } from '@angular/router'
@NgModule({
	imports: [
		CommonModule,
		NzResultModule,
		NzButtonModule,
		RouterModule,
		RouterModule
	],
	declarations: [ErrorComponent],
	exports: [ErrorComponent]
})
export class ErrorModule {}
