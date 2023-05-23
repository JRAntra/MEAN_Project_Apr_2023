import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NewsFeedPageComponent } from 'src/app/feature/news-feed-page/news-feed-page.component'
import { LoginPageComponent } from './login-page/login-page.component'

@NgModule({
  declarations: [],
	imports: [
    CommonModule,
    NewsFeedPageComponent,
    LoginPageComponent,
  ],
  exports: [RouterModule]
})
export class FeatureModule {}
