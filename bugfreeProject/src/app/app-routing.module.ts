import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AfterLoginComponent } from './after-login/after-login.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'setting', component: SettingPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'News-Feed',component: AfterLoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
