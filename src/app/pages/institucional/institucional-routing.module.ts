import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { MissaoComponent } from './missao/missao.component';
import { TopOfMindComponent } from './top-of-mind/top-of-mind.component';

const routes: Routes = [
  {
    path: 'sobre-nos',
    component: AboutComponent,
    data: {
      title: 'QualyClub - Sobre Nós',
      breadcrumb: 'Sobre Nós'
    }
  },
  {
    path: 'missao',
    component: MissaoComponent,
    data: {
      title: 'QualyClub - Missão',
      breadcrumb: 'Missão'
    }
  },
  {
    path: 'top-of-mind',
    component: TopOfMindComponent,
    data: {
      title: 'QualyClub - Serviços Top Of Mind',
      breadcrumb: 'Serviços Top Of Mind'
    }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {
      title: 'QualyClub - Dúvidas',
      breadcrumb: 'Dúvidas'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'QualyClub - Blog',
      breadcrumb: 'Blog'
    }
  },
  {
    path: 'blog/details/:id',
    component: BlogDetailsComponent,
    data: {
      title: 'QualyClub - Blog Detalhes',
      breadcrumb: 'Blog Detalhes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionalRoutingModule { }
