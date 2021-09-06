import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FellowMartiansComponent } from './fellow-martians.component';
import { MartianDetailsComponent } from './martian-details/martian-details.component';

const routes: Routes = [
  {
    path: '',
    component: FellowMartiansComponent
  },
  {
    path: 'martian-details',
    component: MartianDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FellowMartiansRoutingModule { }
