import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAboardComponent } from './welcome-aboard.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeAboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeAboardRoutingModule { }
