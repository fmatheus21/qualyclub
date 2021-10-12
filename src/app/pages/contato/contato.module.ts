import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato/contato.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContatoRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: []
})
export class ContatoModule { }
