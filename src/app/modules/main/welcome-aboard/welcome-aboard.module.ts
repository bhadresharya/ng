import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeAboardRoutingModule } from './welcome-aboard-routing.module';
import { WelcomeAboardComponent } from './welcome-aboard.component';


@NgModule({
  declarations: [
    WelcomeAboardComponent
  ],
  imports: [
    CommonModule,
    WelcomeAboardRoutingModule
  ]
})
export class WelcomeAboardModule { }
