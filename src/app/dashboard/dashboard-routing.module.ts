import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
