import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { AgregarEditarCompraComponent }  from './components/agregar-editar-compras/agregar-editar-compra.component';
import { ListadoComprasComponent } from './components/listado-compras-ceramica/listado-compras.component';
import { VerCompraComponent } from './components/ver-compras/ver-compra.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//modulos
import { SharedModule } from './shared/shared.module';
import { ResponsiveLayoutComponent } from './layout/responsive-layout/responsive-layout.component';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEn, 'en-us');

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarCompraComponent,
    ListadoComprasComponent,
    VerCompraComponent,
    ResponsiveLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'en-us' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
