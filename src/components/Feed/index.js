import React from "react";
import { connect } from "react-redux";
import Logo from '../FortuneCookie/imagem/biscoitodasorte.png';
import './css/index.css';

import { bindActionCreators } from "redux";
// nossas actions
import * as CookieAction from "../../store/actions/actions";

const Feed = ({ fortuneCookie, addFortuneCookie }) => {
  return (
    <section>
        <h1>Escolha sua sorte:</h1>
        <div className="biscoitinho">
        {fortuneCookie.map((item) => (
          <img src={Logo} alt="Biscoito da Sorte" onClick={() => addFortuneCookie(item)} />
        ))}
        </div>
        
    </section>
  );
};

const mapStateToProps = (state) => ({
  fortuneCookie: state.fortuneCookie.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CookieAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);


// <p key={item.id}> {item.cor} | {item.tamanho} | {item.preco} </p>