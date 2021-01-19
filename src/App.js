import React from 'react'
import { Provider } from "react-redux";
import store from './store'

import Sidebar from './components/Sidebar'
import Video from './components/Video'
import course from './store/reducers/course';


const App = () => {
  return (
    <div>
      <Provider store={ store }>
            <Video />
           <Sidebar />
      </Provider>
    </div>
  )
}

export default App
