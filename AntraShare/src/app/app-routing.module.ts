import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './feature/news-feed/news-feed/news-feed.component';
import { ProfileComponent } from './feature/user/pages/profile/profile.component';
import { SettingComponent } from './feature/setting/setting.component';
import { NotFoundComponent } from './feature/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'news-feed', pathMatch: 'full' },
  { path: 'news-feed', component: NewsFeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'setting', component: SettingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
