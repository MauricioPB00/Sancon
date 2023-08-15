import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl = 'aaaaaaa';

  constructor(private http: HttpClient) { }

  getDetalhesPedido(id: number): Observable<any> {
    const url = `${this.baseUrl}/pedidos/${id}`; 
    return this.http.get(url);
  }


}