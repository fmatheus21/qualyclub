import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroComponent } from './carro/carro.component';
import { MotoComponent } from './moto/moto.component';
import { UtilitarioComponent } from './utilitario/utilitario.component';

const routes: Routes = [
  {
    path: 'carro',
    component: CarroComponent,
    data: {
      title: 'QualyClub - Planos Para Carros',
      breadcrumb: 'Planos Para Carros'
    }
  },
  {
    path: 'moto',
    component: MotoComponent,
    data: {
      title: 'QualyClub - Planos Para Motos',
      breadcrumb: 'Planos Para Motos'
    }
  },
  {
    path: 'vans-utilitarios',
    component: UtilitarioComponent,
    data: {
      title: 'QualyClub - Planos Para Vans e Utilitários',
      breadcrumb: 'Planos Para Vans e Utilitários'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoRoutingModule { }
