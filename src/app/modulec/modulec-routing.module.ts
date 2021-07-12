import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulecComponent } from './modulec.component';

const routes: Routes = [{ path: '', component: ModulecComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulecRoutingModule { }
