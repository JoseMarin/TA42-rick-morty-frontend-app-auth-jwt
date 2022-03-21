import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rick_And_Morty';
  private roles : string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username? : string;

  constructor(private tokenStorageService : TokenStorageService) {} //INYECCION DEL TOKENSTORAGE

  ngOnInit() : void {
    //DESDE ONINIT SE DISPARA LOS ROLES Y LA ADMISIÓN A RECURSOS DE LOS MISMOS
    this.isLoggedIn = !!this.tokenStorageService.obtenToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.ubicaUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() : void {
    this.tokenStorageService.salir();
    window.location.reload();
  }
}
