const INITIAL_STATE = {
  fortune: [{}],
  feed: [
    {
      id: 1,
      message: 'Não importa o tamanho da montanha, ela não pode tapar o sol. Não desista!',
      numbers: 'Números da Mega-Sena: 03 17 21 29 34 56',
      animal: "Animal da sorte: Arara-Azul",
    },
    {
      id: 2,
      message: 'Espere pelo mais sábio dos conselhos: o tempo. Vai dar tudo certo.',
      numbers: "Números da Mega-Sena: 12 25 39 41 43 55",
      animal: "Animal da sorte: Jaguatirica",
    },
    {
      id: 3,
      message: 'A maior de todas as torres começa no solo. Continue.',
      numbers: "Números da Mega-Sena: 05 09 34 49 57 59",
      animal: "Animal da sorte: Capivara",
    },
  ],
};

export default function fortuneCookie(state = INITIAL_STATE, action) {
  if (action.type === "ADD_COOKIE") {
    return {
      ...state,
      fortune: action.fortuneCookie,
    };
  }
  return state;
}
