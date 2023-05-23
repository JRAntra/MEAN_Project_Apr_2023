import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { StoryComponent } from './news-feed/story/story.component';
import { LikeListComponent } from './news-feed/like-list/like-list.component';
import { CommentListComponent } from './news-feed/comment-list/comment-list.component';
import { CommentComponent } from './news-feed/comment-list/comment/comment.component';
import { NewCommentComponent } from './news-feed/comment-list/new-comment/new-comment.component';
import { NewStoryComponent } from './news-feed/story/new-story/new-story.component';

import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { InplaceModule } from 'primeng/inplace';
import { EditorModule } from 'primeng/editor';
import { DividerModule } from 'primeng/divider';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    NewsFeedComponent,
    StoryComponent,
    LikeListComponent,
    CommentListComponent,
    CommentComponent,
    NewCommentComponent,
    NewStoryComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    InplaceModule,
    EditorModule,
    DividerModule,
    DataViewModule,
  ],
  exports: [NewsFeedComponent],
})
export class NewsFeedModule {}
