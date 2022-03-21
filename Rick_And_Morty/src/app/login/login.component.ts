import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form : any = {
    username : null,
    password : null
  };

  esSatisfactorio = false;
  esFallido = false;
  erroMessage = '';
  roles : string[] = [];

  constructor(private authService : AuthService, private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.obtenToken()) {
      this.esSatisfactorio = true;
      this.roles = this.tokenStorage.ubicaUser().roles;
    }
  }

}
