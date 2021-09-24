import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionalRoutingModule } from './institucional-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MissaoComponent } from './missao/missao.component';
import { TopOfMindComponent } from './top-of-mind/top-of-mind.component';
import { CoreModule } from 'src/app/core/core.module';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AboutComponent,
    MissaoComponent,
    TopOfMindComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    InstitucionalRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class InstitucionalModule { }
