export interface Pedido {
    id: number;
    cliente: string;
    itens: { produto: string; quantidade: number }[];
  }