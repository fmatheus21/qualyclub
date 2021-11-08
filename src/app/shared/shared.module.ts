import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { ChooseusSectionComponent } from './chooseus-section/chooseus-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { AgentSectionComponent } from './agent-section/agent-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { AgentSectionAlternatComponent } from './agent-section-alternat/agent-section-alternat.component';
import { RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { CarroPlanoBasicoComponent } from './modal/carro-plano-basico/carro-plano-basico.component';
import { CarroPlanoPrataComponent } from './modal/carro-plano-prata/carro-plano-prata.component';
import { VantagemPlanoComponent } from './vantagem-plano/vantagem-plano.component';
import { CarroPlanoOuroComponent } from './modal/carro-plano-ouro/carro-plano-ouro.component';
import { CarroPlanoDiamanteComponent } from './modal/carro-plano-diamante/carro-plano-diamante.component';
import { MotoPlanoBasicoComponent } from './modal/moto-plano-basico/moto-plano-basico.component';
import { VantagemPlanoMotoComponent } from './vantagem-plano-moto/vantagem-plano-moto.component';
import { MotoPlanoPrataComponent } from './modal/moto-plano-prata/moto-plano-prata.component';
import { MotoPlanoOuroComponent } from './modal/moto-plano-ouro/moto-plano-ouro.component';
import { MotoPlanoDiamanteComponent } from './modal/moto-plano-diamante/moto-plano-diamante.component';
import { VantagemPlanoUtilitarioComponent } from './vantagem-plano-utilitario/vantagem-plano-utilitario.component';
import { UtilitarioPlanoBasicoComponent } from './modal/utilitario-plano-basico/utilitario-plano-basico.component';
import { UtilitarioPlanoPrataComponent } from './modal/utilitario-plano-prata/utilitario-plano-prata.component';
import { UtilitarioPlanoOuroComponent } from './modal/utilitario-plano-ouro/utilitario-plano-ouro.component';
import { UtilitarioPlanoDiamanteComponent } from './modal/utilitario-plano-diamante/utilitario-plano-diamante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { FormContactComponent } from './form-contact/form-contact.component';


@NgModule({
  declarations: [
    BannerSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    ChooseusSectionComponent,
    ClientsSectionComponent,
    AgentSectionComponent,
    TeamSectionComponent,
    TestimonialSectionComponent,
    VideoSectionComponent,
    CtaSectionComponent,
    NewsSectionComponent,
    ContactSectionComponent,
    AgentSectionAlternatComponent,
    InformationComponent,
    CarroPlanoBasicoComponent,
    CarroPlanoPrataComponent,
    VantagemPlanoComponent,
    CarroPlanoOuroComponent,
    CarroPlanoDiamanteComponent,
    MotoPlanoBasicoComponent,
    VantagemPlanoMotoComponent,
    MotoPlanoPrataComponent,
    MotoPlanoOuroComponent,
    MotoPlanoDiamanteComponent,
    VantagemPlanoUtilitarioComponent,
    UtilitarioPlanoBasicoComponent,
    UtilitarioPlanoPrataComponent,
    UtilitarioPlanoOuroComponent,
    UtilitarioPlanoDiamanteComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    BannerSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    ChooseusSectionComponent,
    ClientsSectionComponent,
    AgentSectionComponent,
    TeamSectionComponent,
    TestimonialSectionComponent,
    VideoSectionComponent,
    CtaSectionComponent,
    NewsSectionComponent,
    ContactSectionComponent,
    AgentSectionAlternatComponent,
    InformationComponent,
    CarroPlanoBasicoComponent,
    CarroPlanoPrataComponent,
    VantagemPlanoComponent,
    CarroPlanoOuroComponent,
    CarroPlanoDiamanteComponent,
    MotoPlanoBasicoComponent,
    VantagemPlanoMotoComponent,
    MotoPlanoPrataComponent,
    MotoPlanoOuroComponent,
    MotoPlanoDiamanteComponent,
    UtilitarioPlanoBasicoComponent,
    UtilitarioPlanoPrataComponent,
    UtilitarioPlanoOuroComponent,
    UtilitarioPlanoDiamanteComponent,
    FormContactComponent
  ]
})
export class SharedModule { }
