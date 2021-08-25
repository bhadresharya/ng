import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { MainCarouselComponent } from './home/main-carousel/main-carousel.component';
import { HappeningsComponent } from './home/happenings/happenings.component';
import { EventsComponent } from './home/events/events.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AwardsComponent } from './home/awards/awards.component';
import { BirthdayComponent } from './home/birthday/birthday.component';
import { AnniversaryComponent } from './home/anniversary/anniversary.component';
import { MyAppsComponent } from './home/my-apps/my-apps.component';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    MainCarouselComponent,
    HappeningsComponent,
    EventsComponent,
    WelcomeComponent,
    AwardsComponent,
    BirthdayComponent,
    AnniversaryComponent,
    MyAppsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
