import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NxtBannerComponent } from './nxt-banner/nxt-banner.component';
import { ProfileComponent } from './profile/profile.component';
import { RecentblogsComponent } from './recentblogs/recentblogs.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    NxtBannerComponent,
    ProfileComponent,
    RecentblogsComponent,
    AboutusComponent,
    PrivacyComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class DashboardModule { }
