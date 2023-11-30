import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nico from './nicoComponentes/Nico.jsx'
import Jero from './nicoComponentes/jero.jsx'
import ProyectPage2 from './nicoComponentes/ProyectPage2.jsx'
import ProyectPage3 from './nicoComponentes/ProyectPage3.jsx'
import MostrarBoton from './nicoComponentes/MostrarBoton.jsx'
import Profile from './nicoComponentes/Profile.jsx'
import ShoppingList from './nicoComponentes/ShoppingList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nico />
    <Jero />
    <ProyectPage2 />
    <ProyectPage3 />
    <MostrarBoton />
    <Profile />
    <ShoppingList />
  </React.StrictMode>,
)
