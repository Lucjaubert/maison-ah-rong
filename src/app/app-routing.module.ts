import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgvCguComponent } from './site/shared/components/cgv-cgu/cgv-cgu.component';
import { MentionsLegalesComponent } from './site/shared/components/mentions-legales/mentions-legales.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PolitiqueDeConfidentialiteComponent } from './site/shared/components/politique-de-confidentialite/politique-de-confidentialite.component';
import { ConditionsUtilisationComponent } from './site/shared/components/conditions-utilisations/conditions-utilisation.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'cgv-cgu', component: CgvCguComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'politique-de-confidentialite', component: PolitiqueDeConfidentialiteComponent },
    { path: 'conditions-utilisation', component: ConditionsUtilisationComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }