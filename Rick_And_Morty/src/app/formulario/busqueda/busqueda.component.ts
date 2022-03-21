import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes';
import { PersonajesService } from 'src/app/services/personajes.service';
//IMPORTS IMPRESCINDIBLES
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  //ATRIBUTOS
personajes : any = null;
personajeActual : any = null;
personajeIndex = -1;
name = '';

  constructor(private personajeServices : PersonajesService) { } //INYECCION DE CLIEN EN EL CONSTRUCTOR
  ngOnInit(): void {
    this.retorna();
  }

  retorna() : void {
    this.personajeServices.retorna()
      .subscribe(
        data => {
          this.personajes = data; //LA VARIABLE RECIBE EL VALOR DE LA CONSTANTE PREVIAMENTE DEFINIDA
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  actualizaLista() : void {
    this.retorna();
    this.personajeActual = {};
    this.personajeIndex = -1; //ADJUNTA Y ACTUALIZA INDICES POR CADA NUEVO PERSONAJE
  }

  setPersonajeActivo(personajes : Personajes, index : number) : void {
    this.personajeActual = personajes;
    this.personajeIndex = index;
  }

  eliminaTodosPersonajes() : void {
    this.personajeServices.eliminaTodo()
      .subscribe(
        response => {
          console.log(response);
          this.actualizaLista();
        },
        error => {
          console.log(error);
        }
      );
  }

  buscaNombre() : void {
    this.personajeActual = {};
    this.personajeIndex = -1;

    this.personajeServices.ubicaPorNombre(this.name)
      .subscribe(
        data => {
          this.personajes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
