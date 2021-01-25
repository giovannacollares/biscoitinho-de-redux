import { createStore } from "redux";

// todos os nossos reducers estao aqui dentro
import rootReducer from './reducers' 

const store = createStore(rootReducer);

export default store;
