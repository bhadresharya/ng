import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';


@NgModule({
  declarations: [
    EventsListComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
