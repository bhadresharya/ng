import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

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
        loadChildren: ()=> import('./hr-policies/hr-policies.module').then(m=> m.HrPoliciesModule)
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
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
