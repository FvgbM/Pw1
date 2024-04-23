import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { Produto } from 'src/app/model/produto';
import { ProdutoDetalhe } from 'src/app/model/produto-detalhe';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = "/assets/produtos.json"
  private readonly API2 = "/assets/produto.json"

  constructor(private httpClient: HttpClient) { }

  find(id: string): Observable<ProdutoDetalhe> {
    console.log(this.API)
    return this.httpClient.get<ProdutoDetalhe>(this.API2).pipe(first())
  }

  list(): Observable<Produto[]> {
    console.log(this.API)
    return this.httpClient.get<Produto[]>(this.API).pipe(first())
  }

  listBy(filtro: string): Observable<Produto[]> {
    console.log(`${this.API}?filter=${filtro}`)

    return this.httpClient.get<Produto[]>(`${this.API}?filter=${filtro}`).pipe(
      map((produtos: Produto[]) => {
        return produtos.filter(produto => produto.nome.toLowerCase().includes(filtro.toLowerCase()) || produto.descricao.toLowerCase().includes(filtro.toLowerCase()));
      }),
      first()
    );

    
  }

}
