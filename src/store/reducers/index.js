import { combineReducers } from 'redux'

import course from './reducerCourse'
import roupas from './reducerCarShop'

export default combineReducers({
    //  Nosso reducer é colocado dentro de um objeto
    course,
    roupas, 
})