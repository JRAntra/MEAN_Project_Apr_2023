import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterLoginComponent } from './after-login/after-login.component';
import  { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: AfterLoginComponent }
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
