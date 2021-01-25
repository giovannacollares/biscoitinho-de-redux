import React from "react";
import { connect } from "react-redux";

const CarShop = ({roupa}) => {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <strong>{roupa.cor} | {roupa.tamanho} | {roupa.preco}</strong>
    </div>
  );
};

export default connect((state) => ({
    roupa: state.roupas.roupa
}))(CarShop);
