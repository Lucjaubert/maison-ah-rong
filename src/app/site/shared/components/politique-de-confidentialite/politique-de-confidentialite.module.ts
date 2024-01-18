import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: PolitiqueDeConfidentialiteComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PolitiqueDeConfidentialiteComponent],
  declarations: [PolitiqueDeConfidentialiteComponent]
})
export class PolitiqueDeConfidentialiteModule { }
