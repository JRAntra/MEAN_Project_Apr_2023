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

import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

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
    CardModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
