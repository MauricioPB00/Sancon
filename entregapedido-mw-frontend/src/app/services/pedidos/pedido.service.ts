import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../../pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = 'aaaaaaaaa';

  constructor(private http: HttpClient) { }

  getPedidosEmAberto(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/api/pedidos`);
  }
  buscarPedidos(termoBusca: string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/pedidos/busca?termo=${termoBusca}`);
  }
}
