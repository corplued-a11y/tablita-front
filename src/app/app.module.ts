import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablitaComponent } from './components/tablita/tablita.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ListadoComponent } from './components/listado/listado.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';
import { VacacionesListadoComponent } from './components/vacaciones-listado/vacaciones-listado.component';

@NgModule({
  declarations: [AppComponent, TablitaComponent, LoginComponent, ListadoComponent, VacacionesComponent, VacacionesListadoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
