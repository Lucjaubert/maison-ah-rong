import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoinsComponent } from './soins.component';

const routes: Routes = [
  { path: '', component: SoinsComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }