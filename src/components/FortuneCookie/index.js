import React from "react";
import { connect } from "react-redux";
import './css/index.css';

const FortuneCookie = ({ fortune }) => {
  return (
    <section className="message">
    <div class="card">
        <div class="container">
        <h2>Sua sorte do dia é:</h2>
          <p><b>{fortune.message}</b></p>
          <p>{fortune.numbers} </p>
          <p>{fortune.animal} </p>
          </div>
    </div>
    </section>
  );
};

export default connect((state) => ({
        fortune: state.fortuneCookie.fortune
}))(FortuneCookie);
