import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConditionsUtilisationComponent } from './conditions-utilisation.component';

const routes = [
    { path: '', component: ConditionsUtilisationComponent },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class ConditionsUtilisationModule { }