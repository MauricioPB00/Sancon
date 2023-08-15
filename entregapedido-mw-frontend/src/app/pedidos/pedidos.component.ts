import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedidos/pedido.service';
import { Pedido } from '../pedido.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  buscaData: { busca: string } = { busca: '' };

  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.carregarPedidos();
  }

  carregarPedidos() {
    this.pedidoService.getPedidosEmAberto().subscribe(
      (data) => {
        this.pedidos = data;
      },
      (error) => {
        console.error('Erro ao carregar os pedidos:', error);
      }
    );
  }

  mostrarDetalhesPedido(pedido: string, cliente: string) {
    //this.router.navigate(['/detalhes-pedido', pedido, cliente]);
    this.router.navigate(['/detalhes']);
    console.log(pedido, cliente);
  }

  onSubmit() {
    if (this.buscaData.busca.trim() === '') {
      // busca em branco, recarregar todos os pedidos
      this.carregarPedidos();
    } else {
      this.pedidoService.buscarPedidos(this.buscaData.busca).subscribe(
        (data) => {
          this.pedidos = data;
        },
        (error) => {
          console.error('Erro ao buscar os pedidos:', error);
        }
      );
    }
  }
}

