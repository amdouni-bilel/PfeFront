import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisposalleRoutingModule } from './disposalle-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDisposalleComponent } from "./list-disposalle/list-disposalle.component";
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [ ListDisposalleComponent],
  imports: [
    CommonModule,
    DisposalleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class DisposalleModule { }
