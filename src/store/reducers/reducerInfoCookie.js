const INITIAL_STATE = {
  info: [{}],
  curiosities: [
    {
      id: 1,
      message: 'Apesar de popular em restaurantes de comida chinesa, o biscoitinho foi criado em Kyoto, no Japão',
    },
  ],
};

export default function infoCookie(state = INITIAL_STATE, action) {
  if (action.type === "SHOW_INFO") {
    return {
      ...state,
      info: action.infoCookie,
    };
  }
  return state;
}
