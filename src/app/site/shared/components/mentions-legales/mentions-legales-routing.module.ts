import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionsLegalesComponent } from './mentions-legales.component';

const routes: Routes = [
  { path: '', component: MentionsLegalesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentionsLegalesRoutingModule { }