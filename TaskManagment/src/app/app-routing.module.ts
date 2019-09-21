import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewAllTaskComponent } from './view-all-task/view-all-task.component';


const routes: Routes = [
  {path:'addtask',component:AddtaskComponent},
  {path:'viewtask',component:ViewAllTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
