import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    PoliciesComponent,
    PolicyDetailsComponent
  ],
  imports: [
    CommonModule,
    PoliciesRoutingModule,
    PdfViewerModule
  ]
})
export class PoliciesModule { }
