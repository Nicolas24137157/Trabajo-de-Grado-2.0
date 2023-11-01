import React, {useState, useEffect} from "react";
import "./Platos_Menu.css";
import { Link } from "react-router-dom";
import { getProveedores, deleteProveedor } from "./proveedores.service";

function platos_Menu(props) {

  const [proveedores, setProveedores] = useState([])

  useEffect(()=>{
    getProveedores().then( proveedores => setProveedores(proveedores))   
  },[])

  const borrarProveedor = (id_proveedor) => {
    deleteProveedor(id_proveedor).then(() =>  
      getProveedores().then( proveedores => setProveedores(proveedores)) 
    );
  }

  const editarProveedor = (id_proveedor) => {
    window.location.href = "./editar_proveedor?id_proveedor="+id_proveedor;
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
          <Link to="/registrar_proveedor">
            <button type="submit" className="btn btn-primary btn-lg">
              Registrar Proveedor
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
                        <th>NIT</th>
                        <th>Nombre del Proveedor</th>
                        <th>Precio</th>
                        <th>Descripción del Proveedor</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                  {proveedores.map( proveedor => 
                    <tr key = {proveedor.id_proveedor}>
                      <td>{proveedor.id_proveedor}</td>
                      <td>{proveedor.nombre_proveedor}</td>
                      <td>{proveedor.precio}</td>
                      <td>{proveedor.descripcion}</td>                    
                      <td>
                        <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons">&#xE03B;</i></a>
                        <a onClick={()=>{editarProveedor(proveedor.id_proveedor)}}className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                        <a onClick={()=>{borrarProveedor(proveedor.id_proveedor)}} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
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
