import React from 'react';
import { Provider } from "react-redux";
import store from './store';

import Feed from './components/Feed';
import Info from './components/Info';
import FortuneCookie from './components/FortuneCookie';
import CuriositieCookie from './components/CuriositieCookie';

const App = () => {
  return (
    <div>
    <main>
      <Provider store={ store }>
           <Info />
           <CuriositieCookie />
           <Feed />
           <FortuneCookie />
      </Provider>
    </main>
    </div>
  )
}

export default App
