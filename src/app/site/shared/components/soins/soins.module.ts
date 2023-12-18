import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoinsComponent } from './soins.component';
import { HomeRoutingModule } from './soins-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SoinsComponent],
  exports: [SoinsComponent]
})
export class SoinsModule { }
