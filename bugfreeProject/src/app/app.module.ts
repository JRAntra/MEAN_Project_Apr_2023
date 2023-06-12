import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { AfterLoginModule } from './after-login/after-login.module';
import { ProfileModule } from './profile/profile.module'; 
import { SettingModule } from './setting/setting.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import  { UserInfoService } from './service/user-info.service';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    RegisterModule,
    AfterLoginModule,
    ProfileModule,
    SettingModule,
    AdminModule,
    CoreModule,
    BrowserAnimationsModule 
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
