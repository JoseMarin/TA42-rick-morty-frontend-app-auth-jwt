import { Component, OnInit } from '@angular/core';
//importaciones
import { ActivatedRoute, Router } from '@angular/router'; //ENRUTA CON EL BOTON
import { Personajes } from 'src/app/models/personajes';
import { PersonajesService } from 'src/app/services/personajes.service'; //LLAMA AL SERVICES PARA USO DEL MÉTODO

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})

export class PersonajeComponent implements OnInit {

  personajes : any = null;
  id : any = null;

  mensaje = '';

  //INYECTAMOS EL ROUTE Y EL SERVICES EN EL CONSTRUCTOR
  constructor(private personajeServices : PersonajesService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.personajeServices.ubicaPorID(this.id)
      .subscribe(response => {
        this.personajes = response

      });
         //VERIFICAR
  }

  //Métdo que inicia desde el constructor


  //MÉTODO PARA ACTUALIZAR EL ATRIBUTO DE 'STATUS'
  actualizaEstado(status : string) : void {
    const data = {
      id : this.personajes.id,
      name : this.personajes.name,
      status : status,  //ACTUALIZA EL ESTADO DE VIDA DEL PERSONAJE
      species : this.personajes.species,
      gender : this.personajes.gender,
      origin : this.personajes.origin,
      Image : this.personajes.image
    };

    this.personajeServices.actualiza(this.personajes.id, data)
      .subscribe(
        response => {
          this.personajes.status = status;
          console.log(response);

        },
        error => {
          console.log(error);
        }
      );
  }

  //MÉTODO PARA ACTUALIZAR AL PERSONAJE AL COMPLETO
  actualizaPersonaje() : void {
    this.mensaje = '';
    this.personajeServices.actualiza(this.personajes.id, this.personajes)
      .subscribe(
        response => {
          console.log(response);
          //this.mensaje = response.mensaje ? response.mensaje : 'Personaje actualizado con exito';
        },
        error => {
          console.log(error);
        }
      );
  }


  eliminaRegistro() : void {
    this.personajeServices.elimina(this.personajes.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/personajes']); // ENRUTA EN CASO DE SER EXITOSO A LA NUEVA TARJETA
        },
        error => {
          console.log(error);
        }
      );
  }
}
