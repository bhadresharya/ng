import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
  { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) },
  { path: 'c', loadChildren: () => import('./modulec/modulec.module').then(m => m.ModulecModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
