import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgvCguRoutingModule } from '../cgv-cgu/cgv-cgu-routing.module';
import { MentionsLegalesRoutingModule } from '../mentions-legales/mentions-legales-routing.module';
import { CgvCguComponent } from '../cgv-cgu/cgv-cgu.component';
import { MentionsLegalesComponent } from '../mentions-legales/mentions-legales.component';

const routes: Routes = [
  { path: 'cgv-cgu', component: CgvCguComponent, loadChildren: () => import('../cgv-cgu/cgv-cgu.module').then(m => m.CgvCguModule) },
  { path: 'mentions-legales', component: MentionsLegalesComponent, loadChildren: () => import('../mentions-legales/mentions-legales.module').then(m => m.MentionsLegalesModule) },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CgvCguRoutingModule, 
    MentionsLegalesRoutingModule 
  ],
  exports: [RouterModule]
})
export class FooterRoutingModule { }