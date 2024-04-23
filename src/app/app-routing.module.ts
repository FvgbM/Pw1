import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: "busca", component: BuscaComponent},  
  {path:'entrar', component:EntrarComponent},
  {path:'cadastro', component:CadastroComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'detalhe', component: DetalheComponent},
  {path: 'esqueci', component: EsqueciComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'produto', component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
