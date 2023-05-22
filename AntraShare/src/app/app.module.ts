import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { NewsFeedComponent } from './feature/news-feed/news-feed.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { SettingComponent } from './feature/setting/setting.component';
import { AdminComponent } from './feature/admin/admin.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { StoryComponent } from './feature/news-feed/story/story.component';
import { LikeListComponent } from './feature/news-feed/like-list/like-list.component';
import { CommentListComponent } from './feature/news-feed/comment-list/comment-list.component';
import { CommentComponent } from './feature/news-feed/comment-list/comment/comment.component';
import { NewCommentComponent } from './feature/news-feed/comment-list/new-comment/new-comment.component';
import { NewStoryComponent } from './feature/news-feed/story/new-story/new-story.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { AvatarModule } from 'primeng/avatar';
import { InplaceModule } from 'primeng/inplace';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';
import { EditorModule } from 'primeng/editor';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewsFeedComponent,
    ProfileComponent,
    SettingComponent,
    AdminComponent,
    NavBarComponent,
    StoryComponent,
    LikeListComponent,
    CommentListComponent,
    CommentComponent,
    NewCommentComponent,
    NewStoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    BrowserAnimationsModule,
    AvatarModule,
    InplaceModule,
    DropdownModule,
    CalendarModule,
    BadgeModule,
    DataViewModule,
    EditorModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
