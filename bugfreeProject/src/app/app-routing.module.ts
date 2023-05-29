import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './setting/setting-page-component';
import { AdminPageComponent } from './admin/components/admin/admin-page-component';

const routes: Routes = [
    {path: 'setting', component: SettingPageComponent},
    {path: 'admin', component: AdminPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
