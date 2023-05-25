import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NewsFeedPageComponent } from 'src/app/feature/news-feed/news-feed-page/news-feed-page.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { SettingPageComponent } from './setting-page/setting-page.component'
import { Router, RouterModule } from '@angular/router'
import { AdminPageComponent } from './admin-page/admin.component'
import { LikeListComponent } from './news-feed/like-list/like-list.component'

@NgModule({
  declarations: [AdminPageComponent, LoginPageComponent, NewsFeedPageComponent, SettingPageComponent, LikeListComponent],
	imports: [
    CommonModule,
  ],
  exports: [RouterModule]
})

export class FeatureModule {}
