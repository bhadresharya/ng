import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrPoliciesRoutingModule } from './hr-policies-routing.module';
import { HrPoliciesComponent } from './hr-policies.component';


@NgModule({
  declarations: [
    HrPoliciesComponent
  ],
  imports: [
    CommonModule,
    HrPoliciesRoutingModule
  ]
})
export class HrPoliciesModule { }
