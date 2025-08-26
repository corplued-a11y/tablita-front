import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablitaComponent } from './components/tablita/tablita.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'tablita',
    component: TablitaComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
