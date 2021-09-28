import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionalRoutingModule } from './institucional-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MissaoComponent } from './missao/missao.component';
import { TopOfMindComponent } from './top-of-mind/top-of-mind.component';
import { CoreModule } from 'src/app/core/core.module';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [
    AboutComponent,
    MissaoComponent,
    TopOfMindComponent,
    FaqComponent,
    BlogComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    InstitucionalRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class InstitucionalModule { }
