import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AppRoutingModule } from './app-routing.module';
import { DetalhesPedidoComponent } from './detalhes-pedido/detalhes-pedido.component';
import { MenuComponent } from './menu/menu.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PedidosComponent,
    DetalhesPedidoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
