import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SettingModule } from './feature/setting/setting.module';
import { UserModule } from './feature/user/user.module';
import { NewsFeedModule } from './feature/news-feed/news-feed.module';
import { AdminModule } from './feature/admin/admin.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

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
import { TooltipModule } from 'primeng/tooltip';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DataViewModule } from 'primeng/dataview';
import { EditorModule } from 'primeng/editor';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingModule,
    UserModule,
    NewsFeedModule,
    AdminModule,
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
    TooltipModule,
    OverlayPanelModule,
    DataViewModule,
    EditorModule,
    DividerModule,
    PanelModule,
    AccordionModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
