import React, {useState, useEffect} from "react";
import "./Platos_Menu.css";
import { Link } from "react-router-dom";
import { getProductos, deleteProducto } from "./productos.service";

function platos_Menu(props) {
  
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    getProductos().then( productos => setProductos(productos))   
  },[])

  const borrarProducto = (id_producto) => {
    // Mostrar una ventana emergente de confirmación
    const confirmacion = window.confirm('¿Estás seguro de que deseas borrar el plato del Menú?');

    if (confirmacion) {
      deleteProducto(id_producto).then(() =>
        getProductos().then(productos => setProductos(productos))
      );
    }
  }


  const editarProducto = (id_producto) => {
    window.location.href = "./editar_producto?id_producto="+id_producto;
  }

  

  return (
    <div>
      {/* <!-- Header--> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Platos del Menú</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Sección de Platos del Menú
            </p>
          </div>
        </div>
      </header>

      
      <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-8">
          <h2>Platos Del Menú</h2>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID del Producto</th>
          <th>Nombre del Producto</th>
          <th>Precio</th>
          <th>Descripción del Producto</th>
          <th style={{ width: "160px"}}>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id_producto}>
            <td>{producto.id_producto}</td>
            <td>{producto.nombre_producto}</td>
            <td>{producto.precio}</td>
            <td>{producto.descripcion}</td>
            <td className="td-botones">
              <div className="botones">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => editarProducto(producto.id_producto)}
              >
                Editar
              </button>
             
              
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => borrarProducto(producto.id_producto)}
              >
                Borrar
              </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="col-sm-12 text-start">
        <Link to="/registrar_producto">
          <button type="submit" className="btn btn-primary btn-lg">
            Registrar Producto
          </button>{" "}
        </Link>
      </div>

      <div className="col-sm-12 text-start" style={{paddingTop: '30px'}}>
        <Link to="/Menu">
          <button type="submit" className="btn btn-primary btn-lg">
            Ir Atrás
          </button>{" "}
        </Link>
      </div>
      
  </div>
  <div>
  
</div>
</div>

    
    
      


      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Restaurante Oh La Lá
          </p>
        </div>
      </footer>
    </div>
  );
}

export default platos_Menu;
