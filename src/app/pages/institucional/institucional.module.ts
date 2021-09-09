import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionalRoutingModule } from './institucional-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MissaoComponent } from './missao/missao.component';
import { TopOfMindComponent } from './top-of-mind/top-of-mind.component';


@NgModule({
  declarations: [
    AboutComponent,
    MissaoComponent,
    TopOfMindComponent
  ],
  imports: [
    CommonModule,
    InstitucionalRoutingModule,
    SharedModule
  ]
})
export class InstitucionalModule { }
