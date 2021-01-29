import { combineReducers } from 'redux'

import infoCookie from './reducerInfoCookie'
import fortuneCookie from './reducerFortuneCookie'

export default combineReducers({
    //  Nosso reducer é colocado dentro de um objeto
    fortuneCookie, 
    infoCookie,
})