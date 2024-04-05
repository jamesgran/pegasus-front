import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/usuarios/registro/registro.component';
import { VerClientesComponent } from './pages/clientes/ver-clientes/ver-clientes.component';
import { AgregarClientesComponent } from './pages/clientes/agregar-clientes/agregar-clientes.component';
import { authGuard } from './guards/auth/auth.guard';
import { PanelComponent } from './pages/panel/panel.component';
import { VerUsuariosComponent } from './pages/usuarios/ver-usuarios/ver-usuarios.component';
import { VerOportunidadesComponent } from './pages/oportunidades/ver-oportunidades/ver-oportunidades.component';
import { CrearOportunidadComponent } from './pages/oportunidades/crear-oportunidad/crear-oportunidad.component';
import { VerInteraccionesComponent } from './pages/interacciones/ver-interacciones/ver-interacciones.component';

export const routes: Routes = [

   {
    path: '', 
    title: 'inicio',
    component: HomeComponent
  }, 

  {
    
    path: 'panel',
    title: 'Panel',
    canActivate: [authGuard],
    component: PanelComponent,
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
      {
        path: 'ver-usuarios',
        title: 'Ver Usuarios ',
        component: VerUsuariosComponent,
      },
      {
        path: 'oportunidades',
        title: 'Oportunidades',
        component: VerOportunidadesComponent,
      },
      {
        path: 'agregar-oportunidad',
        title: 'Agregar oportunidades',
        component: CrearOportunidadComponent,
      },
      {
        path: 'ver-interacciones',
        title: 'Ver oportunidades',
        component: VerInteraccionesComponent,
      },
      

    ]
 
  },
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },


/*   {
    path: '**', //si no encuentra la ruta, redirecciona al login
    redirectTo: '',
    pathMatch: 'full',
  },  */

];
