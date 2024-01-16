import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgvCguComponent } from './cgv-cgu.component';

const routes: Routes = [
  { path: '', component: CgvCguComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CgvCguRoutingModule { }