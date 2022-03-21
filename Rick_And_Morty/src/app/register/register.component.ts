import { Component, OnInit } from '@angular/core';
//IMPORTACIÓN DEL SEVICE AUTHENTICACION
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //ATRIBUTOS DEL FORM
  form : any = {
    username : null,
    email : null,
    password : null
  };

  //ESTADOS A VERIFICAR DESDE EL FORM
  esSatisfactorio = false;
  esFallido = false;
  errorMessage = '';

  constructor(private authServices : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    const { username, email, password } = this.form;

    this.authServices.register(username, email, password)
      .subscribe( data => {
        console.log(data);
        this.esSatisfactorio = true;
        this.esFallido = false;
      },
      error => {
        this.errorMessage = error.error.errorMessage;
        this.esFallido = true;
      }
      );
  }
}
