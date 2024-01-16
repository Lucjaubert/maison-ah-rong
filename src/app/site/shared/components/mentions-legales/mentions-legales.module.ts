import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MentionsLegalesComponent } from './mentions-legales.component';

const routes = [
  { path: '', component: MentionsLegalesComponent },
];

@NgModule({
  declarations: [MentionsLegalesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [MentionsLegalesComponent]
})
export class MentionsLegalesModule { }
