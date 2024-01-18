import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgvCguRoutingModule } from '../cgv-cgu/cgv-cgu-routing.module';
import { MentionsLegalesRoutingModule } from '../mentions-legales/mentions-legales-routing.module';
import { FooterComponent } from './footer.component';

const routes: Routes = [
  { path: '', component: FooterComponent  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class FooterRoutingModule { }