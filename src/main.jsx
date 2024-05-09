import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LogIn from './pages/LogIn.jsx'
import Product from './pages/Product.jsx'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
