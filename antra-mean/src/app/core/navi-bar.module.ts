import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NaviBarComponent } from './navi-bar/navi-bar.component'
import { RouterModule } from '@angular/router'
@NgModule({
	declarations: [NaviBarComponent],
	imports: [CommonModule, RouterModule],
	exports: [NaviBarComponent]
})
export class NaviBarModule {}
