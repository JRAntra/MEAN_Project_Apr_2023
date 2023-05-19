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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewsFeedComponent,
    ProfileComponent,
    SettingComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
