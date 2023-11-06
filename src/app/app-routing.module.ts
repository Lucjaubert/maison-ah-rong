import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./site/pages/home/home.module').then(m => m.HomeModule) },
    { path: 'services', loadChildren: () => import('./site/pages/services/services.module').then(m => m.ServicesModule) },
    { path: 'prestations', loadChildren: () => import('./site/pages/prestations/prestations.module').then(m => m.PrestationsModule) },
    { path: 'contact', loadChildren: () => import('./site/pages/contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
