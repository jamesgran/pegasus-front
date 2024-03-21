import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { VerClientesComponent } from './pages/clientes/ver-clientes/ver-clientes.component';
import { AgregarClientesComponent } from './pages/clientes/agregar-clientes/agregar-clientes.component';
import { authGuard } from './guards/auth/auth.guard';

export const routes: Routes = [

  {
    path: '', 
    title: 'inicio',
    component: HomeComponent
  },
  
  {
    
    path: 'home',
    title: 'Inicio',
    canActivate: [authGuard],
    children: [

      {
        path: 'clientes',
        title: 'Clientes',
        component: VerClientesComponent,
      },
      {
        path: 'agregar-cliente',
        title: 'Agregar Cliente',
        component: AgregarClientesComponent,
      },

    ]
 
  },
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },
  

  {
    path: '**', //si no encuentra la ruta, redirecciona al login
    redirectTo: '',
    pathMatch: 'full',
  }, 

];
