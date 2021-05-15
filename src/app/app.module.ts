import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Módulo personalizado
import { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la App
import localEsMx from "@angular/common/locales/es-MX";
import localFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localEsMx );
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
