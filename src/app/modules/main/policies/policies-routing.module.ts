import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyDetailsComponent } from '../policies/policy-details/policy-details.component';
import { PoliciesComponent } from './policies.component';

const routes: Routes = [
  {
    path: '',
    component: PoliciesComponent
  },
  {
    path: 'policy-details',
    component: PolicyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliciesRoutingModule { }
