import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LikeListComponent } from './like-list/like-list.component'
import { NewsFeedPageComponent } from './news-feed-page/news-feed-page.component'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { RouterModule, RouterLink } from '@angular/router'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzFormModule } from 'ng-zorro-antd/form'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
@NgModule({
	declarations: [LikeListComponent, NewsFeedPageComponent],
	imports: [
		CommonModule,
		NzPaginationModule,
		RouterModule,
		NzCardModule,
		NzAvatarModule,
		NzFormModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [NewsFeedPageComponent]
})
export class NewsFeedModule {}
