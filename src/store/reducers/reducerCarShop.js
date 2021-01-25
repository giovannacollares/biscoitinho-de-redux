const ESTADO_INICIAL = {
  feed: [
    {
      id: 1,
      color: "Azul",
      tamanho: "M",
      preco: "15,00",
    },
    {
      id: 2,
      color: "Vermelho",
      tamanho: "G",
      preco: "50,00",
    },
    {
      id: 3,
      color: "Rosa",
      tamanho: "P",
      preco: "25,00",
    },
  ],
};

export default function roupas(state = ESTADO_INICIAL, action){
    return state
}