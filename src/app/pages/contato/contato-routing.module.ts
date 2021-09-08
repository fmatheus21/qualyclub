import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {
    path: '',
    component: ContatoComponent,
    data: {
      title: 'QualyClub - Contato',
      breadcrumb: 'Contato'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
