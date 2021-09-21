import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'contato', loadChildren: () => import('./pages/contato/contato.module').then(m => m.ContatoModule) },
  { path: 'institucional', loadChildren: () => import('./pages/institucional/institucional.module').then(m => m.InstitucionalModule) },
  { path: 'assistencia', loadChildren: () => import('./pages/assistencia/assistencia.module').then(m => m.AssistenciaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    enableTracing: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
