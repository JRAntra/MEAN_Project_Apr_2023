import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviBarComponent } from './share/navi-bar/navi-bar.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { AdminPageComponent } from './admin-page/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviBarComponent,
    SettingPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
