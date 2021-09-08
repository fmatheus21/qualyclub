import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#15397b',
  bgsOpacity: 0.5,
  bgsPosition: POSITION.bottomLeft,
  bgsSize: 60,
  bgsType: SPINNER.chasingDots,
  // blur: 5,
  // delay: 0,
  fastFadeOut: true,
  fgsColor: '#15397b',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 150,
  fgsType: SPINNER.ballScaleMultiple,
  gap: 20,
  logoPosition: POSITION.centerCenter,
  //logoSize: 100,
  //logoUrl: 'assets/images/logo.png',
  // overlayBorderRadius: '0',
  //overlayColor: 'rgba(40, 40, 40, 0.8)',
  overlayColor: '#8ee000',
  pbColor: '#15397b',
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  hasProgressBar: true,
  text: 'Carregando...',
  textColor: '#FFFFFF',
  textPosition: POSITION.centerCenter,
  // maxTime: -1,
  // minTime: 500
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SweetAlert2Module.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderRouterModule.forRoot({ showForeground: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
