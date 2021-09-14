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
    AgentSectionAlternatComponent
  ],
  imports: [
    CommonModule,
    RouterModule
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
    AgentSectionAlternatComponent
  ]
})
export class SharedModule { }
