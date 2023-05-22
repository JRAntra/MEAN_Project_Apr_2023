import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { BottomMenuComponent } from './feature/bottom-menu/bottom-menu.component';
import { AfterUserLoginComponent } from './feature/after-user-login/after-user-login.component';
import { StoriesComponent } from './feature/stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BottomMenuComponent,
    AfterUserLoginComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
