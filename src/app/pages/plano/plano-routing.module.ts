import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroComponent } from './carro/carro.component';

const routes: Routes = [
  {
    path: 'carro',
    component: CarroComponent,
    data: {
      title: 'QualyClub - Planos Para Carros',
      breadcrumb: 'Planos Para Carros'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoRoutingModule { }
