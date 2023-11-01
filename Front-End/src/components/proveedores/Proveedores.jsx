import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getProveedor, deleteProveedor } from "./proveedores.services";


function Proveedores() {

  const [proveedores, setProveedores] = useState([])

  useEffect(()=>{
    getProveedor().then( proveedores => setProveedores(proveedores))   
  },[])

  const borrarProveedor = (NIT) => {
    // Mostrar una ventana emergente de confirmación
    const confirmacion = window.confirm('¿Estás seguro de que deseas borrar el Insumo?');

    if (confirmacion) {
      deleteProveedor(NIT).then(() =>
        getProveedor().then(proveedores => setProveedores(proveedores))
      );
    }
  }


  const editarProveedor = (NIT) => {
    window.location.href = "./editar_proveedor?NIT="+NIT;
  }


  return (
    <div>
         {/* <!-- Header--> */}
      {/* <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Proveedores</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Sección de Proveedores
            </p>
          </div>
        </div>
      </header> */}

       {/* <!-- Header--> */}
       <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Proveedores</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Sección de Proveedores
            </p>
          </div>
        </div>
      </header>

      <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-8">
          <h2>Proveedores</h2>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>NIT</th>
          <th>Nombre del Proveedor</th>
          <th>Celular</th>
          <th>Dirección</th>
          <th style={{ width: "160px"}}>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.map((proveedor) => (
          <tr key={proveedor.NIT}>
            <td>{proveedor.NIT}</td>
            <td>{proveedor.nombre_proveedor}</td>
            <td>{proveedor.celular}</td>
            <td>{proveedor.direccion}</td>
            <td className="td-botones">
              <div className="botones">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => editarProveedor(proveedor.NIT)}
              >
                Editar
              </button>
             
              
              <button
                type="button"
                className="btn btn-danger ml-2"
                onClick={() => borrarProveedor(proveedor.NIT)}
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
        <Link to="/registrar_proveedor">
          <button type="submit" className="btn btn-primary btn-lg">
            Registrar Proveedor
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
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Restaurante Oh La Lá
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Proveedores