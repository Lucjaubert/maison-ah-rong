import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './prestations.component';
import { HomeRoutingModule } from './prestations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [PrestationsComponent]
})
export class PrestationsModule { }
