import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Login } from '../models/login';
import { LoginService } from '../services/login/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private loginService: LoginService
  ) { }

  dados: Login = { username: "", password: "" };

  ngOnInit() {
  }

  Login() {
    console.log('aa');
   /* this.spinner.show();
    this.loginService.login(this.dados.username, this.dados.password).pipe(take(1)).subscribe(
      data => {
        this.router.navigateByUrl('/');
        this.spinner.hide();
      },
      error => { 
        //this.logout();
        this.spinner.hide();
      })*/
      this.router.navigate(['/pedidos']);
  }

  logout() {
    localStorage.removeItem('UsuarioLogado');
  }
}
