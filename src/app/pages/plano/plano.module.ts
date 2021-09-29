import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanoRoutingModule } from './plano-routing.module';
import { CarroComponent } from './carro/carro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [CarroComponent],
  imports: [
    CommonModule,
    PlanoRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class PlanoModule { }
