import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispomRoutingModule } from './dispom-routing.module';
import { AjoutComponent } from './ajout/ajout.component';


@NgModule({
  declarations: [AjoutComponent],
  imports: [
    CommonModule,
    DispomRoutingModule
  ]
})
export class DispomModule { }
