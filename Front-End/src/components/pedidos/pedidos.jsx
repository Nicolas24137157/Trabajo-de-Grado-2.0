import React from 'react'
import { Link } from 'react-router-dom'

function Pedidos() {
  return (
    <div  className="animate__animated animate__fadeIn animate">
        {/* <!-- Header--> */}
       <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Pedidos</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Sección de Pedidos
            </p>
          </div>
        </div>
      </header>

      <div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-8">
          <h2>Pedidos</h2>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID Del Pedido</th>
          <th>Nombre de la Persona del Pedido</th>
          <th>Dirección</th>
          <th>Celular</th>
          <th>Pedido</th>
          <th>Precio Total del Pedido</th>
          <th>Número de Mesa</th>
          <th>Estado del Pedido</th>

        </tr>
      </thead>
      <tbody>
        {/* Comentario: Esta sección se rellenará con datos de proveedores */}
        {/* {proveedores.map((proveedor) => (
          <tr>
            <td>{proveedor.id_proveedor}</td>
            <td>{proveedor.NIT}</td>
            <td>{proveedor.nombre_proveedor}</td>
            <td>
              <div className="botones">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editarProveedor(proveedor.id_proveedor)}
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  onClick={() => borrarProveedor(proveedor.id_proveedor)}
                >
                  Borrar
                </button>
              </div>
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
    <div className="col-sm-12 text-start">
      <Link to="/registrar_pedidos">
        <button type="submit" className="btn btn-primary btn-lg">
          Registrar Pedido
        </button>{" "}
      </Link>
    </div>

    <div className="col-sm-12 text-start" style={{ paddingTop: '30px' }}>
      <Link to="/Menu">
        <button type="submit" className="btn btn-primary btn-lg">
          Ir Atrás
        </button>{" "}
      </Link>
    </div>
  </div>
  <div></div>
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

export default Pedidos