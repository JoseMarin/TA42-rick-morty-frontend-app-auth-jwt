import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = '';
const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
}; //HEADER DECLARADO COMO CONSTANTE

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http : HttpClient) { } //INYECCIÓN DEL HTTPCLIENT

  //MÉTODO PARA LOGIN
  login (username : string, password : string) : Observable <any> {
    return this.http.post( AUTH_API + 'signin' , {
      username,
      password
    }, httpOptions);
  }

  //MÉTODO DE REGISTROS, TOMARÁ TODOS LOS VALORES QUE ALLÍ SE LE INDIQUEN
  register(username : string, email : string, password : string) : Observable <any> {
    return this.http.post(AUTH_API + 'signup' , {
      username,
      email,
      password
    }, httpOptions);
  }
}
