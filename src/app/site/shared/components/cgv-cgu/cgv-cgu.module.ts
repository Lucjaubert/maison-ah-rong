import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CgvCguComponent } from './cgv-cgu.component';

const routes = [
  { path: '', component: CgvCguComponent },
];

@NgModule({
  declarations: [CgvCguComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [CgvCguComponent]
})
export class CgvCguModule { }
