import React from "react";
import { connect } from "react-redux";
import './css/index.css'

const CuriositieCookie = ({ info }) => {
  return (
    <section className="info">
          <p>{info.message}</p>
    </section>
  );
};

export default connect((state) => ({
        info: state.infoCookie.info
}))(CuriositieCookie);
