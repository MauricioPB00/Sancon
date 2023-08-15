import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetalhesPedidoComponent } from './detalhes-pedido/detalhes-pedido.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pedidos', component:  PedidosComponent },
  { path: 'detalhes', component:  DetalhesPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
