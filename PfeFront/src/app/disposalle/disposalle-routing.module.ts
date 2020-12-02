import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListDisposalleComponent} from "./list-disposalle/list-disposalle.component";

const routes: Routes = [
  { path:'all', component:ListDisposalleComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisposalleRoutingModule { }
