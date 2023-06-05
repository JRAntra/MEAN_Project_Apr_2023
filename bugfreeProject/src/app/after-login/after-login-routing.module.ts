import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterLoginComponent } from './after-login/after-login.component';
import  { Routes, RouterModule } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { LikeListComponent } from './like-list/like-list.component';

const routes: Routes = [
  { path: '', component: AfterLoginComponent },
  { path: 'story', component: StoryComponent },
  { path: 'like-list', component: LikeListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class AfterLoginRoutingModule { }
