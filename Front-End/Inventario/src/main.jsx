import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Editar_Producto from './components/Editar_Producto.jsx';
import Registrar_Producto from './components/Registrar_Producto.jsx';
import Editar_Insumo from './components/Editar_Insumo.jsx';
import Registrar_Insumo from './components/Registrar_Insumo.jsx';
import Editar_Proveedor from './components/Editar_Proveedor.jsx';
import Registrar_Proveedor from './components/Registrar_Proveedor.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'Menu',
    element:<Menu/>,
  },
  {
    path:'editar_producto',
    element:<Editar_Producto/>,
  },
  {
    path:'registrar_producto',
    element:<Registrar_Producto/>,
  },
  {
    path:'editar_insumo',
    element:<Editar_Insumo/>,
  },
  {
    path:'registrar_insumo',
    element:<Registrar_Insumo/>,
  },
  {
    path:'editar_proveedor',
    element:<Editar_Proveedor/>,
  },
  {
    path:'registrar_proveedor',
    element:<Registrar_Proveedor/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
