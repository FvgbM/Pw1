import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutosService } from '../service/produtos/produtos.service';
import { ProdutoDetalhe } from '../model/produto-detalhe';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {

  id: string = "";

  produto$: Observable<ProdutoDetalhe>;

  constructor(private service: ProdutosService) {
    this.produto$ = service.find(this.id)
  }

}