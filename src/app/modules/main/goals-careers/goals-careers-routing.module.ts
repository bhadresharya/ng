import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationComponent } from './designation/designation.component';
import { GoalsCareersComponent } from './goals-careers.component';
import { RolesKraComponent } from './roles-kra/roles-kra.component';

const routes: Routes = [
  {
    path: '',
    component: GoalsCareersComponent
  },
  {
    path: 'designation',
    component: DesignationComponent
  },
  {
    path: 'roles-kra',
    component: RolesKraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsCareersRoutingModule { }
