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
import { NewsFeedService } from './news-feed.service'
import { NgForOf } from '@angular/common';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzListModule } from 'ng-zorro-antd/list';

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
		FormsModule,
		NzImageModule,
		NzListModule
	],
	exports: [NewsFeedPageComponent],
	providers: [NewsFeedService]

})
export class NewsFeedModule {}
