import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './prestations.component';
import { HomeRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PrestationsComponent,
  ],
  exports: [
    PrestationsComponent
  ]
})
export class PrestationsModule { }
