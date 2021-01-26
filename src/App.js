import React from 'react';
import { Provider } from "react-redux";
import store from './store';

import Feed from './components/Feed';
import FortuneCookie from './components/FortuneCookie';

const App = () => {
  return (
    <div>
    <main>
      <Provider store={ store }>
           <Feed />
           <FortuneCookie />
      </Provider>
    </main>
    </div>
  )
}

export default App
