import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './cores/http-interceptors';
import { NavigatorModule } from './cores/nav-bar/navigator.module';
import { AdminModule } from './feature/admin/admin.module';
import { NewsFeedModule } from './feature/news-feed/news-feed.module';
import { SettingModule } from './feature/setting/setting.module';
import { UserModule } from './feature/user/user.module';
import { AutoDisappearDirective } from './shared/auto-disappear.directive';

@NgModule({
  declarations: [AppComponent, AutoDisappearDirective],
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
    ToastModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
