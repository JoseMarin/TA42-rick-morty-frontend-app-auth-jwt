import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BusquedaComponent } from './formulario/busqueda/busqueda.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

//DEFINICION DE LOS PATHS A APUNTAR PARA GENERAR LA DINÁMICA DE LA PÁGINA
// LA DEFINICIÓN DE LAOS PATHS SE INDEXAN EN FORMATO JSON
const routes: Routes = [
  {
  path : 'personajes',
  component : PersonajesComponent
  },
  {
    path : 'bio',
    component : AboutUsComponent
  },
  {
    path : 'personajes/:id',
    component : PersonajeComponent //INCLUIMOS EL PATH DONDE ACUDIRÁ AL PRESIONAR EL BOTON PARA DAR DETALLE A CADA PERSONAJE
  },
  {
    path : 'formulario',
    component : FormularioComponent // INCLUSIÓN DEL NUEVO COMPONENTE FORMULARIO
  },
  {
    path : 'busqueda',
    component : BusquedaComponent // INCLUSION DE NUEVO COMPONENT BÚSQUEDA
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'user',
    component : BoardUserComponent
  },
  {
    path : 'mod',
    component : BoardModeratorComponent
  },
  {
    path : 'admin',
    component : BoardAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
