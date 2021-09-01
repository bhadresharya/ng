import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsCareersRoutingModule } from './goals-careers-routing.module';
import { GoalsCareersComponent } from './goals-careers.component';
import { RolesKraComponent } from './roles-kra/roles-kra.component';
import { DesignationComponent } from './designation/designation.component';


@NgModule({
  declarations: [
    GoalsCareersComponent,
    RolesKraComponent,
    DesignationComponent
  ],
  imports: [
    CommonModule,
    GoalsCareersRoutingModule
  ]
})
export class GoalsCareersModule { }
