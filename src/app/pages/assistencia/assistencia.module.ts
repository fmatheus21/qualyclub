import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistenciaRoutingModule } from './assistencia-routing.module';
import { RastreamentoComponent } from './rastreamento/rastreamento.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VinteQuatroHorasComponent } from './vinte-quatro-horas/vinte-quatro-horas.component';
import { CarroReservaComponent } from './carro-reserva/carro-reserva.component';
import { VidroComponent } from './vidro/vidro.component';
import { SeguroApComponent } from './seguro-ap/seguro-ap.component';
import { SeguroAppComponent } from './seguro-app/seguro-app.component';
import { ResidencialComponent } from './residencial/residencial.component';
import { PetComponent } from './pet/pet.component';
import { BikeComponent } from './bike/bike.component';
import { FuneralComponent } from './funeral/funeral.component';


@NgModule({
  declarations: [
    RastreamentoComponent,
    VinteQuatroHorasComponent,
    CarroReservaComponent,
    VidroComponent,
    SeguroApComponent,
    SeguroAppComponent,
    ResidencialComponent,
    PetComponent,
    BikeComponent,
    FuneralComponent
  ],
  imports: [
    CommonModule,
    AssistenciaRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AssistenciaModule { }
