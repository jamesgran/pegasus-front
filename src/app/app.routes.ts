import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { VerClientesComponent } from './pages/clientes/ver-clientes/ver-clientes.component';
import { AgregarClientesComponent } from './pages/clientes/agregar-clientes/agregar-clientes.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    component: HomeComponent,
 
  },
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },
  {
    path: 'clientes',
    title: 'Registro',
    component: VerClientesComponent,
  },
  {
    path: 'agregar-cliente',
    title: 'Registro',
    component: AgregarClientesComponent,
  },

  {
    path: '**', //si no encuentra la ruta, redirecciona al login
    redirectTo: 'home',
    pathMatch: 'full',
  }, 

];
