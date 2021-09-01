import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrPoliciesRoutingModule } from './hr-policies-routing.module';
import { HrPoliciesComponent } from './hr-policies.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';


@NgModule({
  declarations: [
    HrPoliciesComponent,
    PolicyDetailsComponent
  ],
  imports: [
    CommonModule,
    HrPoliciesRoutingModule,
    PdfViewerModule,
  ]
})
export class HrPoliciesModule { }


