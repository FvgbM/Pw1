import { ItemCarrinho } from "./item-carrinho";
import { Produto } from "./produto";

export interface Carrinho {
    total: number
    itens: ItemCarrinho[];
}