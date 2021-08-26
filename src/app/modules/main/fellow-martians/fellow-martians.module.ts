import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FellowMartiansRoutingModule } from './fellow-martians-routing.module';
import { FellowMartiansComponent } from './fellow-martians.component';


@NgModule({
  declarations: [
    FellowMartiansComponent
  ],
  imports: [
    CommonModule,
    FellowMartiansRoutingModule
  ]
})
export class FellowMartiansModule { }
