import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import bookReducer from './redux/books.js'
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux'

const store = configureStore({
  reducer:{
    books:bookReducer
  }
})

import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
