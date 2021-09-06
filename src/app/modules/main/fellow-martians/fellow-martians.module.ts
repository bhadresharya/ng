import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FellowMartiansRoutingModule } from './fellow-martians-routing.module';
import { FellowMartiansComponent } from './fellow-martians.component';
import { MartianDetailsComponent } from './martian-details/martian-details.component';


@NgModule({
  declarations: [
    FellowMartiansComponent,
    MartianDetailsComponent
  ],
  imports: [
    CommonModule,
    FellowMartiansRoutingModule
  ]
})
export class FellowMartiansModule { }
