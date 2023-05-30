import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, RouterLink } from '@angular/router'

import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzFormModule } from 'ng-zorro-antd/form'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { DatePipe } from '@angular/common';
import { FirstTwentyCharsPipe } from './first-twenty-chars.pipe'
import { LikeListComponent } from './like-list/like-list.component'
import { NewsFeedPageComponent } from './news-feed-page/news-feed-page.component'

import { NewsFeedService } from './news-feed.service';

@NgModule({
	declarations: [LikeListComponent, NewsFeedPageComponent, FirstTwentyCharsPipe],
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
		NzListModule,
		NzIconModule,
		NzInputModule,
		NzButtonModule,
		NzPageHeaderModule,
		NzSpaceModule
	],
	exports: [],
	providers: [NewsFeedService, DatePipe]

})
export class NewsFeedModule {}
