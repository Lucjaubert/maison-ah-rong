import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite.component';

const routes = [
    { path: '', component: PolitiqueDeConfidentialiteComponent },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class PolitiqueDeConfidentialiteModule { }
  