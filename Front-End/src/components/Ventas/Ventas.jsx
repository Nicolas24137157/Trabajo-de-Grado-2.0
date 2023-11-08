import React from 'react'
import { Link } from 'react-router-dom'

function Ventas() {
  return (
    <div>
           {/* <!-- Header--> */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Ventas</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Sección de Ventas
            </p>
          </div>
        </div>
      </header>

      <div class="form-group">
        <div class="col-md-12 text-center">
          
        </div>
      </div>

      <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-8">
          <h2>Ventas</h2>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Nombre del Producto</th>
          <th>Mes del Producto Vendido</th>
          <th>Cantidades Totales Vendidas (Cada Mes)</th>
          <th>Ingreso Total Generado</th>
          {/* <th>Dirección</th> */}
          <th style={{ width: "160px"}}>Opciones</th>
        </tr>
        
      </thead>
      <tbody>
        {/* {proveedores.map((proveedor) => ( */}
          {/* <tr key={proveedor.id_proveedor}>
            <td>{proveedor.id_proveedor}</td>
            <td>{proveedor.NIT}</td>
            <td>{proveedor.nombre_proveedor}</td>
            <td>{proveedor.celular}</td>
            <td>{proveedor.direccion}</td> */}
            <td className="td-botones">
              <div className="botones">
              <button
                type="button"
                className="btn btn-warning"
                // onClick={() => editarProveedor(proveedor.id_proveedor)}
              >
                Editar
              </button>
             
              
              <button
                type="button"
                className="btn btn-danger ml-2"
                // onClick={() => borrarProveedor(proveedor.id_proveedor)}
              >
                Borrar
              </button>
              </div>
           </td> 
          {/* </tr> */}
        {/* // ))} */}
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
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Restaurante Oh La Lá
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Ventas