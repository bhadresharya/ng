import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { AddEditTaskComponent } from './tasks/add-edit-task/add-edit-task.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'task/:id',
    component: TaskDetailComponent,
  },
  {
    path: 'add-task',
    component: AddEditTaskComponent,
  },
  {
    path: 'manage',
    component: StatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
