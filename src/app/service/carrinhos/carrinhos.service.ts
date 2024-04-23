import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { Carrinho } from 'src/app/model/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhosService {

  private readonly API = "/assets/carrinho.json"

  constructor(private httpClient: HttpClient) { }
 
  find(): Observable<Carrinho> {
    console.log("carrinho http")
    return this.httpClient.get<Carrinho>(this.API).pipe(first());
  }
}
