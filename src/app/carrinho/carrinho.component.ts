import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrinhosService } from '../service/carrinhos/carrinhos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  limparCarrinho() {
    this.service.limparCarrinho();

  }

  carrinho$: Observable<any>;

  constructor(private service: CarrinhosService) {
    this.carrinho$ = service.find();
  }
}
