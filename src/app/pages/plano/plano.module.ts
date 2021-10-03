import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanoRoutingModule } from './plano-routing.module';
import { CarroComponent } from './carro/carro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { MotoComponent } from './moto/moto.component';
import { UtilitarioComponent } from './utilitario/utilitario.component';


@NgModule({
  declarations: [CarroComponent, MotoComponent, UtilitarioComponent],
  imports: [
    CommonModule,
    PlanoRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class PlanoModule { }
