import { Injectable } from '@angular/core';

//CONSTANTES DEL STORAGE
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  salir() : void {
    window.sessionStorage.clear();
  }

  public guardaToken(token : string) : void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public obtenToken() : string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public guardaUser(user : any) : void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public ubicaUser() : any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) {
      return JSON.parse(user);
    }

    return {};
  }
}
