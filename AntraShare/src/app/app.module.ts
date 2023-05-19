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

import { CardModule } from 'primeng/card';

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
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
