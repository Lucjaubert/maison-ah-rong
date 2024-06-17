import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsUtilisationComponent } from './conditions-utilisation.component';

  const routes: Routes = [
    { path: '', component: ConditionsUtilisationComponent },
  ];
  
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class ConditionsUtilisationRoutingModule { }