import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// nossas actions
import * as InfoAction from "../../store/actions/actions";
import './css/index.css'

const Info = ({ infoCookie, addInfoCookie }) => {
  return (
    <section>
        <div>
        {infoCookie.map((item) => (
          <button className="curiosidades" onClick={() => addInfoCookie(item) }>Você Sabia?</button>
        ))}
        </div>
        
    </section>
  );
};

const mapStateToProps = (state) => ({
  infoCookie: state.infoCookie.curiosities,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(InfoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Info);
