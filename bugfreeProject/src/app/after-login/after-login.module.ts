import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterLoginComponent } from './after-login/after-login.component';
import { AfterLoginRoutingModule } from './after-login-routing.module';
import  { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { TruncatePipe } from './truncate.pipe';
import { LikeListComponent } from './like-list/like-list.component';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AfterLoginComponent,
    TruncatePipe,
    LikeListComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AfterLoginRoutingModule,
    CoreModule
  ],
  exports: [
    AfterLoginComponent,
    TruncatePipe,
    LikeListComponent,
    StoryComponent
  ]
})
export class AfterLoginModule { }
