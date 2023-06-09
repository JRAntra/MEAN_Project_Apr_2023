import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { LoginComponent } from './login/login/login.component';
//import { RegisterComponent } from './register/register/register.component';
import { AfterLoginComponent } from './after-login/after-login/after-login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import {SettingPageComponent} from './setting/setting-page-component';

import { AdminComponent } from './admin/components/admin/admin.component';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: 'logintest', component: LoginComponent},
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{path: 'login', component: LoginComponent},
  //{path: 'register', component: RegisterComponent},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'after-login', loadChildren: () => import('./after-login/after-login.module').then(m => m.AfterLoginModule)},
  //{path: 'after-login', component: AfterLoginComponent},
  //{path: 'profile', component: ProfileComponent},
  {path: 'setting', component: SettingPageComponent},
  {path: 'admin', component: AdminComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
