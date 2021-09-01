import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrPoliciesComponent } from './hr-policies.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';

const routes: Routes = [
  {
    path: '',
    component: HrPoliciesComponent
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
export class HrPoliciesRoutingModule { }
