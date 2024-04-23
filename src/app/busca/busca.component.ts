import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutosService } from '../service/produtos/produtos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
  
  filtro: string = "";

  produtos$: Observable<Produto[]>

  constructor(private service: ProdutosService) {
    if (this.filtro === "")
      this.produtos$ = service.list()
    else 
      this.produtos$ = service.listBy(this.filtro)
  }

  listBy() {
    this.produtos$ = this.service.listBy(this.filtro)
  }

}
