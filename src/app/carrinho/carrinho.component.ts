import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../model/carrinho';
import { CarrinhosService } from '../service/carrinhos/carrinhos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  carrinho$ : Observable<Carrinho>;

  constructor(private service: CarrinhosService) {
    this.carrinho$ = service.find()

  }
}
