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
  errorMessage = '';
  roles : string[] = [];

  constructor(private authService : AuthService, private tokenStorage : TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.obtenToken()) {
      this.esSatisfactorio = true;
      this.roles = this.tokenStorage.ubicaUser().roles;
    }
  }

  onSubmit() : void {
    const { username, password } = this.form;

    this.authService.login(username, password)
      .subscribe( data => {
        this.tokenStorage.guardaToken(data.accessToken);
        this.tokenStorage.guardaUser(data);

        this.esFallido = false;
        this.esSatisfactorio = true;
        this.roles = this.tokenStorage.ubicaUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.esFallido = true;
      }
      );
  }
  reloadPage() : void {
    window.location.reload();
  }

}
