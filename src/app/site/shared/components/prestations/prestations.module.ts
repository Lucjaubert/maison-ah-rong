import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './prestations.component';

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
