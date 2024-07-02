import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App1.jsx'
import './index.css'

import store from './component/store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <App1 />
    </Provider>
  </React.StrictMode >
)
