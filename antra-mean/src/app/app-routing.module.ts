import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './feature/setting-page/setting-page.component'
import { AdminPageComponent } from './feature/admin-page/admin.component'
import { LoginPageComponent } from './feature/login-page/login-page.component'
import { NewsFeedPageComponent } from './feature/news-feed/news-feed-page/news-feed-page.component'
import { LikeListComponent } from './feature/news-feed/like-list/like-list.component'

const routes: Routes = [
	{ path: 'settings', component: SettingPageComponent },
	{ path: 'admin', component: AdminPageComponent },
	{ path: 'login', component: LoginPageComponent },
  { path: 'news-feed', component: NewsFeedPageComponent },
  { path: 'like-list', component: LikeListComponent }
]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
