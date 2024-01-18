import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [PolitiqueDeConfidentialiteComponent],
  declarations: [PolitiqueDeConfidentialiteComponent]
})
export class PolitiqueDeConfidentialiteModule { }
