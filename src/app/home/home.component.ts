import { Component, OnInit } from '@angular/core';
import { CarrinhosService } from '../service/carrinhos/carrinhos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos = [
    {
      nome: 'Orquidea Phalaenopsis',
      preco: 69.90 ,
      imagem: 'assets/6.jpg',
      descricao: 'A nossa Oriquidea Phalaenopsis Pink Listrada é um presente delicado e charmoso para surpreender a pessoa querida!'
    },
    {
      nome: 'Dupla de orquídeas Denphale',
      preco: 139.90 ,
      imagem: 'assets/5.jpg',
      descricao: 'Esse maravilhoso presente conta com duas delicadas orquídeas denphale, que são perfeitas para expressar carinho, afeto a pessoa homenageada.'
    },
    {
      nome: 'Orquidea Azul',
      preco: 295.90 ,
      imagem: 'assets/4.jpg',
      descricao: 'Delicada e sofisticada orquídea azul, ela é a flor ideal para expressar a pureza, amor e dedicação para a pessoa especial que você quer presentear.'
    },
    {
      nome: "Mini Orquidea Rara Branca",
      descricao: "As flores são itens perecíveis e sazonais, podendo variar de acordo com a época, porém trabalhamos ao máximo para atender com uma qualidade excepcional. Pode ser necessário fazermos algumas substituições para entregar o seu produto dentro do nosso padrão.",
      preco: 99.90 ,
      imagem: "assets/7.jpg"
    },
    {
      nome: "Orquidea Azul no Box Azulejo",
      descricao: "As flores são itens perecíveis e sazonais, podendo variar de acordo com a época, porém trabalhamos ao máximo para atender com uma qualidade excepcional. Pode ser necessário fazermos algumas substituições para entregar o seu produto dentro do nosso padrão.",
      preco: 379.90 ,
      imagem: "assets/8.jpg"
    },
    {
      nome: "Mini Orquidea Rara Lilas",
      descricao: "As flores são itens perecíveis e sazonais, podendo variar de acordo com a época, porém trabalhamos ao máximo para atender com uma qualidade excepcional. Pode ser necessário fazermos algumas substituições para entregar o seu produto dentro do nosso padrão.",
      preco: 99.90 ,
      imagem: "assets/9.jpg"
    }
  ];
  constructor(private carrinhosService: CarrinhosService, private router: Router){}
  ngOnInit(): void {
    
  }

  adicionarAoCarrinho(produto: any) {
    this.carrinhosService.adicionarAoCarrinho(produto, 1);
    this.router.navigate(['/carrinho']);
  } 
  
    detalheProduto(detalhe: any) {
    localStorage.setItem('detalhe', JSON.stringify(detalhe));
    this.router.navigate(['/detalhe']);
  }  
}