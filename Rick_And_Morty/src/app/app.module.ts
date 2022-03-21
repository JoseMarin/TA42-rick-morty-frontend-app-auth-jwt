import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './formulario/busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

@NgModule({//DECLARACION DE TODOS LOS COMPONENTES CONTENIDOS EN EL PROYECTO
  declarations: [
    AppComponent,
    PersonajesComponent,
    AboutUsComponent,
    PersonajeComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //IMPORTACIÓN DEL MÓDULO HTTPCLIENT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
