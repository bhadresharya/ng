import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrPoliciesComponent } from './hr-policies.component';

const routes: Routes = [
  {
    path: '',
    component: HrPoliciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrPoliciesRoutingModule { }
