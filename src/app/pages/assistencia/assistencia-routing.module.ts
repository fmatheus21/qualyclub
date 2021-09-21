import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroReservaComponent } from './carro-reserva/carro-reserva.component';
import { RastreamentoComponent } from './rastreamento/rastreamento.component';
import { ResidencialComponent } from './residencial/residencial.component';
import { SeguroApComponent } from './seguro-ap/seguro-ap.component';
import { SeguroAppComponent } from './seguro-app/seguro-app.component';
import { VidroComponent } from './vidro/vidro.component';
import { VinteQuatroHorasComponent } from './vinte-quatro-horas/vinte-quatro-horas.component';

const routes: Routes = [
  {
    path: 'rastreamento',
    component: RastreamentoComponent,
    data: {
      title: 'QualyClub - Assistência Rastreamento',
      breadcrumb: 'Assistência Rastreamento'
    }
  },
  {
    path: '24-horas',
    component: VinteQuatroHorasComponent,
    data: {
      title: 'QualyClub - Assistência 24 Horas',
      breadcrumb: 'Assistência 24 Horas'
    }
  },
  {
    path: 'carro-reserva',
    component: CarroReservaComponent,
    data: {
      title: 'QualyClub - Assistência Carro Reserva',
      breadcrumb: 'Assistência Carro Reserva'
    }
  },
  {
    path: 'vidro',
    component: VidroComponent,
    data: {
      title: 'QualyClub - Assistência Vidros',
      breadcrumb: 'Assistência Vidros'
    }
  },
  {
    path: 'seguro-ap',
    component: SeguroApComponent,
    data: {
      title: 'QualyClub - Seguro Acidentes Pessoais',
      breadcrumb: 'Seguro Acidentes Pessoais'
    }
  },
  {
    path: 'seguro-app',
    component: SeguroAppComponent,
    data: {
      title: 'QualyClub - Seguro Acidentes Pessoais de Passageiros',
      breadcrumb: 'Seguro Acidentes Pessoais de Passageiros'
    }
  },
  {
    path: 'residencial',
    component: ResidencialComponent,
    data: {
      title: 'QualyClub - Assistência Residencial',
      breadcrumb: 'Assistência Residencial'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistenciaRoutingModule { }
