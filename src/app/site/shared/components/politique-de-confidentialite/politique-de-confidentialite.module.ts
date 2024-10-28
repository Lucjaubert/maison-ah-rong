import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite.component';

const routes = [
  { path: '', component: PolitiqueDeConfidentialiteComponent },
];

@NgModule({
  declarations: [PolitiqueDeConfidentialiteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PolitiqueDeConfidentialiteComponent],
})
export class PolitiqueDeConfidentialiteModule { }
