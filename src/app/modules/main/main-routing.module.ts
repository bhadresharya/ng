import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { EmployeeDirectoryComponent } from './others/employee-directory/employee-directory.component';
import { GalleryComponent } from './others/gallery/gallery.component';
import { HelpdeskComponent } from './others/helpdesk/helpdesk.component';
import { HolidaysComponent } from './others/holidays/holidays.component';
import { QuickLinksComponent } from './others/quick-links/quick-links.component';
import { UpcomingEventsComponent } from './others/upcoming-events/upcoming-events.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'welcome-aboard',
        loadChildren: () => import('./welcome-aboard/welcome-aboard.module').then(m => m.WelcomeAboardModule)
      },
      {
        path: 'hr-policies',
        loadChildren: () => import('./hr-policies/hr-policies.module').then(m => m.HrPoliciesModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'policies',
        loadChildren: () => import('./policies/policies.module').then(m => m.PoliciesModule)
      },
      {
        path: 'fellow-martians',
        loadChildren: () => import('./fellow-martians/fellow-martians.module').then(m => m.FellowMartiansModule)
      },
      {
        path: 'goals-careers',
        loadChildren: () => import('./goals-careers/goals-careers.module').then(m => m.GoalsCareersModule)
      },


      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'upcoming-events',
        component: UpcomingEventsComponent
      },
      {
        path: 'holidays',
        component: HolidaysComponent
      },
      {
        path: 'quick-links',
        component: QuickLinksComponent
      },
      {
        path: 'employee-directory',
        component: EmployeeDirectoryComponent
      },
      {
        path: 'helpdesk',
        component: HelpdeskComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
