export function toggleLesson(module, lesson) {
  return {
    // é obrigatorio passar um type para a action
    type: "TOGGLE_LESSON",
    // aqui é o valor recebido do botão e enviado para onde quisermos
    module,
    lesson,
  };
}

export function adicionarCarrinho(roupas) {
  return {
    type: "ADICIONAR_CARRINHO",
    roupas,
  };
}
