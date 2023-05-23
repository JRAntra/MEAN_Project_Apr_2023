import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginPageComponent } from './feature/login-page/login-page.component'
import { NewsFeedPageComponent } from './feature/news-feed-page/news-feed-page.component'

const routes: Routes = [
	{ path: 'login', component: LoginPageComponent },
  { path: 'news-feed', component: NewsFeedPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
