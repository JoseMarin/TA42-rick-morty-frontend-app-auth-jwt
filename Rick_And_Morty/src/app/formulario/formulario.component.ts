import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from '../models/personajes';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //DEFINICIÓN DEL OBJETO
  personajes : Personajes = {
    id : '',
    name : '',
    status : '',
    species : '',
    gender : '',
    origin : '',
    location : '',
    image : ''
  };

  submitted = false; //SE DEFINEN EN FALSE YA QUE SOLO AL CLICKAR SE EJECUTARÁ LA ACCIÓN

  constructor(private personajeServices : PersonajesService) { }

  ngOnInit(): void {
  }

  // DEFINIMOS LOS MÉTODOS PARA CADA ACCIÓN LLAMANDO AL SERVICES

  guardaPersonaje() : void {
    const data = { //EN PRIMERA INSTANCIA LE ADJUMOS LOS VALOES A LAS VARIABLES
      id : this.personajes.id,
      name : this.personajes.name,
      staus : this.personajes.status,
      species : this.personajes.species,
      gender : this.personajes.gender,
      origin : this.personajes.origin,
      location : this.personajes.location,
      image : "https://rickandmortyapi.com/api/character/avatar/183.jpeg"
    };

    this.personajeServices.agrega(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true; //SOLO CUANDO SE EJECUTE LA FUNCIÓN CAMBIA D EESTADO
        },
        error => {
          console.log(error);

        }
      );
  }

  agrega() : void {
    this.submitted = false;
    this.personajes = {
      id : '',
      name : '',
      status : '',
      species : '',
      gender : '',
      origin : '',
      location : '',
      image : "https://rickandmortyapi.com/api/character/avatar/183.jpeg"
    };
  }

}
