import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'theme' },
  { path: 'login', component: LoginComponent },
  { path: 'theme', loadChildren: () => import('./modules/theme/theme.module').then(m => m.ThemeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
