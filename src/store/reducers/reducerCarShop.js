const ESTADO_INICIAL = {
  roupa: [{}],
  feed: [
    {
      id: 1,
      cor: "Azul",
      tamanho: "M",
      preco: "15,00",
    },
    {
      id: 2,
      cor: "Vermelho",
      tamanho: "G",
      preco: "50,00",
    },
    {
      id: 3,
      cor: "Rosa",
      tamanho: "P",
      preco: "25,00",
    },
  ],
};

export default function roupas(state = ESTADO_INICIAL, action) {
  if (action.type === "ADICIONAR_CARRINHO") {
    return {
      ...state,
      roupa: action.roupas,
    };
  }
  return state;
}
