import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NaviBarComponent } from './navi-bar/navi-bar.component'
import { RouterModule } from '@angular/router'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
	declarations: [NaviBarComponent],
	imports: [CommonModule, RouterModule, NzMenuModule, NzIconModule],
	exports: [NaviBarComponent]
})
export class NaviBarModule {}
