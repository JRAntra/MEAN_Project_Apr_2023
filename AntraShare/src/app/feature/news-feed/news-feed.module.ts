import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { CommentListComponent } from './news-feed/comment-list/comment-list.component';
import { CommentComponent } from './news-feed/comment-list/comment/comment.component';
import { NewCommentComponent } from './news-feed/comment-list/new-comment/new-comment.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { StoryListComponent } from './news-feed/story-list/story-list.component';
import { HeadPipe } from './news-feed/story/head.pipe';
import { NewStoryComponent } from './news-feed/story/new-story/new-story.component';
import { StoryComponent } from './news-feed/story/story.component';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InplaceModule } from 'primeng/inplace';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    NewsFeedComponent,
    StoryComponent,
    CommentListComponent,
    CommentComponent,
    NewCommentComponent,
    NewStoryComponent,
    StoryListComponent,
    EditorComponent,
    HeadPipe,
  ],
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    InplaceModule,
    DividerModule,
    DataViewModule,
    ImageModule,
    FileUploadModule,
    InputTextareaModule,
  ],
  exports: [NewsFeedComponent],
})
export class NewsFeedModule {}
