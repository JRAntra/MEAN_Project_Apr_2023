import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LikeListComponent } from './like-list/like-list.component'
import { NewsFeedPageComponent } from './news-feed-page/news-feed-page.component'

@NgModule({
  declarations: [
    LikeListComponent,
    NewsFeedPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class NewsFeedModule { }
