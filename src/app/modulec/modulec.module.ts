import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulecRoutingModule } from './modulec-routing.module';
import { ModulecComponent } from './modulec.component';


@NgModule({
  declarations: [
    ModulecComponent
  ],
  imports: [
    CommonModule,
    ModulecRoutingModule
  ]
})
export class ModulecModule { }
