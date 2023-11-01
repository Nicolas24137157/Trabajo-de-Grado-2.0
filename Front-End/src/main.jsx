import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Editar_Producto from "./components/productos/Editar_Producto.jsx";
import Registrar_Producto from "./components/productos/Registrar_Producto.jsx";
import Editar_Insumo from "./components/Editar_Insumo.jsx";
import Registrar_Insumo from "./components/Registrar_Insumo.jsx";
import Editar_Proveedor from "./components/Editar_Proveedor.jsx";
import Registrar_Proveedor from "./components/Registrar_Proveedor.jsx";
import Platos_Menu from "./components/productos/Platos_Menu.jsx";
import Productos_Insumos from "./components/Productos_Insumos.jsx";
import Proveedores from "./components/Proveedores.jsx";
import Ventas from "./components/Ventas.jsx";
import Historial_Ventas from "./components/Historial_Ventas.jsx";
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
    path: "editar_producto",
    element: <Editar_Producto />,
  },
  {
    path: "registrar_producto",
    element: <Registrar_Producto />,
  },
  {
    path: "editar_insumo",
    element: <Editar_Insumo />,
  },
  {
    path: "registrar_insumo",
    element: <Registrar_Insumo />,
  },
  {
    path: "editar_proveedor",
    element: <Editar_Proveedor />,
  },
  {
    path: "registrar_proveedor",
    element: <Registrar_Proveedor />,
  },
  {
    path: "platos_menu",
    element: <Platos_Menu />,
  },
  {
    path: "productos_insumos",
    element: <Productos_Insumos/>,
  },
  {
    path: "proveedores",
    element: <Proveedores/>,
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
