import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NaviBarComponent } from './navi-bar/navi-bar.component'
import { RouterModule } from '@angular/router'
import { NzMenuModule } from 'ng-zorro-antd/menu'

@NgModule({
	declarations: [NaviBarComponent],
	imports: [CommonModule, RouterModule, NzMenuModule],
	exports: [NaviBarComponent]
})
export class NaviBarModule {}
