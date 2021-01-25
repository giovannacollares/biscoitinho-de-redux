import React from "react";
import { connect } from "react-redux";

const Feed = ({ roupas }) => {
  return (
    <section>
      <h3>Feed de Roupas</h3>
      {console.log(roupas)}
    </section>
  );
};

const mapStateToProps = (state) => ({
  roupas: state.roupas.feed,
});

export default connect(mapStateToProps)(Feed);
