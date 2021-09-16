import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';


@NgModule({
  declarations: [
    GalleryComponent,
    HolidaysComponent,
    UpcomingEventsComponent,
    QuickLinksComponent,
    EmployeeDirectoryComponent,
    HelpdeskComponent
  ],
  imports: [
    CommonModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
