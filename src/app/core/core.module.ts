import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderLowerComponent } from './header-lower/header-lower.component';
import { HeaderStickyComponent } from './header-sticky/header-sticky.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderLowerComponent,
    HeaderStickyComponent,
    MenuMobileComponent,
    FooterComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderLowerComponent,
    HeaderStickyComponent,
    MenuMobileComponent,
    FooterComponent,
    PageTitleComponent
  ]
})
export class CoreModule { }
