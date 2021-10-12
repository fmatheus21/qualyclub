import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#8ee000',
  bgsOpacity: 0.5,
  bgsPosition: POSITION.bottomLeft,
  bgsSize: 60,
  bgsType: SPINNER.chasingDots,
  // blur: 5,
  // delay: 0,
  fastFadeOut: true,
  fgsColor: '#8ee000',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 150,
  fgsType: SPINNER.ballScaleMultiple,
  gap: 20,
  logoPosition: POSITION.centerCenter,
  //logoSize: 100,
  //logoUrl: 'assets/images/logo.png',
  // overlayBorderRadius: '0',
  //overlayColor: 'rgba(40, 40, 40, 0.8)',
  overlayColor: 'rgb(21, 56, 122, 0.8)',
  pbColor: '#8ee000',
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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    CoreModule,
    SweetAlert2Module.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderRouterModule.forRoot({ showForeground: true })
  ],
  providers: [
    MessageService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
