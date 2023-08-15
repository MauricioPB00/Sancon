import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, tap, retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from './login-response.model';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('UsuarioLogado') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.API}/login`, { username, password }, this.httpOptions)
      .pipe(
        map(data => {
          if (data && data.erro === false) {
            let UsuarioLogado = {
              codUsu: data.codUsu,
              nomUsu: data.nomUsu,
              numCad: data.numCad,
              mensagem: data.mensagem
            };
            localStorage.setItem('UsuarioLogado', JSON.stringify(UsuarioLogado));
            return data;
          } else {
            throw new Error(data.mensagem);
          }
        }),
        catchError(error => {
          return throwError('Erro ao fazer login');
        })
      );
  }
}