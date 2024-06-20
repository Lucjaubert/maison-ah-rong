import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'cgv-cgu',
    loadChildren: () => import('./site/shared/components/cgv-cgu/cgv-cgu.module').then(m => m.CgvCguModule)
  },
  {
    path: 'mentions-legales',
    loadChildren: () => import('./site/shared/components/mentions-legales/mentions-legales.module').then(m => m.MentionsLegalesModule)
  },
  {
    path: 'politique-de-confidentialite',
    loadChildren: () => import('./site/shared/components/politique-de-confidentialite/politique-de-confidentialite.module').then(m => m.PolitiqueDeConfidentialiteModule)
  },
  {
    path: 'conditions-utilisation',
    loadChildren: () => import('./site/shared/components/conditions-utilisations/conditions-utilisation.module').then(m => m.ConditionsUtilisationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }