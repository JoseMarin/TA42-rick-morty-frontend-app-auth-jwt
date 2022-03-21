import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//IMPORTS DE OBSERVALES
import { Personajes } from '../models/personajes';
import { Observable } from 'rxjs';


// LA CONSTANTE APUNTARÁ A NUESTRO LOCALHOST
const baseUrl = 'http://localhost:3000/personajes/';

@Injectable({
  providedIn: 'root'
})

export class PersonajesService {

constructor(private http : HttpClient) { }

  //LA UBICACIÓN DE LA API SE DEBE DE EJECUTAR DESDE EL PROPIO SERVICIO Y NO DE LA CLASE COMPONENTS
  //MÉTODO PARA OBTENER RESPUESTA DE LOS 5 PRIMEROS PERSONAJES, PUEDESN INTERCAMBIARSE POR LOS VALORES DE ID QUE DESEEMOS

  //IMPLEMENTACIÓN DE LOS OBSERVABLES PARA PODER USAR LA DATABSE DE NUESTRO JSON

  retorna() {
    //return this.http.get("https://rickandmortyapi.com/api/character/1,801,3,183,5");  ---  DERIVADO DE LA ACTIVIDAD 2 ---
    return this.http.get(baseUrl);
  }

  //MÉTODO QUE OBTENDRÁ RESPUESTA DE UN ID ENVIADO POR PARÁMETROS
  ubicaPorID(id : any) { //TODO REFERIRÁ A LA CLASE MEDIANTE LOS OBSERVABLES
    return this.http.get(`${baseUrl}/${id}`);// EL ENVÍO DEL ID SE DEBE DE INCLUIS DENTRO DE LA COMILLA SIMPLE DE LADO (`), CASO CONTRARIO TORNA ERROR
  }

  agrega(data : any) {
    return this.http.post(`${baseUrl}/`, data);
  }

  actualiza(id : any, data : any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  elimina(id : any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  eliminaTodo(){
    return this.http.delete(baseUrl);
  }

  ubicaPorNombre(name : any){
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}
