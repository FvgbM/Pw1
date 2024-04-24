import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhosService {
  private carrinho = new BehaviorSubject<any>({ itens: [], total: 0 });

  constructor() { }

 

  find(): Observable<any> {
    return this.carrinho.asObservable();
  }

  adicionarAoCarrinho(produto: any, quantidade: number = 1) {
    let carrinhoAtual = this.carrinho.getValue();
    let item = { produto: produto, quantidade: quantidade };
    carrinhoAtual.itens.push(item);
    // Atualize o total
    carrinhoAtual.total += produto.preco * quantidade;
    this.carrinho.next(carrinhoAtual);
  }
  
}