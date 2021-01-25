import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//  colocando nossas Actions dentro de um Objeto
import * as CourseActions from "../../store/actions/actions";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <aside>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.title}
                {/* define uma licao e modulo como ativa.  */}
                <button onClick={() => toggleLesson(module, lesson)}>
                  Selecionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

// funcao que retorna o nosso estado
const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

//  funcao que retorna um dispatch para disparar uma action
const mapDispatchToProps = (dispatch) =>
  // mapeando nosso Objeto em forma de propriedade
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
