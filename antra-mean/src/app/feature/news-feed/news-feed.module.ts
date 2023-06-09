import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, RouterLink } from '@angular/router'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzFormModule } from 'ng-zorro-antd/form'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { NzImageModule } from 'ng-zorro-antd/image'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { DatePipe } from '@angular/common'
import { LikeListComponent } from './like-list/like-list.component'
import { NewsFeedPageComponent } from './news-feed-page/news-feed-page.component'
import { TruncatePipe } from './truncate.pipe'

@NgModule({
	declarations: [LikeListComponent, NewsFeedPageComponent, TruncatePipe],
	imports: [
		CommonModule,
		RouterModule,
		NzCardModule,
		NzAvatarModule,
		NzFormModule,
		ReactiveFormsModule,
		FormsModule,
		NzImageModule,
		NzIconModule,
		NzInputModule,
		NzButtonModule,
		NzPageHeaderModule,
		NzSpaceModule
	],
	exports: [],
	providers: [DatePipe]
})
export class NewsFeedModule {}
