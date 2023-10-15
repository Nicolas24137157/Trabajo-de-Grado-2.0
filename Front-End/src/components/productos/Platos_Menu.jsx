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
    deleteProducto(id_producto).then(() =>  
      getProductos().then( productos => setProductos(productos)) 
    );
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

      <div className="form-group">
        <div className="col-md-12 text-center">
          <Link to="/registrar_producto">
            <button type="submit" className="btn btn-primary btn-lg">
              Registrar Producto
            </button>{" "}
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"><h2>Platos Del Menú</h2></div>
                    <div className="col-sm-4">
                        
                    </div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID del Producto</th>
                        <th>Nombre del Producto</th>
                        <th>Precio</th>
                        <th>Descripción del Producto</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                  {productos.map( producto => 
                    <tr key = {producto.id_producto}>
                      <td>{producto.id_producto}</td>
                      <td>{producto.nombre_producto}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.descripion}</td>                    
                      <td>
                        <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                        <a onClick={()=>{editarProducto(producto.id_producto)}}className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                        <a onClick={()=>{borrarProducto(producto.id_producto)}} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                      </td>
                    </tr>)
                  }
                </tbody>
            </table>
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
