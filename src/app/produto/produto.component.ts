import { Component } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  mensagem : string = "";
  prod: Produto = new Produto();
  lista: Produto[] = [];

  public cadastrar(){
    this.mensagem = " Produto cadastrado com sucesso!";
    let produtoaux : Produto = new Produto();
    produtoaux.codigo = this.prod.codigo;
    produtoaux.titulo = this.prod.titulo;
    produtoaux.imagem  = this.prod.imagem;
    produtoaux.preco = this.prod.preco;
    this.lista.push(produtoaux);
  }

}