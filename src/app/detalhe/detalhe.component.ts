import { Component } from '@angular/core';
import { ProdutosService } from '../service/produtos/produtos.service';
import { ProdutoDetalhe } from '../model/produto-detalhe';
import { CarrinhosService } from '../service/carrinhos/carrinhos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {

  id: string = "";
  mensagem: string = "";

  public produto: ProdutoDetalhe = new ProdutoDetalhe();

  constructor(private service: ProdutosService, private carrinhosService: CarrinhosService, private router: Router) {
    let json = localStorage.getItem('detalhe');
    if (json == null) {
      this.mensagem = "Produto não encontrado"; 
    } else {
      this.produto = JSON.parse(json);
      console.log(json);
    }     
  }

  adicionarAoCarrinho(produto: any) {
    this.carrinhosService.adicionarAoCarrinho(produto, 1);
    this.router.navigate(['/carrinho']);
  } 

}