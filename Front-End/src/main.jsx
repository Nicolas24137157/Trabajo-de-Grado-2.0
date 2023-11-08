import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "/src/components/Menú/Menu.jsx";
import Platos_Menu from "/src/components/productos/Platos_Menu.jsx";
import Registrar_Producto from "./components/productos/Registrar_Producto.jsx";
import Editar_Producto from "./components/productos/Editar_Producto.jsx";
import Productos_Insumos from "/src/components/insumos/Productos_Insumos.jsx";
import Registrar_Insumo from "/src/components/insumos/Registrar_Insumo.jsx";
import Editar_Insumo from "/src/components/insumos/Editar_Insumo.jsx";
import Proveedores from "/src/components/proveedores/Proveedores.jsx";
import Registrar_Proveedor from "/src/components/proveedores/Registrar_Proveedor.jsx";
import Editar_Proveedor from "/src/components/proveedores/Editar_Proveedor.jsx";
import Ventas from "/src/components/Ventas/Ventas.jsx";
import Historial_Ventas from "/src/components/Ventas/Historial_Ventas.jsx";
import Pedidos from "./components/pedidos/pedidos.jsx";
import Registrar_Pedidos from "./components/pedidos/Registrar_Pedidos.jsx";
import Registrar_Devoluciones from "./components/devoluciones/Registrar_Devoluciones.jsx";
import Seccion_Devoluciones from "./components/devoluciones/Seccion_Devoluciones.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "Menu",
    element: <Menu />,
  },

  {
    path: "platos_menu",
    element: <Platos_Menu />,
  },

  {
    path: "registrar_producto",
    element: <Registrar_Producto />,
  },

  {
    path: "editar_producto",
    element: <Editar_Producto />,
  },
 
  {
    path: "productos_insumos",
    element: <Productos_Insumos/>,
  },

  {
    path: "registrar_insumo",
    element: <Registrar_Insumo />,
  },

  {
    path: "editar_insumo",
    element: <Editar_Insumo />,
  },

  {
    path: "proveedores",
    element: <Proveedores/>,
  },
  
  {
    path: "registrar_proveedor",
    element: <Registrar_Proveedor />,
  },

  {
    path: "editar_proveedor",
    element: <Editar_Proveedor />,
  },
 


  {
    path: "ventas",
    element: <Ventas/>,
  },

  {
    path: "historial_ventas",
    element: <Historial_Ventas/>,
  },

  {
    path: "pedidos",
    element: <Pedidos/>,
  },

  {
    path: "registrar_pedidos",
    element: <Registrar_Pedidos/>,
  },

  {
    path: "devoluciones",
    element: <Registrar_Devoluciones/>,
  },

  {
    path: "seccion_registros",
    element: <Seccion_Devoluciones/>,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
