import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { StoryComponent } from './news-feed/story/story.component';
import { CommentListComponent } from './news-feed/comment-list/comment-list.component';
import { CommentComponent } from './news-feed/comment-list/comment/comment.component';
import { NewCommentComponent } from './news-feed/comment-list/new-comment/new-comment.component';
import { NewStoryComponent } from './news-feed/story/new-story/new-story.component';
import { EditorComponent } from './editor/editor.component';

import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { InplaceModule } from 'primeng/inplace';
import { EditorModule } from 'primeng/editor';
import { DividerModule } from 'primeng/divider';
import { DataViewModule } from 'primeng/dataview';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StoryListComponent } from './news-feed/story-list/story-list.component';

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
    ImageModule,
    FileUploadModule,
    InputTextareaModule,
  ],
  exports: [NewsFeedComponent],
})
export class NewsFeedModule {}
