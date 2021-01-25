import React from "react";

import { connect } from "react-redux";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <span>Aula: {activeLesson.title}</span>
    </div>
  );
};

export default connect((state) => ({
  // recebemos a licao e modulo ativo com a disparada da action
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
