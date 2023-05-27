import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './feature/news-feed/news-feed/news-feed.component';
import { ProfileComponent } from './feature/user/profile/profile.component';
import { SettingComponent } from './feature/setting/setting.component';
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { LoginComponent } from './feature/user/login/login.component';
import { RegisterComponent } from './feature/user/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'news-feed', component: NewsFeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
