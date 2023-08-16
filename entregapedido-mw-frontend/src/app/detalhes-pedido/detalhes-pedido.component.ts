import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../services/detalhes/detalhes-pedido.service';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.css']
})
export class DetalhesPedidoComponent implements OnInit {
  pedidoDetalhes: any;
  buscaData: { busca: string } = { busca: '' };
  modalVisible: boolean = false;

  constructor(private route: ActivatedRoute, private pedidoService: PedidoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const pedidoId = params['pedido'];
      this.carregarDetalhesPedido(pedidoId);
    });
  }

  carregarDetalhesPedido(pedidoId: number) {
    this.pedidoService.getDetalhesPedido(pedidoId).subscribe(
      (data) => {
        this.pedidoDetalhes = data;
      },
      (error) => {
        console.error('Erro ao carregar detalhes do pedido:', error);
      }
    );
  }

  abrirModal() {
    
    console.log('1111');
    this.modalVisible = true;
  }

  fecharModal() {
    console.log('2222')
    this.modalVisible = false;
  }

  onSubmit() {
    console.log('buscando:', this.buscaData.busca);
    this.abrirModal();
  }
}
