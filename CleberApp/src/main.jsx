import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home.jsx'
import { Consumo } from './Consumo.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Consumo",
    element: <Consumo />,
  },
  {
    path: "/Carrossel",
    element: <Carrossel />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
