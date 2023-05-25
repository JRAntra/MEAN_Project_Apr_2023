import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LikeListComponent } from './like-list/like-list.component'
import { NewsFeedPageComponent } from './news-feed-page/news-feed-page.component'
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [
    LikeListComponent,
    NewsFeedPageComponent
  ],
  imports: [
    CommonModule,
    NzPaginationModule
  ]
})
export class NewsFeedModule { }
