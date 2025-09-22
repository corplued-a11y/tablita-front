import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablitaComponent } from './components/tablita/tablita.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoComponent } from './components/listado/listado.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';
import { VacacionesListadoComponent } from './components/vacaciones-listado/vacaciones-listado.component';

const routes: Routes = [
  {
    path: 'tablita/:id',
    component: TablitaComponent,
  },
  {
    path: 'listado',
    component: ListadoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'vacaciones',
    component: VacacionesComponent,
  },
  {
    path:  'vaciones-listado',
    component: VacacionesListadoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
