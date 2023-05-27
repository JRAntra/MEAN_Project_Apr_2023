import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SettingModule } from './feature/setting/setting.module';
import { UserModule } from './feature/user/user.module';
import { NewsFeedModule } from './feature/news-feed/news-feed.module';
import { AdminModule } from './feature/admin/admin.module';
import { NavigatorModule } from './cores/nav-bar/navigator.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { httpInterceptorProviders } from './http-interceptors';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SettingModule,
    UserModule,
    NewsFeedModule,
    AdminModule,
    FormsModule,
    NavigatorModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
