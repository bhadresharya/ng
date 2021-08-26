import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FellowMartiansComponent } from './fellow-martians.component';

const routes: Routes = [
  {
    path: '',
    component: FellowMartiansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FellowMartiansRoutingModule { }
