import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite.component';

const routes: Routes = [
    { path: '', component: PolitiqueDeConfidentialiteComponent },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class PolitiqueDeConfidentialiteRoutingModule { }
  