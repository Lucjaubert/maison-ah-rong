import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsUtilisationComponent } from './conditions-utilisation.component';
import { ConditionsUtilisationRoutingModule } from './conditions-utilisation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConditionsUtilisationRoutingModule
  ],
  exports: [ConditionsUtilisationComponent],
  declarations: [ConditionsUtilisationComponent]
})
export class ConditionsUtilisationModule { }
