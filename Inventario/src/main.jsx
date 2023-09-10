import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Menu from './components/Menu.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'Menu',
    element:<Menu/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
